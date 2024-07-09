'use client';

import {addVoucherForm} from "@/components/actions";
import {useRef} from "react";
import {useFormState} from 'react-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";

export default function VoucherForm() {
    const initialState = {
        message: '',
    }
    const [state, formAction] = useFormState(addVoucherForm, initialState);
    const ref = useRef<HTMLFormElement>(null)

    return (
        <form ref={ref} action={async (formData) => {
            formAction(formData)
            ref.current?.reset()
        }}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Voucher Code"
                    aria-label="Voucher Code"
                    aria-describedby="voucher-code"
                    required={true}
                />
                <CoreButton variant={CoreButtontype.Secondary} text="Apply" icon={false} type="submit"/>
            </InputGroup>
            {state?.message && <div className="alert alert-danger">{state.message}</div>}
        </form>
    );
}
