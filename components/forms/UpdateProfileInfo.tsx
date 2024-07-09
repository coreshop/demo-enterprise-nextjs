'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerSchema, GuestCustomerType } from "@/schema/CustomerRegistration";
import Loading from "@/app/loading";
import {Form} from "react-bootstrap";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import {updateCustomerAddressAction} from "@/components/actions";

export default function UpdateProfileInfo() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<GuestCustomerType>({
        resolver: zodResolver(CustomerSchema),
    });

    const onSubmit = async (data: GuestCustomerType) => {
        // await the action
    };

    return (
        <div>
            {isSubmitting && <Loading />}
            {!isSubmitting && (
                <Form className="border-0 bg-light p-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="salutation">
                                <Form.Label>Salutation</Form.Label>
                                <Form.Select aria-label="" {...register('salutation')} defaultValue="mr">
                                    <option value="mrs">Mrs.</option>
                                    <option value="mr">Mr.</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="firstnaame">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                    isInvalid={!!errors.firstname}
                                    {...register('firstname')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a First Name
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="lastame">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                    isInvalid={!!errors.lastname}
                                    {...register('lastname')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a Last Name
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="E-mail"
                                    isInvalid={!!errors.email}
                                    {...register('email')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid E-mail
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>

                    </div>
                    <div className="d-flex flex-column flex-sm-row justify-content-end">
                        <CoreButton type="submit" text="Submit" icon={false} variant={CoreButtontype.Primary}/>
                    </div>
                </Form>
            )}
        </div>
    );
}
