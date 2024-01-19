import {cookies} from "next/headers";
import {OrderFragment} from "@/lib/graphql/types.generated";
import {getOrder, listCarriers} from "@/lib";
import CheckoutGuestAddress from "@/components/checkout/guest-address";
import CheckoutShipping from "@/components/checkout/shipping";

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

    const carrierList = await listCarriers({
        token: cart.token as string
    });

    if (carrierList === null) {
        return <div>No Cart</div>;
    }

    return <div>
        <CheckoutShipping cart={cart} carriers={carrierList} />
    </div>
        ;
}
