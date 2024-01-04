'use client';

import {useFormState, useFormStatus} from 'react-dom';
import {ProductFragment} from "@/lib/graphql/types.generated";
import {addItemToCart} from "@/components/cart/actions";

function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <button
            onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                if (pending) e.preventDefault();
            }}
            aria-label="Add to cart"
            aria-disabled={pending}
            className="btn btn-cart mt-0"
        >
            {/*<div className="absolute left-0 ml-4">*/}
            {/*    {pending ? <p>Loading</p> : <p />}*/}
            {/*</div>*/}
            Add To Cart
        </button>
    );
}

export function AddToCart({product}: {
    product: ProductFragment;
}) {
    const [message, formAction] = useFormState(addItemToCart, null);
    const action = formAction.bind(null, {productId: parseInt(product.id as string), quantity: 1});

    return (
        <form action={action}>
            <div className="input-group">
                <div>
                    <input type="number" name="quantity" className="form-control cart-item-quantity" defaultValue="1" min="1" />
                </div>
                <div className="input-group-append ml-2">
                    <SubmitButton />
                </div>
                <p aria-live="polite" className="sr-only" role="status">
                    {message ?? ''}
                </p>
            </div>
        </form>
    );
}
