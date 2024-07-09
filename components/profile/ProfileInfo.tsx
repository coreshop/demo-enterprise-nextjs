import React from "react";
import UpdateAddress from "@/components/forms/UpdateAddress";
import UpdateProfileInfo from "@/components/forms/UpdateProfileInfo";

interface User {
    __typename?: "object_CoreShopCustomer";
    id?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    email?: string | null;
}
interface ProfileInfoProps  {
    user?: User | null;
}
export default async function ProfileInfo({user}:ProfileInfoProps){
    return <>
        <UpdateProfileInfo />
    </>
}