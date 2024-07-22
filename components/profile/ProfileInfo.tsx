import React from "react";
import UpdateProfileInfo from "@/components/forms/UpdateProfileInfo";
import {AddressFragment, MeInput} from "@/lib/graphql/types.generated";

interface MeInputExtend extends MeInput {
    defaultAddress: {
        id: string;
    } | null;
}

interface ProfileInfoProps  {
    user?: MeInputExtend | null;
    addresses?: AddressFragment[] | [];
}

export default async function ProfileInfo({user,addresses}:ProfileInfoProps){
    return <>
        <UpdateProfileInfo user={user} addresses={addresses}/>
    </>
}