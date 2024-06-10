'use client';

import {OrderItemFragment} from "@/lib/graphql/types.generated";
import {updateItemQuantity} from "@/components/cart/actions";
import React,{useActionState} from "react";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";

type CartItemPageProps = {
    cartItem: OrderItemFragment
};

export default function CartItemRemove({cartItem}: CartItemPageProps) {
   const [message, formAction] = useActionState(updateItemQuantity, null);
    const action = formAction.bind(null, {
        orderItemId: parseInt(((cartItem.id ?? 0) as string)),
        quantity: 0
    });

    return (
        <form action={action}>
            <CoreButton text="Delete" type="submit" variant={CoreButtontype.Link} icon={true} iconType="Trash" iconPre={true} />
        </form>
    );
}
