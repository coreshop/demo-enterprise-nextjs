'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Loading from "@/app/loading";
import { Form } from "react-bootstrap";
import { CoreButton } from "@/stories/Atoms/Button/CoreButton";
import { CoreButtontype } from "@/stories/Atoms/Button/types";
import {updatePasswordAction, validateCurrentPassword} from "@/components/actions";

const PasswordSchema = z.object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
    repeatPassword: z.string().min(8, "Repeat password must be at least 8 characters"),
}).refine(data => data.newPassword === data.repeatPassword, {
    message: "New passwords must match",
    path: ["repeatPassword"],
});

type PasswordInputType = z.infer<typeof PasswordSchema>;

export default function UpdatePassword() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<PasswordInputType>({
        resolver: zodResolver(PasswordSchema),
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            repeatPassword: '',
        }
    });

    const onSubmit = async (data: PasswordInputType) => {
        const { currentPassword, newPassword } = data;

        // Validate current password
        const isCurrentPasswordValid = await validateCurrentPassword(null, currentPassword);

        if (isCurrentPasswordValid === null) {
            alert('Current password is incorrect');
            return;
        }

        await updatePasswordAction(null, newPassword);
        reset();
    };

    return (
        <div>
            <h3>Change Password</h3>
            {isSubmitting && <Loading />}
            {!isSubmitting && (
                <Form className="border-0 p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-3">
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="currentPassword">
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Current Password"
                                    isInvalid={!!errors.currentPassword}
                                    {...register('currentPassword')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.currentPassword?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="newPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="New Password"
                                    isInvalid={!!errors.newPassword}
                                    {...register('newPassword')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.newPassword?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="repeatPassword">
                                <Form.Label>Repeat New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Repeat New Password"
                                    isInvalid={!!errors.repeatPassword}
                                    {...register('repeatPassword')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.repeatPassword?.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-end">
                        <CoreButton type="submit" text="Submit" icon={false} variant={CoreButtontype.Primary} />
                    </div>
                </Form>
            )}
        </div>
    );
}
