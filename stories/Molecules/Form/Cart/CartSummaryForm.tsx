import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {CoreButton} from '../../../Atoms/Button/CoreButton';
import {CoreButtontype} from '../../../Atoms/Button/types';
import {CoreFormProps} from "../types";
import Table from "react-bootstrap/Table";

export const CartSummaryForm = ({
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
                    <div className="bg-light p-3">
                        <Form.Label>Voucher Code</Form.Label>
                        <div className="d-sm-flex align-items-start">
                            <Form.Group controlId="formVoucher" className="flex-grow-1 mb-2 mb-sm-0 me-sm-3">
                                <Form.Control type="text" placeholder="Enter voucher" required/>
                                <Form.Control.Feedback type="invalid">
                                    Please provide an valid key
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <Table>
                        <tbody>
                        <tr>
                            <td className="border-0">Shipping (excl. VAT.)</td>
                            <td className="border-0">€123.50</td>
                        </tr>
                        <tr>
                            <td className="border-0">Tax 20AT</td>
                            <td className="border-0">€5.5</td>
                        </tr>
                        <tr>
                            <td>Total Tax</td>
                            <td>€6.5</td>
                        </tr>
                        <tr>
                            <td className="border-0">Total</td>
                            <td className="border-0">€135.50</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-end gap-1">
                <CoreButton text="Continue Shopping" variant={CoreButtontype.Secondary} icon={false}/>
                <CoreButton type="submit" text="Proceed to Customer Data" variant={CoreButtontype.Primary} icon={false}/>
            </div>

        </Form>
    )
}