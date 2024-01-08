'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const token = cookies().get('cartToken')?.value;

        if (token) {
            formData.append('orderToken', token);
        }

        await signIn('credentials', formData);

        return redirect('/');
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