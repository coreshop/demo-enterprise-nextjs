import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import {NextRequest, NextResponse} from "next/server";
import {getOrder} from "@/lib";

export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/checkout')) {
        const cartToken = request.cookies.get('cartToken')?.value;

        if (!cartToken) {
            return NextResponse.redirect(new URL('/cart', request.url));
        }

        const cart = await getOrder({cartToken: cartToken})

        if (request.nextUrl.pathname === '/checkout') {
            return NextResponse.redirect(new URL('/checkout/address', request.url));
        }

        if (!cart) {
            return NextResponse.redirect(new URL('/cart', request.url));
        }

        if (request.nextUrl.pathname.startsWith('/checkout/customer')) {
            if (cart.customer) {
                return NextResponse.redirect(new URL('/checkout/address', request.url));
            }
        }

        if (request.nextUrl.pathname.startsWith('/checkout/address')) {
            if (!cart.customer) {
                return NextResponse.redirect(new URL('/checkout/customer', request.url));
            }
        }

        if (request.nextUrl.pathname.startsWith('/checkout/shipping')) {
            if (!cart.shippingAddress) {
                return NextResponse.redirect(new URL('/checkout/address', request.url));
            }
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
    }
}