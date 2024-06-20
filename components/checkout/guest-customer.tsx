'use client';

import StepComponent from "@/components/checkout/steps";
import React from "react";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import GuestRegisterForm from "@/components/forms/GuestRegisterForm";
import LoginForm from "@/components/forms/LoginForm";

export default function CheckoutGuestCustomerForm() {

    return <section>
        <StepComponent currentStep={"customer"}/>
        <div className="row">
            <div className="col-12 col-lg-6 mb-3">
                <div className="bg-light p-4">
                    <LoginForm />
                </div>
            </div>
            <div className="col-12 col-lg-6 mb-3">
                <div className="bg-light p-4">
                    <h3>Create new Account</h3>
                    <p className="gray-600">Continue Checkout with new account</p>
                    <div className="d-flex flex-column flex-sm-row justify-content-end">
                        <CoreButton text="Register" icon={true} iconPost={true} iconType="BoxArrowInRight"
                                    variant={CoreButtontype.Primary} href="#"/>
                    </div>
                </div>
            </div>
        </div>
        <h2 className="main-heading text-center mt-4">
            Guest Customer Registration
        </h2>

        <GuestRegisterForm />

    </section>;
}
