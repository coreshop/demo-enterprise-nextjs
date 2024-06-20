import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomerSchema, GuestCustomerType } from "@/schema/CustomerRegistration";
import {registerGuestCustomer} from "@/components/cart/actions";
import Form from "react-bootstrap/Form";
import {CountryEnumType} from "@/lib/graphql/types.generated";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";


export default function GuestRegisterForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid }
    } = useForm<GuestCustomerType>({
        mode: "onChange",
        resolver: zodResolver(CustomerSchema),
    });

    function onSubmit(user: GuestCustomerType) {
        return registerGuestCustomer(null, user);
    };

    return (

            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <Form className="border-0 bg-light p-3" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="salutation">
                                        <Form.Label>Salutation</Form.Label>
                                        <Form.Select aria-label="" {...register("salutation")}>
                                            <option value="mrs">Mrs.</option>
                                            <option value="mr">Mr.</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="gender">
                                        <Form.Label>Salutation</Form.Label>
                                        <Form.Select aria-label="" {...register("gender")}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name"
                                                      isInvalid={!!errors.firstname} {...register("firstname")} />
                                        <Form.Control.Feedback type="invalid">
                                        Please provide a First Name
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name"
                                                      isInvalid={!!errors.lastname} {...register("lastname")}/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a Last Name
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"
                                                      isInvalid={!!errors.email} {...register("email")}/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide an email
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="mt-3"></div>
                            <div className="pb-3">
                                <h4>Address Information</h4>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Form.Group className="mb-3" controlId="address_company">
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Company" {...register("address.company")} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a Company
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="address_salutation">
                                        <Form.Label>Salutation</Form.Label>
                                        <Form.Select
                                            aria-label="Default select example" {...register("address.salutation")}>
                                            <option value="1">Mr.</option>
                                            <option value="2">Mrs.</option>
                                            <option value="3">Non</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="address_firstname">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="First Name"  {...register("address.firstname")}/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a First Name
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="address_lastname">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Last Name"  {...register("address.lastname")}/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a Last Name
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="address_street">
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Street"  {...register("address.street")}/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a Street
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="row">
                                        <div className="col">
                                            <Form.Group className="mb-3" controlId="address_number">
                                                <Form.Label>Street Number</Form.Label>
                                                <Form.Control type="text"
                                                              placeholder="Street"  {...register("address.number")}/>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a Street number
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                        <div className="col">
                                            <Form.Group className="mb-3" controlId="address_postcode">
                                                <Form.Label>ZIP</Form.Label>
                                                <Form.Control type="text"
                                                              placeholder="ZIP"  {...register("address.postcode")}/>
                                                <Form.Control.Feedback type="invalid">
                                                    Please provide a ZIP number
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="address_city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="City"  {...register("address.city")}/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a City
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <Form.Group className="mb-3" controlId="address_country">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select
                                            aria-label="Default select example" {...register("address.country")}>
                                            {Object.keys(CountryEnumType).map((country: string) => (
                                                <option key={country} value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </Form.Select>

                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Form.Group className="mb-3" controlId="address_phoneNumber">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Phone Number"
                                                      isInvalid={!!errors.address?.phoneNumber} {...register("address.phoneNumber")}/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a Phone Number
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>

                            <Form.Group className="mb-3" controlId="address_termsAccepted">
                                <Form.Check type="checkbox">
                                    <Form.Check.Input
                                        type="checkbox"
                                        isInvalid={!!errors.address?.termsAccepted}
                                        {...register("address.termsAccepted", {required: true})}
                                    />
                                    <Form.Check.Label>
                                        I have read and agree to the terms and conditions
                                    </Form.Check.Label>
                                    <Form.Control.Feedback type="invalid">
                                        You must accept the terms and conditions
                                    </Form.Control.Feedback>
                                </Form.Check>
                            </Form.Group>

                            <div className="d-flex flex-column flex-sm-row justify-content-end">
                                <CoreButton type="submit" text="Submit" icon={false} variant={CoreButtontype.Primary} />

                            </div>
                        </Form>
                    </div>
                </div>
            </div>

    )
};
