import React from "react";
import {CustomerMenu} from "@/stories/Pages/Customer/CustomerMenu";
import {getCoreshopMe} from "@/lib";

interface ProfileMenuProps {
    active?: string
}
export default async function ProfileMenu({
    active
}: ProfileMenuProps) {
    const user = await getCoreshopMe();

    if (typeof user !== 'object' || user === null) {
        return <div>Error: Invalid user data</div>;
    }

    return <CustomerMenu user={user} active={active}/>;
}
