import {getOrder} from "@/lib";
import {cookies} from "next/headers";
import Currency from "@/components/common/currency";
import {OrderFragment} from "@/lib/graphql/types.generated";
import CartItemPage from "@/components/cart/cart-item";
import React, {Suspense} from "react";
import VoucherForm from "@/components/forms/VoucherForm";
import Table from "react-bootstrap/Table";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import StepComponent from "@/components/checkout/steps";
import CartPriceRuleItem from "@/components/cart/cart-price-rule-item";
import {Col, Row} from "react-bootstrap";

export default async function CartPage() {
    const cartToken = (await cookies()).get('cartToken')?.value;
    let cart: OrderFragment | undefined;

    if (!cartToken) {
        return <div>No Cart</div>;
    }

    if (cartToken) {
        cart = await getOrder({cartToken: cartToken});
    }

    if (cart === undefined) {
        return <div>No Cart</div>;
    }

    return <Suspense>
        <StepComponent currentStep={"cart"} />
        <section>
            <Row>
                <Col xs={12} xl={8}>
                    {cart.items?.map((item, index) => (item && (
                        <CartItemPage key={item.id} cartItem={item}/>
                    )))}
                </Col>
                <Col xs={12} xl={4}>
                    <div className="mt-5 mb-5 mt-xl-0">
                        <h4>Enter Voucher Code</h4>
                        <VoucherForm cartToken={cartToken}/>
                    </div>
                    {cart.priceRuleItems &&
                        <>
                            <div className="shopping-cart-item-cart-rule-head mt-3">
                                <h5>Promotions</h5>
                            </div>
                            <div className="shopping-cart-item-cart-rule">
                                <Row>
                                    {cart.priceRuleItems?.map((item, index) => (item && (
                                        <CartPriceRuleItem key={index} priceRule={item}/>
                                    )))}
                                </Row>
                            </div>
                        </>
                    }
                    <hr />
                    <div className="d-flex justify-content-between gap-2">
                        <strong>Subtotal (incl. VAT):</strong>
                        <Currency amount={cart.subtotalGross ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                    </div>
                    <div className="d-flex justify-content-between gap-2">
                        <strong>Subtotal (excl. VAT):</strong>
                        <Currency amount={cart.subtotalNet ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                    </div>
                    {cart.adjustmentItems?.map((item, index) => (item && (
                        <div key={index}>
                            <div className="d-flex justify-content-between gap-2">
                                <strong>{item.label ? item.label : item.typeIdentifier} (incl. VAT):</strong>
                                <Currency amount={item.pimcoreAmountGross ?? 0}
                                          currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                            </div>
                            <div className="d-flex justify-content-between gap-2">
                                <strong>{item.label ? item.label : item.typeIdentifier} (excl. VAT):</strong>
                                <Currency amount={item.pimcoreAmountNet ?? 0}
                                          currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                            </div>
                        </div>
                    )))}

                    {cart.taxes?.map((item, index) => (item && (
                        <div key={index} className="d-flex justify-content-between gap-2">
                            <strong>Tax {item.name}:</strong>
                            <Currency amount={item.amount ?? 0} currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                        </div>
                    )))}

                    <div className="d-flex justify-content-between gap-2">
                        <strong>Total Tax:</strong>
                        <Currency amount={(cart.totalGross ?? 0) - (cart.totalNet ?? 0)}
                                  currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between gap-2">
                        <strong>Total:</strong>
                        <Currency amount={cart.totalGross ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                    </div>
                    <div className="d-flex flex-column flex-md-row mt-5 gap-2">
                        <CoreButton buttonType="a" text="Continue Shopping" variant={CoreButtontype.Secondary}
                                    icon={false} href="/cart"/>
                        <CoreButton buttonType="a" text="Proceed to Customer Data" variant={CoreButtontype.Primary}
                                    icon={false} href="/checkout/customer"/>
                    </div>
                </Col>
            </Row>

        </section>

    </Suspense>
        ;
}
