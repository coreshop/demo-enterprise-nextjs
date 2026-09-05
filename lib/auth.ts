'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {CallbackRouteError, CredentialsSignin} from "@auth/core/errors";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const token = (await cookies()).get('cartToken')?.value;

        if (token) {
            formData.append('orderToken', token);
        }

        await signIn('credentials', formData);

        return redirect('/');

    } catch (error) {
        if (error instanceof CredentialsSignin || error instanceof CallbackRouteError) {
            return 'Invalid credentials.';
        } else if (error instanceof AuthError) {
            return 'Something went wrong.';
        } else {
                throw error;
        }
    }
}