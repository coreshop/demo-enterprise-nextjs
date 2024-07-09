import {CoreShopPaymentProviderListResult, OrderFragment} from "@/lib/graphql/types.generated";
import {useFormState, useFormStatus} from "react-dom";
import {checkoutPaymentForm} from "@/components/actions";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import React from "react";
import Loading from "@/app/loading";
import Currency from "@/components/common/currency";

export default function PaymentForm({cart, paymentProviders}: {cart: OrderFragment, paymentProviders: CoreShopPaymentProviderListResult}) {
    const initialState = {};
    const [state, formAction] = useFormState(checkoutPaymentForm, initialState);
    const { pending } = useFormStatus();

    return <div>
        {pending && <Loading/>}
        {!pending &&
        <Form action={formAction}>
            <Form.Group className="mb-3" controlId="paymentProvider">
                {paymentProviders.paymentProviders?.map((paymentProvider, index) => (paymentProvider &&
                    <Form.Check key={index} className="card mb-3">
                        <div className="card-header border-bottom-0 d-flex align-items-center gap-2">
                            <Form.Check.Input id={`payment_provider_${index}`} name="paymentProvider" type="radio"
                                              className="mt-0"
                                              value={paymentProvider.paymentProvider?.identifier ?? ''} required/>
                            <Form.Check.Label className="d-flex align-items-center gap-2">
                                <Image src="https://dummyimage.com/43x43/000/fff" rounded/>
                                <div>
                                    <div>
                                        {/*// @ts-ignore*/}
                                        {paymentProvider?.paymentProvider?.translations.items[0].title}
                                    </div>
                                    <div className="gray-600"><Currency amount={paymentProvider.price}
                                                                        currencyCode="EUR"/></div>
                                </div>
                            </Form.Check.Label>
                        </div>
                        <div className="card-body">
                            {/*// @ts-ignore*/}
                            {paymentProvider?.paymentProvider?.translations.items[0].description}
                        </div>
                    </Form.Check>
                ))}
            </Form.Group>

            <div className="d-flex flex-column flex-sm-row justify-content-between pt-3 gap-2">
                <CoreButton buttonType="a" href="/checkout/shipping" text="Go back" icon={true} iconPre={true}
                            iconType="ChevronLeft"
                            variant={CoreButtontype.Secondary}/>
                <CoreButton type="submit" text="Proceed" icon={true} iconPost={true} iconType="ChevronRight"
                            variant={CoreButtontype.Primary}/>
            </div>

        </Form>
        }
    </div>

}