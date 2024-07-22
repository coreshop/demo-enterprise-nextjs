import React from "react";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import {getCoreshopMe, getCustomerAddresses} from "@/lib";
import ProfileInfo from "@/components/profile/ProfileInfo";
import {AddressFragment, MeInput} from "@/lib/graphql/types.generated";

interface MeInputExtend extends MeInput {
    defaultAddress: {
        id: string;
    } | null;
}

export default async function PersonalPage() {
    const session = await auth();
    let addresses: AddressFragment[] = [];

    if (!session) {
        return (redirect('/'));
    }

    const coreshopMe = await getCoreshopMe();
    if (session?.accessToken) {
        addresses = await getCustomerAddresses(session?.accessToken);
    }

    // Type cast the result to MeInputExtend
    const user: MeInputExtend = {
        ...coreshopMe,
        defaultAddress: coreshopMe?.defaultAddress ? { id: coreshopMe.defaultAddress.id || '' } : null
    };

    return <>
        <ProfileInfo user={user} addresses={addresses} />
    </>
}
