import NextAuth from 'next-auth';
import {authConfig} from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import {authorize} from "@/lib";
import {cookies} from "next/headers";

export const {auth, signIn, signOut} = NextAuth({
    ...authConfig,
    events: {
        async signIn({user}) {
            // @ts-ignore
            if (user.active_order) {
                // @ts-ignore
                cookies().set('cartToken', user.active_order);
            }
        },
    },
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


                    const result = await authorize({// @ts-ignore
                        username: credentials.email, // @ts-ignore
                        password: credentials.password,// @ts-ignore
                        orderToken: credentials.orderToken
                    })

                    if (!result) {
                        // credentials are invalid
                        return null;
                    }

                    return {
                        id: credentials.email as string,
                        email: credentials.email as string,
                        access_token: result.token,
                        active_order: result.activeOrderToken
                    };
                } catch (e) {
                    return null;
                }
            },
        }),
    ],
});