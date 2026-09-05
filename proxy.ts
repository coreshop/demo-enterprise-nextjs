import NextAuth from 'next-auth';
import {authConfig} from './auth.config';
import {NextResponse} from 'next/server';
import {getOrder} from '@/lib';

const {auth} = NextAuth(authConfig);

// Auth.js session handling plus the checkout guard: every checkout step needs a cart and the
// steps before it completed, otherwise the visitor is sent back to the right step.
export const proxy = auth(async (request) => {
    if (!request.nextUrl.pathname.startsWith('/checkout')) {
        return NextResponse.next();
    }

    const cartToken = request.cookies.get('cartToken')?.value;

    if (!cartToken) {
        return NextResponse.redirect(new URL('/cart', request.url));
    }

    if (request.nextUrl.pathname === '/checkout') {
        return NextResponse.redirect(new URL('/checkout/address', request.url));
    }

    let cart;
    try {
        cart = await getOrder({cartToken});
    } catch {
        return NextResponse.next();
    }

    if (!cart) {
        return NextResponse.redirect(new URL('/cart', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/checkout/customer') && cart.customer) {
        return NextResponse.redirect(new URL('/checkout/address', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/checkout/address') && !cart.customer) {
        return NextResponse.redirect(new URL('/checkout/customer', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/checkout/shipping') && !cart.shippingAddress) {
        return NextResponse.redirect(new URL('/checkout/address', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/checkout/payment')) {
        if (!cart.shippingAddress) {
            return NextResponse.redirect(new URL('/checkout/address', request.url));
        }
        if (!cart.carrier) {
            return NextResponse.redirect(new URL('/checkout/shipping', request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith('/checkout/summary')) {
        if (!cart.shippingAddress) {
            return NextResponse.redirect(new URL('/checkout/address', request.url));
        }
        if (!cart.paymentProvider) {
            return NextResponse.redirect(new URL('/checkout/payment', request.url));
        }
    }

    return NextResponse.next();
});

export const config = {
    // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
