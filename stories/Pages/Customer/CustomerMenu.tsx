import React from "react";
import {CoreLink} from "../../Atoms/Link/CoreLink";
import {MeInput} from "@/lib/graphql/types.generated";

interface CustomerMenuProps  {
    menuitemActive?: string;
    user?: MeInput;
    active?: string
}

export const CustomerMenu = ({
    menuitemActive,
    user,
    active
}:CustomerMenuProps) => {
    return (
        <div className="border border-1">
            <div className="bg-primary text-white py-2 px-3">
                <div>
                    <div className="h5 mb-0">{ user && user.firstname } { user && user.lastname }</div>
                </div>

            </div>
            <div className="p-3">
                {/* todo set active */}
                <div className="mb-4"><CoreLink text="Order History" href="/profile/orders" icon={true}
                                                iconType="ListUl"
                                                cssClass="text-decoration-none text-body"
                                                iconCss="text-primary"/></div>
                <div className="mb-4"><CoreLink text="Addresses" href="/profile/addresses" icon={true}
                                                iconType="PersonWorkspace"
                                                cssClass="text-decoration-none text-body"
                                                iconCss="text-primary"/></div>
                <div className="mb-4"><CoreLink text="Personal Information" href="/profile/personal" icon={true}
                                                iconType="PersonLinesFill"
                                                cssClass="text-decoration-none text-body"
                                                iconCss="text-primary"/></div>
                <div><CoreLink text="Change password" href="/profile/password" icon={true}
                               iconType="LockFill" cssClass="text-decoration-none text-body"
                               iconCss="text-primary"/></div>
            </div>
        </div>
    )
}