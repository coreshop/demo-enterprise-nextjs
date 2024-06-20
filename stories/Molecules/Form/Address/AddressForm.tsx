import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {CoreButton} from '../../../Atoms/Button/CoreButton';
import {CoreButtontype} from '../../../Atoms/Button/types';
import { CoreFormProps} from "../types";

export const AddressForm = ({
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
                <div className="col-12 col-lg-6 mb-3">
                    <Form.Group className="mb-3" controlId="guestCompanyCountry">
                        <Form.Label>Invoice Address</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Address 1</option>
                            <option value="2">Address 2</option>
                            <option value="3">Address 3</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" required/>
                            <Form.Check.Label>Invoice Address is Shipping Address</Form.Check.Label>
                            <Form.Control.Feedback type="invalid">
                                Please check it
                            </Form.Control.Feedback>
                        </Form.Check>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 mb-3">
                    <div className="bg-light p-4 h-100">
                        <div>
                            <h3>Invoice Address</h3>
                            <div className="py-3">
                                <div>Mr. John Doe</div>
                                <div>Sesame Street 23/2</div>
                                <div>12345 Hogwarts</div>
                                <div>Great Britain</div>
                            </div>
                            <CoreButton type="button" text="Add new Billing Address" icon={true} iconPost={true} iconType="PlusCircle"
                                        variant={CoreButtontype.Secondary}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 mb-3">
                    <div className="bg-light p-4 h-100">
                        <div className="pb-3">
                            <h3>Shipping Address</h3>
                            <div className="py-3">
                                <div>Mr. Mark Doe</div>
                                <div>Company Street 23/2</div>
                                <div>12345 Hogwarts</div>
                                <div>Great Britain</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between mt-3 gap-2">
                <CoreButton type="button" text="Go back" icon={true} iconPre={true} iconType="ChevronLeft"
                            variant={CoreButtontype.Secondary}/>
                <CoreButton type="submit" text="Proceed" icon={true} iconPost={true} iconType="ChevronRight"
                            variant={CoreButtontype.Primary}/>
            </div>
        </Form>
)
}