'use client';

import StepComponent from "@/components/checkout/steps";
import {useFormState} from "react-dom";
import {checkoutShippingForm} from "@/components/cart/actions";
import {CoreShopCarrierListResult, OrderFragment} from "@/lib/graphql/types.generated";
import Currency from "@/components/common/currency";

export default function CheckoutShipping({cart, carriers}: {cart: OrderFragment, carriers: CoreShopCarrierListResult}) {
    const initialState = {

    }
    const [state, formAction] = useFormState(checkoutShippingForm, initialState);

    return <div>
        <StepComponent currentStep={"shipping"} />
        <form action={formAction}>
            <div className="card">
                <div className="card-header">
                    Shipping
                </div>
                <div className="card-body">
                    {carriers.carriers?.map((carrier, index) => (carrier &&
                        <div key={index} className="card mb-3">
                            <div className="card-header">
                                <div className="clearfix">
                                    <div className="pull-left">
                                        <div className="form-check">
                                            <input type="radio" id="{`carrier_${index}`}" name="carrier" required={true} className="form-check-input" value={carrier.carrier?.identifier ?? ''} />
                                            <label className="form-check-label required" htmlFor="{`carrier_${index}`}"></label>
                                        </div>
                                    </div>
                                    <div className="pull-left">
                                        <span>
                                            {carrier.carrier?.identifier}&nbsp;
                                        </span>
                                        <span>
                                            <Currency amount={carrier.price_gross} currencyCode="EUR" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                {/*// @ts-ignore*/}
                                {(carrier.carrier?.translations?.items?.length ?? 0 > 0) ? carrier.carrier.translations.items[0].description : ''}
                            </div>
                        </div>
                    ))}

                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="comment">Comment</label>*/}
                    {/*    <textarea id="comment" name="coreshop[comment]" className="form-control"></textarea>*/}
                    {/*</div>*/}

                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <a href="/checkout/address" className="btn btn-secondary">
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
