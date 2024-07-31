'use client';

import * as z from "zod";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import InputGroup from "react-bootstrap/InputGroup";
import {addVoucherCode} from "@/lib";
import {addVoucherCodeAction} from "@/components/actions";

const VoucherSchema = z.object({
    voucherCode: z.string().min(1),
});

interface VoucherFormData {
    voucherCode: string;
}
export default function VoucherForm({cartToken}: {cartToken:string}) {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting, isValid}
    } = useForm<VoucherFormData>({
        resolver: zodResolver(VoucherSchema),

    });

    const onSubmit = async (data: VoucherFormData) => {
        const result = await addVoucherCodeAction(null, cartToken, data.voucherCode);
        if(!result.token) {
            setErrorMessage(result);
        }
    };

    return <>
        <Form noValidate validated={isValid} onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Voucher Code"
                    aria-label="Voucher Code"
                    aria-describedby="voucher-code"
                    required
                    isInvalid={!!errors.voucherCode}
                    {...register("voucherCode")}
                />

                <CoreButton variant={CoreButtontype.Secondary} text="Apply" icon={false} type="submit"/>
            </InputGroup>
        </Form>
        {errorMessage && (
            <><p className="alert alert-danger">{errorMessage}</p></>
        )}
    </>

}
