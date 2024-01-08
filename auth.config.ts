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
} satisfies NextAuthConfig;