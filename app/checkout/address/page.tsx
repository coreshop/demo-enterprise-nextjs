import {cookies} from "next/headers";
import {AddressFragment, OrderFragment} from "@/lib/graphql/types.generated";
import CheckoutGuestAddress from "@/components/checkout/guest-address";
import {auth} from "@/auth";
import {getCustomerAddresses, getOrder} from "@/lib";
import CheckoutCustomerAddress from "@/components/checkout/customer-address";

export default async function CheckoutAddressPage() {
    const session = await auth();
    const cartToken = (await cookies()).get('cartToken')?.value;
    let allAddresses: AddressFragment[] = [];
    if (session && session.accessToken) {
        allAddresses = await getCustomerAddresses(session.accessToken);
    }

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
    const setInvoiceAddressId: string = cart?.invoiceAddress?.id ?? '';
    const setShippingAddressId: string = cart?.shippingAddress?.id ?? '';

    return <div>
        {session?.user ?
            <CheckoutCustomerAddress cart={cart} authSession={session} addresses={allAddresses} selectedInvoiceAddressId={setInvoiceAddressId} selectedShippingAddressId={setShippingAddressId}/>
            :
            <CheckoutGuestAddress cart={cart} authSession={session} />
        }
    </div>
        ;
}


