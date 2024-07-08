import {getCustomerAddresses, getOrder, updateCustomerAddress} from "@/lib";
import React, { Suspense } from "react";
import ProfileMenu from "@/components/profile/ProfileMenu";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Loader from "@/components/loader";
import {AddressFragment, AddressInput, CountryEnumType, OrderFragment} from "@/lib/graphql/types.generated";
import AddressesTable from "@/components/profile/AddressesTable";
import {cookies} from "next/headers";

export default async function AddressesPage() {
    const session = await auth();
    const cartToken = cookies().get('cartToken')?.value;
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
        <section className="container">
            <div className="row">
                <Suspense fallback={<Loader />}>
                    <div className="col-12 col-lg-3 mb-3">
                        <ProfileMenu active="addresses" />
                    </div>
                    <div className="col-12 col-lg-9">
                        <AddressesTable addresses={addresses} cart={cart} sessionToken={session?.accessToken}/>
                    </div>
                </Suspense>
            </div>
        </section>
    );
}
