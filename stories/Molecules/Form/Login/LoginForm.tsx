import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {CoreButton} from '../../../Atoms/Button/CoreButton';
import {CoreButtontype} from '../../../Atoms/Button/types';
import { CoreFormProps } from "../types";

export const LoginForm = ({
    bg = true,
}: CoreFormProps) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    };

    return (
        <Form className={`${bg && "bg-light p-3" }`} noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Control.Feedback type="invalid">
                    Please provide an email
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
                <Form.Control.Feedback type="invalid">
                    Please provide a password
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" >
                    <Form.Check.Input type="checkbox" required />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                    <Form.Control.Feedback type="invalid">
                        Please check it
                    </Form.Control.Feedback>
                </Form.Check>
            </Form.Group>

            <div className="d-flex flex-column flex-sm-row justify-content-end">
                <CoreButton type="submit" text="Login" icon={true} iconPost={true} iconType="BoxArrowInRight" variant={CoreButtontype.Primary} />
            </div>
        </Form>
    )
}