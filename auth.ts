import NextAuth from 'next-auth';
import {authConfig} from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import {authorize} from "@/lib";

export const {auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: {label: "Password", type: "password"},
                orderToken: {type: "hidden"}
            },
            async authorize(credentials, req): Promise<any> {
                if (credentials === undefined) {
                    return null;
                }

                try {
                    const jwtToken = await authorize({
                        username: credentials.email,
                        password: credentials.password,
                        orderToken: credentials.orderToken
                    })

                    if (!jwtToken) {
                        // credentials are invalid
                        return null;
                    }

                    return {
                        ...credentials,
                        jwtToken,
                    };
                } catch (e) {
                    return null;
                }
            },
        }),
    ],
});