'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import {cookies} from "next/headers";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const token = cookies().get('cartToken')?.value;

        if (token) {
            debugger;
            formData.append('orderToken', token);
        }

        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}