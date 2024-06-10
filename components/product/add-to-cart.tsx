'use client';

import {useState,useActionState} from 'react';
import {useFormStatus} from 'react-dom';
import {ProductFragment} from "@/lib/graphql/types.generated";
import {addItemToCart} from "@/components/cart/actions";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";

function SubmitButton() {
    const {pending} = useFormStatus();
    return <CoreButton
        type="submit"
        text="Add to Cart"
        variant={CoreButtontype.Primary}
        icon={false}
        loader={pending}
    />;
}

export function AddToCart({product}: {
    product: ProductFragment;
}) {
    const [message, formAction] = useActionState(addItemToCart, null);
    const [quantity, setQuantity] = useState<number>(1);
    const action = formAction.bind(null, {productId: parseInt(product.id as string), quantity: quantity});

    return (
        <form action={action}>
            <div className="d-inline-flex gap-2">
                <div>
                    <input type="number" name="quantity" className="form-control cart-item-quantity" min="1"
                       value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
                </div>
                <SubmitButton />
            </div>
        </form>
    );
}
