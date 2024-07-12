import React from "react";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {getCoreshopMe, getCustomerAddresses} from "@/lib";
import ProfileInfo from "@/components/profile/ProfileInfo";
import {AddressFragment} from "@/lib/graphql/types.generated";

export default async function PersonalPage() {
    const session = await auth();
    let addresses: AddressFragment[] = [];

    if (!session) {
        return (redirect('/'));
    }

    const user = await getCoreshopMe();
    if (session?.accessToken) {
        addresses = await getCustomerAddresses(session?.accessToken);
    }

    return <>
        <ProfileInfo user={user} addresses={addresses} />
    </>
}