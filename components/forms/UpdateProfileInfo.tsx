'use client';

import React from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {MeSchema} from "@/schema/CustomerRegistration";
import Loading from "@/app/loading";
import {Form} from "react-bootstrap";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import {updateMeAction} from "@/components/actions";
import {AddressFragment, MeInput} from "@/lib/graphql/types.generated";

interface MeInputExtend extends MeInput {
    defaultAddress: {
        id: string;
    } | null;
}

export default function UpdateProfileInfo({user, addresses} : {user: MeInputExtend | undefined | null, addresses: AddressFragment[] | [] | undefined}) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<MeInputExtend>({
        resolver: zodResolver(MeSchema) as unknown as Resolver<MeInputExtend>,
        defaultValues: {
            salutation: user?.salutation ?? '',
            gender: user?.gender ?? '',
            firstname: user?.firstname ?? '',
            lastname: user?.lastname ?? '',
            newsletterActive: user?.newsletterActive ?? false,
            defaultAddressId: user?.defaultAddressId,
            defaultAddress: user?.defaultAddress ?? { id: '' }
        }
    });
    const onSubmit = async (data: MeInput) => {
        await updateMeAction(null, data);
    };

    return (
        <div>
            <h3>Personal information</h3>
            {isSubmitting && <Loading/>}
            {!isSubmitting && (

                <Form className="border-0 p-3" onSubmit={handleSubmit(onSubmit)}>

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
                            <Form.Group className="mb-3" controlId="defaultAddressId">
                                <Form.Label>Default Address</Form.Label>
                                <Form.Select aria-label="" {...register('defaultAddressId')} defaultValue={ user?.defaultAddress?.id } isInvalid={!!errors.defaultAddressId} >
                                    <option value="">Empty</option>
                                    {addresses && addresses.map((address) => (
                                        <option key={address.id} value={address.id as string}>
                                            {address.street} {address.number} {address.postcode}
                                        </option>
                                    ))}
                                </Form.Select>
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
