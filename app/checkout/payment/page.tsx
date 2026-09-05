import {cookies} from "next/headers";
import {OrderFragment} from "@/lib/graphql/types.generated";
import {getOrder, listCarriers, listPaymentProviders} from "@/lib";
import CheckoutGuestAddress from "@/components/checkout/guest-address";
import CheckoutShipping from "@/components/checkout/shipping";
import CheckoutPayment from "@/components/checkout/payment";

export default async function CheckoutPaymentPage() {
    const cartToken = (await cookies()).get('cartToken')?.value;
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

    const paymentProviderList = await listPaymentProviders({
        token: cart.token as string
    });

    if (paymentProviderList === null) {
        return <div>No Cart</div>;
    }

    return <div>
        <CheckoutPayment cart={cart} paymentProviders={paymentProviderList} />
    </div>
        ;
}
