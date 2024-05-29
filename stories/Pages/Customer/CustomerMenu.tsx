import React from "react";
import {CoreLink} from "../../Atoms/Link/CoreLink";

interface CustomerMenuProps  {
    menuitemActive?: string;
}

export const CustomerMenu = ({
    menuitemActive
}:CustomerMenuProps) => {
    return (
        <div className="border border-1">
            <div className="bg-primary text-white py-2 px-3">
                <div>
                    <div className="h5 mb-0">Account John Doe</div>
                    <div>gianniskrikos84@gmail.com</div>
                </div>

            </div>
            <div className="p-3">
                <div className="mb-4"><CoreLink text="Order History" href="/" icon={true}
                                                iconType="ListUl"
                                                cssClass="text-decoration-none text-body"
                                                iconCss="text-primary"/></div>
                <div className="mb-4"><CoreLink text="Addresses" href="/" icon={true}
                                                iconType="PersonWorkspace"
                                                cssClass="text-decoration-none text-body"
                                                iconCss="text-primary"/></div>
                <div className="mb-4"><CoreLink text="Personal Information" href="/" icon={true}
                                                iconType="PersonLinesFill"
                                                cssClass="text-decoration-none text-body"
                                                iconCss="text-primary"/></div>
                <div><CoreLink text="Change password" href="/" icon={true}
                               iconType="LockFill" cssClass="text-decoration-none text-body"
                               iconCss="text-primary"/></div>
                <div className="text-end mt-3">
                    <CoreLink text="Logout" href="/" icon={true} iconType="ArrowBarRight"
                              cssClass="text-decoration-none"/>
                </div>
            </div>
        </div>
    )
}