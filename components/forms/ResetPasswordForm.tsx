'use client';

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordAction } from "@/components/actions";
import Loading from "@/app/loading";
import {Alert, Form } from "react-bootstrap";
import { CoreButton } from "@/stories/Atoms/Button/CoreButton";
import { CoreButtontype } from "@/stories/Atoms/Button/types";
import React, {useState} from "react";

const UsernameSchema = z.object({
    username: z.string().min(1, "username/email required"),
});

type UsernameFormInputs = {
    username: string;
};

export default function ResetPasswordForm() {
    const [submissionResult, setSubmissionResult] = useState<string | null>(null);
    const [submissionError, setSubmissionError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<UsernameFormInputs>({
        resolver: zodResolver(UsernameSchema),
        defaultValues: {
            username: '',
        }
    });

    const onSubmit: SubmitHandler<UsernameFormInputs> = async (data) => {
        const result = await resetPasswordAction(null, data.username);
        if(result.message){
            setSubmissionError(result.message);
            setSubmissionResult(null);
        } else {
            setSubmissionResult('Reset link sent.');
            setSubmissionError(null);
        }

        reset();
    };

    return (
        <div className="mb-3">
            <h3>Reset Password</h3>
            {isSubmitting && <Loading />}
            {submissionResult && <Alert variant="success">{submissionResult}</Alert>}
            {submissionError && <Alert variant="danger">{submissionError}</Alert>}
            {!isSubmitting && (
                <Form className="border-0 p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-3">
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                isInvalid={!!errors.username}
                                {...register("username")}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-end">
                        <CoreButton type="submit" text="Submit" icon={false} variant={CoreButtontype.Primary} />
                    </div>
                </Form>
            )}
        </div>
    );
}
