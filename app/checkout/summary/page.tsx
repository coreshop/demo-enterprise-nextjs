import {cookies} from "next/headers";
import {OrderFragment} from "@/lib/graphql/types.generated";
import {getOrder} from "@/lib";
import CheckoutSummary from "@/components/checkout/summary";
import {auth} from "@/auth";

export default async function CheckoutSummaryPage() {
    const session = await auth();
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
        <CheckoutSummary cart={cart} />
    </div>
        ;
}
