'use client';

import {OrderItemFragment} from "@/lib/graphql/types.generated";
import {updateItemQuantity} from "@/components/cart/actions";
import {useFormState} from "react-dom";
import {ChangeEvent, ChangeEventHandler, useState} from "react";

type CartItemPageProps = {
    cartItem: OrderItemFragment
};

export default function CartItemUpdate({cartItem}: CartItemPageProps) {
    const [quantity, setQuantity] = useState(cartItem.quantity ?? 1);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseFloat(event.currentTarget.value));
    };

    const [message, formAction] = useFormState(updateItemQuantity, null);
    const action = formAction.bind(null, {
        quantity: quantity,
        orderItemId: parseInt(((cartItem.id ?? 0) as string))
    });

    return (
        <form action={action}>
            <div className="input-group">
                <input type="number" name="quantity" onChange={onChangeHandler} defaultValue={cartItem.quantity ?? 1} min={1}/>
            </div>
        </form>
    );
}
