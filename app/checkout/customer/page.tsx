import CheckoutGuestCustomer from "@/components/checkout/guest-customer";
import {cookies} from "next/headers";
import {OrderFragment} from "@/lib/graphql/types.generated";
import {getOrder} from "@/lib";

export default async function CheckoutCustomerPage() {
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

    return <div><CheckoutGuestCustomer cart={cart} /></div>;
}
