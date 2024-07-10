'use client';

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {MeSchema} from "@/schema/CustomerRegistration";
import Loading from "@/app/loading";
import {Form} from "react-bootstrap";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import {updateMeAction} from "@/components/actions";
import {MeInput} from "@/lib/graphql/types.generated";

export default function UpdateProfileInfo({user} : {user: MeInput | undefined | null}) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<MeInput>({
        resolver: zodResolver(MeSchema),
        defaultValues: {
            salutation: user?.salutation ?? '',
            gender: user?.gender ?? '',
            firstname: user?.firstname ?? '',
            lastname: user?.lastname ?? '',
            newsletterActive: user?.newsletterActive ?? false
        }
    });

    const onSubmit = async (data: MeInput) => {
        await updateMeAction(null, data);
    };

    return (
        <div>
            {isSubmitting && <Loading />}
            {!isSubmitting && (
                <Form className="border-0 p-3" onSubmit={handleSubmit(onSubmit)}>
                    <h3>Personal information</h3>
                    <div className="row mt-3">
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="salutation">
                                <Form.Label>Salutation</Form.Label>
                                <Form.Select aria-label="" {...register('salutation')}>
                                    <option value="">Empty</option>
                                    <option value="mrs">Mrs</option>
                                    <option value="mr">Mr</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select aria-label="" {...register('gender')}>
                                    <option value="">Empty</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    <option value="unknown">Unknown</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="firstname">
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
                            <Form.Group className="mb-3" controlId="lastname">
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
                            <Form.Group className="mb-3" controlId="newsletterActive">
                                <Form.Check type="checkbox">
                                    <Form.Check.Input
                                        type="checkbox"
                                        {...register('newsletterActive')}
                                    />
                                    <Form.Check.Label>
                                        I accept to receive Newsletters
                                    </Form.Check.Label>

                                </Form.Check>
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
