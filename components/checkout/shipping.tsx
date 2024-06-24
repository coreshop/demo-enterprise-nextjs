'use client';

import StepComponent from "@/components/checkout/steps";
import {CoreShopCarrierListResult, OrderFragment} from "@/lib/graphql/types.generated";
import React from "react";
import ShippingForm from "@/components/forms/ShippingForm";

export default function CheckoutShipping({cart, carriers}: {cart: OrderFragment, carriers: CoreShopCarrierListResult}) {
    console.log(cart);
    return <section>
        <StepComponent currentStep={"shipping"}/>
        <div className="pb-3">
            <h3>Shipping</h3>
            <p className="gray-600">Choose your shipping provider</p>
        </div>
        <ShippingForm cart={cart} carriers={carriers} />
    </section>;
}
