import React from "react";
import UpdateProfileInfo from "@/components/forms/UpdateProfileInfo";
import {MeInput} from "@/lib/graphql/types.generated";

interface ProfileInfoProps  {
    user?: MeInput | null;
}
export default async function ProfileInfo({user}:ProfileInfoProps){
    return <>
        <UpdateProfileInfo user={user}/>
    </>
}