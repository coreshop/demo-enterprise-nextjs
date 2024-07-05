'use client';

import {OrderItemFragment} from "@/lib/graphql/types.generated";
import {updateItemQuantity} from "@/components/cart/actions";
import React from "react";
import { useFormState } from 'react-dom';
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";

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
            <CoreButton text="Remove" type="submit" variant={CoreButtontype.Link} icon={true} iconType="Trash" iconPre={true} />
        </form>
    );
}
