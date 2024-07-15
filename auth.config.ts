import {NextAuthConfig} from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        jwt: async ({token, user, account}: { token: any, user: any, account: any }) => {
            if (account) {
                token.accessToken = user.access_token
            }
            return token;
        },
        async session({session, token, user}: {session: any, token:any, user: any}) {
            session.accessToken = token.accessToken
            return session
        },
        authorized({auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                return isLoggedIn;
                // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return true; // Allow authenticated users to access all pages
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
    cookies: {
        sessionToken: {
            name: `authjs.session-token`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60, // set duration for cookie session 1 hour (same as the pimcore)
            },
        },
    },
} satisfies NextAuthConfig;