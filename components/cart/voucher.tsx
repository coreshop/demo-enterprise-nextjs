'use client';

import {useFormState} from "react-dom";
import {addVoucherForm} from "@/components/cart/actions";
import {useRef} from "react";

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
            <div className="form-group"><label htmlFor="coreshop_cartRuleCoupon">Voucher Code</label>
                <input type="text" id="voucherCode" name="voucherCode" className="form-control" required={true} />
            </div>
            {state?.message && <div className="alert alert-danger">{state.message}</div>}
            <button type="submit" className="btn btn-secondary btn">Apply</button>
        </form>
    );
}
