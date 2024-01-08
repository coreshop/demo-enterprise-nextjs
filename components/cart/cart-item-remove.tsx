'use client';

import {OrderItemFragment} from "@/lib/graphql/types.generated";
import {updateItemQuantity} from "@/components/cart/actions";
import {useFormState} from "react-dom";
import {ChangeEvent, ChangeEventHandler, useState} from "react";

type CartItemPageProps = {
    cartItem: OrderItemFragment
};

export default function CartItemRemove({cartItem}: CartItemPageProps) {
   const [message, formAction] = useFormState(updateItemQuantity, null);
    const action = formAction.bind(null, {
        orderItemId: parseInt(((cartItem.id ?? 0) as string)),
        quantity: 0
    });

    return (
        <form action={action}>
            <button title="Remove" className="btn btn-danger tool-tip">
                <i className="fa fa-times-circle"></i>
            </button>
        </form>
    );
}
