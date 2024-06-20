'use client';

import StepComponent from "@/components/checkout/steps";
import {
    CoreShopPaymentProviderListResult,
    OrderFragment
} from "@/lib/graphql/types.generated";

import React from "react";
import PaymentForm from "@/components/forms/PaymentForm";

export default function CheckoutPayment({cart, paymentProviders}: {cart: OrderFragment, paymentProviders: CoreShopPaymentProviderListResult}) {
    return <section>
        <StepComponent currentStep={"payment"}/>
        <div className="pb-3">
            <h3>Payment</h3>
            <p className="gray-600">Choose your payment provider</p>
        </div>
        <PaymentForm cart={cart} paymentProviders={paymentProviders} />
    </section>;
}
