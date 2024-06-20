import {CoreShopCarrierListResult, OrderFragment} from "@/lib/graphql/types.generated";
import {useFormState, useFormStatus} from "react-dom";
import {checkoutShippingForm} from "@/components/cart/actions";
import Loading from "@/app/loading";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Currency from "@/components/common/currency";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import React from "react";

export default function ShippingForm({cart, carriers}: {cart: OrderFragment, carriers: CoreShopCarrierListResult}) {
    const initialState = {};
    const [state, formAction] = useFormState(checkoutShippingForm, initialState);
    const { pending } = useFormStatus()

    return <div>
        {pending && <Loading/>}
        {!pending &&
            <Form action={formAction}>
                <Form.Group className="mb-3" controlId="shippingProvider">
                    {carriers.carriers?.map((carrier, index) => (carrier &&
                        <Form.Check key={index} className="card mb-3">
                            <div className="card-header border-bottom-0 d-flex align-items-center gap-2">
                                <Form.Check.Input type="radio" id="{`carrier_${index}`}" name="carrier" className="mt-0"
                                                  value={carrier.carrier?.identifier ?? ''} required />
                                <Form.Check.Label className="d-flex align-items-center gap-2">
                                    <Image src="https://dummyimage.com/120x43/000/fff" rounded/>
                                    <div>
                                        <div>{carrier.carrier?.identifier}</div>
                                        <div className="gray-600"><Currency amount={carrier.price_gross}
                                                                            currencyCode="EUR"/></div>
                                    </div>
                                </Form.Check.Label>
                            </div>
                            <div className="card-body">
                                {/*// @ts-ignore*/}
                                {(carrier.carrier?.translations?.items?.length ?? 0 > 0) ? carrier.carrier.translations.items[0].description : ''}
                            </div>
                        </Form.Check>
                    ))}
                </Form.Group>
                <div className="d-flex flex-column flex-sm-row justify-content-between pt-3 gap-2">
                    <CoreButton buttonType="a" href="/checkout/address" text="Go back" icon={true} iconPre={true} iconType="ChevronLeft"
                                variant={CoreButtontype.Secondary}/>
                    <CoreButton type="submit" text="Proceed" icon={true} iconPost={true} iconType="ChevronRight"
                                variant={CoreButtontype.Primary}/>
                </div>
            </Form>
        }
        </div>
}