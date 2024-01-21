'use client';

import StepComponent from "@/components/checkout/steps";
import {useFormState} from "react-dom";
import {checkoutPaymentForm} from "@/components/cart/actions";
import {
    CoreShopPaymentProviderListResult,
    OrderFragment
} from "@/lib/graphql/types.generated";
import Currency from "@/components/common/currency";

export default function CheckoutPayment({cart, paymentProviders}: {cart: OrderFragment, paymentProviders: CoreShopPaymentProviderListResult}) {
    const initialState = {

    }
    const [state, formAction] = useFormState(checkoutPaymentForm, initialState);

    return <div>
        <StepComponent currentStep={"payment"} />
        <form action={formAction}>
            <div className="card">
                <div className="card-header">
                    Payment
                </div>
                <div className="card-body">
                    {paymentProviders.paymentProviders?.map((paymentProvider, index) => (paymentProvider &&
                        <div key={index} className="card mb-3">
                            <div className="card-header">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="form-check">
                                            <input type="radio" id={`payment_provider_${index}`} name="paymentProvider" required={true} className="form-check-input" value={paymentProvider.paymentProvider?.identifier ?? ''} />
                                            <label className="form-check-label required" htmlFor="{`payment_provider_${index}`}"></label>
                                        </div>
                                    </div>
                                    <div className="pull-left">
                                        <span>
                                            {/*// @ts-ignore*/}
                                            {paymentProvider?.paymentProvider?.translations.items[0].title}&nbsp;
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                {/*// @ts-ignore*/}
                                {paymentProvider?.paymentProvider?.translations.items[0].description}&nbsp;
                            </div>
                        </div>
                    ))}

                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="comment">Comment</label>*/}
                    {/*    <textarea id="comment" name="coreshop[comment]" className="form-control"></textarea>*/}
                    {/*</div>*/}

                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <a href="/checkout/shipping" className="btn btn-secondary">
                                Back
                            </a>
                        </div>
                        <div className="col-12 col-sm-6">
                            <button type="submit" className="btn btn-primary pull-right">
                                Proceed
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>;
}
