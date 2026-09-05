import {getCustomerAddresses, getOrder} from "@/lib";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {AddressFragment, OrderFragment} from "@/lib/graphql/types.generated";
import AddressesTable from "@/components/profile/AddressesTable";
import {cookies} from "next/headers";


export default async function AddressesPage() {
    const session = await auth();
    const cartToken = (await cookies()).get('cartToken')?.value;
    let addresses: AddressFragment[] = [];

    if (!session) {
        return redirect('/');
    }

    if (session?.accessToken) {
        addresses = await getCustomerAddresses(session?.accessToken);
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

    return (
            <AddressesTable addresses={addresses} cart={cart} sessionToken={session?.accessToken}/>
    );
}
