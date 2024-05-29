import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import { CoreButton } from '../../Atoms/Button/CoreButton';
import { CoreButtontype } from '../../Atoms/Button/types';
import {calculateTextareaHeight, useDynamicTextarea} from "./types";

export const CoreForm = () => {
    const [validated, setValidated] = useState(false);
    const { textareaValue, handleTextareaChange } = useDynamicTextarea();

    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

            <Form.Group className="mb-3" controlId="formBasicSelect">
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="coreComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Comments"
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    style={{ minHeight: calculateTextareaHeight(textareaValue) }}
                />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" >
                    <Form.Check.Input type="checkbox" required />
                    <Form.Check.Label>Checkbox</Form.Check.Label>
                    <Form.Control.Feedback type="invalid">
                        Please check it
                    </Form.Control.Feedback>
                </Form.Check>
            </Form.Group>
            <CoreButton type="submit" text="Submit" variant={CoreButtontype.Primary} icon={false} />
        </Form>
    )
}