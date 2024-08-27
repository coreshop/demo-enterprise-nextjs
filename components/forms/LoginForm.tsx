'use client';

import * as z from "zod";
import {useFormState, useFormStatus} from "react-dom";
import {authenticate} from "@/lib/auth";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import Form from "react-bootstrap/Form";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import Link from  "next/link";

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

interface LoginFormData {
    email: string;
    password: string;
}
export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid}
    } = useForm<LoginFormData>({
        mode: "onChange",
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);
        dispatch(formData);
    };

    return <div>
        <h3>Login</h3>
        <p className="gray-600">Log in with existing account</p>

        <Form noValidate validated={isValid} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    isInvalid={!!errors.email}
                    {...register("email")}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    required
                    isInvalid={!!errors.password}
                    {...register("password")}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                </Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex flex-column flex-sm-row justify-content-end">
                <LoginButton/>
            </div>

            <Link href="/reset-password">Reset Password</Link>

            <div className="mt-3" aria-live="polite" aria-atomic="true">
                {errorMessage && (
                    <><p className="alert alert-danger">{errorMessage}</p></>
                )}
            </div>
        </Form>
    </div>

}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <CoreButton type="submit" text="Login" icon={true} iconPost={true} iconType="BoxArrowInRight" variant={CoreButtontype.Primary} aria-disabled={pending}/>
    );
}