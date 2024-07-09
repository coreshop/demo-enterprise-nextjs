'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, {useEffect} from 'react';
import { Form } from 'react-bootstrap';
import {registerCustomerCartAddress} from '@/components/actions';
import { AddressSchema, AddressType } from '@/schema/CustomerRegistration';
import Loading from '@/app/loading';
import {AddressFragment, CountryEnumType, OrderFragment} from '@/lib/graphql/types.generated';
import { CoreButton } from '@/stories/Atoms/Button/CoreButton';
import { CoreButtontype } from '@/stories/Atoms/Button/types';

export default function CreateAddress({ cart}: {
    cart: OrderFragment,
}) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<AddressType>({
        mode: 'onChange',
        resolver: zodResolver(AddressSchema),
    });

    const onSubmit = async (address: AddressType) => {
        await registerCustomerCartAddress(null, address);
        reset();
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
                            <Form.Group className="mb-3" controlId="company">
                                <Form.Label>Company</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Company"
                                    isInvalid={!!errors.company}
                                    {...register('company')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a Company Name
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12 col-lg-8">
                            <Form.Group className="mb-3" controlId="street">
                                <Form.Label>Street</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Street"
                                    isInvalid={!!errors.street}
                                    {...register('street')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a Street
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Form.Group className="mb-3" controlId="number">
                                <Form.Label>Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Number"
                                    isInvalid={!!errors.number}
                                    {...register('number')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a Street number
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Form.Group className="mb-3" controlId="postcode">
                                <Form.Label>ZIP</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="ZIP"
                                    isInvalid={!!errors.postcode}
                                    {...register('postcode')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a ZIP number
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12 col-lg-8">
                            <Form.Group className="mb-3" controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    isInvalid={!!errors.city}
                                    {...register('city')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a City
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Select aria-label="Default select example" {...register('country')}>
                                    {Object.keys(CountryEnumType).map((country: string) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-12">
                            <Form.Group className="mb-3" controlId="phoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Phone Number"
                                    isInvalid={!!errors.phoneNumber}
                                    {...register('phoneNumber')}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a Phone Number
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="termsAccepted">
                            <Form.Check type="checkbox">
                                <Form.Check.Input
                                    type="checkbox"
                                    isInvalid={!!errors.termsAccepted}
                                    {...register('termsAccepted', { required: true })}
                                />
                                <Form.Check.Label>
                                    I have read and agree to the terms and conditions
                                </Form.Check.Label>
                                <Form.Control.Feedback type="invalid">
                                    You must accept the terms and conditions
                                </Form.Control.Feedback>
                            </Form.Check>
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
