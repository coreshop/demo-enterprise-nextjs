'use client';

import {OrderItemFragment} from "@/lib/graphql/types.generated";
import {updateItemQuantity} from "@/components/actions";
import React, {ChangeEvent, useState} from "react";
import { useFormState} from 'react-dom';
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

type CartItemPageProps = {
    cartItem: OrderItemFragment,
    summary?: boolean
};

export default function CartItemUpdate({cartItem, summary=false}: CartItemPageProps) {
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
        <>
        { !summary ?
            <form action={action}>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="number"
                        name="quantity"
                        onChange={onChangeHandler}
                        defaultValue={cartItem.quantity ?? 1} min={1}
                    />
                    <CoreButton
                        type="submit"
                        text="Update"
                        variant={CoreButtontype.OutlineSecondary}
                        icon={true}
                        iconType="Repeat"
                        iconPost={true}
                    />
                </InputGroup>
            </form>

            : <>{cartItem.quantity ?? 1}</>
        }
        </>
    );
}
