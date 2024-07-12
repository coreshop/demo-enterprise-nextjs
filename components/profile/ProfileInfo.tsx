import React from "react";
import UpdateProfileInfo from "@/components/forms/UpdateProfileInfo";
import {AddressFragment, MeInput} from "@/lib/graphql/types.generated";

interface ProfileInfoProps  {
    user?: MeInput | null;
    addresses?: AddressFragment[] | [] | undefined;
}
export default async function ProfileInfo({user,addresses}:ProfileInfoProps){
    return <>
        <UpdateProfileInfo user={user} addresses={addresses}/>
    </>
}