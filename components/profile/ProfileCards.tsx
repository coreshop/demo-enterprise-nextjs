import React from "react";
import {CoreIconCard} from "@/stories/Molecules/IconCard/CoreIconCard";
export default async function ProfileCards() {
    return <>
        <div className="col-12 col-lg-6 mb-3">
            <div className="bg-light">
                <CoreIconCard iconType="ListUl" btnText="Check order history" title="Order History" btnHref="/profile/orders"
                              iconSize="36px"
                              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."/>
            </div>
        </div>
        <div className="col-12 col-lg-6 mb-3">
            <div className="bg-light">
                <CoreIconCard iconType="PersonWorkspace" btnText="Check addresses" title="Addresses" btnHref="/profile/addresses"
                              iconSize="36px"
                              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."/>
            </div>
        </div>
        <div className="col-12 col-lg-6 mb-3">
            <div className="bg-light">
                <CoreIconCard iconType="PersonLinesFill" btnText="Check information" btnHref="/profile/personal"
                              title="Personal Information" iconSize="36px"
                              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."/>
            </div>
        </div>
        <div className="col-12 col-lg-6 mb-3">
            <div className="bg-light">
                <CoreIconCard iconType="LockFill" btnText="Change password" title="Change password" btnHref="/profile/password"
                              iconSize="36px"
                              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."/>
            </div>
        </div>
    </>
}