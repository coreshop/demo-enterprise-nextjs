'use client';

import {OrderFragment, OrderInput} from "@/lib/graphql/types.generated";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import React from "react";
import {checkOutOrder} from "@/components/actions";

export default function CheckoutForm({ cart }: { cart: OrderFragment }) {
    const handleCheckout = async (token: OrderInput) => {
        try {
            if(token) {
                await checkOutOrder(null, token);
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return <CoreButton
        text="Checkout"
        variant={CoreButtontype.Primary}
        icon={false}
        onClick={() => handleCheckout({ token: cart.token } as OrderInput)}
    />
}