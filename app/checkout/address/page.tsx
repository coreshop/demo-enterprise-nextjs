import {cookies} from "next/headers";
import {OrderFragment} from "@/lib/graphql/types.generated";
import {getOrder} from "@/lib";
import CheckoutGuestAddress from "@/components/checkout/guest-address";

export default async function CheckoutAddressPage() {
    const cartToken = cookies().get('cartToken')?.value;
    let cart: OrderFragment | undefined;

    if (!cartToken) {
        return <div>No Cart</div>;
    }

    if (cartToken) {
        cart = await getOrder({cartToken: cartToken});
    }

    if (cart === undefined) {
        return <div>No Cart</div>;
    }

    return <div>
        <CheckoutGuestAddress cart={cart} />
    </div>
        ;
}
