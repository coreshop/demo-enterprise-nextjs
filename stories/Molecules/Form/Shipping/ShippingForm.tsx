import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {CoreButton} from '../../../Atoms/Button/CoreButton';
import {CoreButtontype} from '../../../Atoms/Button/types';
import {CoreFormProps} from "../types";
import Image from 'react-bootstrap/Image';
import { calculateTextareaHeight, useDynamicTextarea } from '../../../Molecules/Form/types';

export const ShippingForm = ({
    bg = true
}: CoreFormProps) => {
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
        <Form className={`${bg && "bg-light p-3"}`} noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="shippingProvider">
                <Form.Check className="card mb-3">
                    <div className="card-header border-bottom-0 d-flex align-items-center gap-2">
                        <Form.Check.Input type="radio" name="group1" className="mt-0" />
                        <Form.Check.Label className="d-flex align-items-center gap-2">
                            <Image src="https://dummyimage.com/120x43/000/fff" rounded />
                            <div>
                                <div>Provider 1 </div>
                                <div className="gray-600">Standard - Free</div>
                            </div>
                        </Form.Check.Label>
                    </div>
                    <div className="card-body">Ut ipsam repudiandae non sed. Laudantium dicta qui minima recusandae velit consequatur. Molestiae est ipsum necessitatibus quisquam officiis eveniet nam. Odio odit sed et corporis illo quas. Error porro qui quam ducimus repellat ipsa nihil voluptatem.</div>
                </Form.Check>
                <Form.Check className="card mb-3">
                    <div className="card-header border-bottom-0 d-flex align-items-center gap-2">
                        <Form.Check.Input type="radio" name="group1" className="mt-0" />
                        <Form.Check.Label className="d-flex align-items-center gap-2">
                            <Image src="https://dummyimage.com/43x43/000/fff" rounded />
                            <div>
                                <div>Provider 2 </div>
                                <div className="gray-600">Standard - €12.50</div>
                            </div>
                        </Form.Check.Label>
                    </div>
                    <div className="card-body">Molestiae est ipsum necessitatibus quisquam officiis eveniet nam. Odio odit sed et corporis illo quas. Error porro qui quam ducimus repellat ipsa nihil voluptatem.</div>
                </Form.Check>
                <Form.Check className="card mb-3">
                    <div className="card-header border-bottom-0 d-flex align-items-center gap-2">
                        <Form.Check.Input type="radio" name="group1" className="mt-0" />
                        <Form.Check.Label className="d-flex align-items-center gap-2">
                            <Image src="https://dummyimage.com/43x43/000/fff" rounded />
                            <div>
                                <div>Provider 3 </div>
                                <div className="gray-600">Standard - €22.50</div>
                            </div>
                        </Form.Check.Label>
                    </div>
                    <div className="card-body">Laudantium dicta qui minima recusandae velit consequaolestiae est ipsum necessitatibus quisquam officiis eveniet nam. Odio odit sed et corporis ro qui quam ducimus repellat ipsa nihil volupta.</div>
                </Form.Check>

            </Form.Group>
            <Form.Group className="pt-3 mb-3" controlId="shippingComments">
                <Form.Label>Comments</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Comments"
                    value={textareaValue}
                    onChange={handleTextareaChange}
                    style={{ minHeight: calculateTextareaHeight(textareaValue) }}
                />
            </Form.Group>
            <div className="d-flex flex-column flex-sm-row justify-content-between pt-3 gap-2">
                <CoreButton type="button" text="Go back" icon={true} iconPre={true} iconType="ChevronLeft"
                            variant={CoreButtontype.Secondary}/>
                <CoreButton type="submit" text="Proceed" icon={true} iconPost={true} iconType="ChevronRight"
                            variant={CoreButtontype.Primary}/>
            </div>
        </Form>
    )
}