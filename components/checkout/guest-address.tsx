import StepComponent from "@/components/checkout/steps";
import {OrderFragment} from "@/lib/graphql/types.generated";
import AddressForm from "@/components/forms/AddressForm";
import {Session} from "next-auth";
import React from "react";

export default async function CheckoutGuestAddress({cart, authSession,}: {cart: OrderFragment; authSession: Session | null; }) {


    return <section>

            <StepComponent currentStep={"address"} />

            { !authSession?.user && <div className="row">
                <div className="col-12 mb-3"><div className="h3 text-center">Invoice Address</div></div>
                <div className="col-12 col-lg-8 offset-lg-2">
                    <AddressForm cart={cart} />
                </div>
            </div>

            }
    </section>
}
