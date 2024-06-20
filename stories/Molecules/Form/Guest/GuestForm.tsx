import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {CoreButton} from '../../../Atoms/Button/CoreButton';
import {CoreButtontype} from '../../../Atoms/Button/types';
import { CoreFormProps} from "../types";

export const GuestForm = ({
                              bg = true
                          }: CoreFormProps) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form className={`${bg && "bg-light p-3"}`} noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Form.Group className="mb-3" controlId="guestSalutation">
                        <Form.Label>Salutation</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Mr.</option>
                            <option value="2">Mrs.</option>
                            <option value="3">Non</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Form.Group className="mb-3" controlId="guestFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a First Name
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="col-12 col-lg-6">
                    <Form.Group className="mb-3" controlId="guestLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a Last Name
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
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
                        <Form.Control type="text" placeholder="Company" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a Company
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                <Form.Group className="mb-3" controlId="guestCompanySalutation">
                    <Form.Label>Salutation</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Mr.</option>
                        <option value="2">Mrs.</option>
                        <option value="3">Non</option>
                    </Form.Select>
                </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Form.Group className="mb-3" controlId="guestCompanyFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a First Name
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="col-12 col-lg-6">
                    <Form.Group className="mb-3" controlId="guestCompanyLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a Last Name
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Form.Group className="mb-3" controlId="guestCompanyStreet">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" placeholder="Street" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a Street
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mb-3" controlId="guestCompanyStreetNumber">
                                <Form.Label>Street Number</Form.Label>
                                <Form.Control type="text" placeholder="Street" required/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a Street number
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mb-3" controlId="guestCompanyZIP">
                                <Form.Label>ZIP</Form.Label>
                                <Form.Control type="text" placeholder="ZIP" required/>
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
                    <Form.Group className="mb-3" controlId="guestCompanyCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a City
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <div className="col-12 col-lg-6">
                    <Form.Group className="mb-3" controlId="guestCompanyCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Austria</option>
                            <option value="2">Italy</option>
                            <option value="3">Germany</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Form.Group className="mb-3" controlId="guestCompanyPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Phone Number" required/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a Phone Number
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox">
                        <Form.Check.Input type="checkbox" required/>
                        <Form.Check.Label>I have read and agree to the terms and conditions</Form.Check.Label>
                        <Form.Control.Feedback type="invalid">
                            Please check it
                        </Form.Control.Feedback>
                    </Form.Check>
                </Form.Group>

            <div className="d-flex flex-column flex-sm-row justify-content-end">
                <CoreButton type="submit" text="Submit" icon={false} variant={CoreButtontype.Primary}/>
            </div>
        </Form>
)
}