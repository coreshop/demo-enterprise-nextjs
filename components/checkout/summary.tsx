import StepComponent from "@/components/checkout/steps";
import {
    OrderFragment, OrderInput
} from "@/lib/graphql/types.generated";

import React from "react";
import Table from "react-bootstrap/Table";
import CartItemPage from "@/components/cart/cart-item";
import Currency from "@/components/common/currency";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import CheckoutForm from "@/components/forms/CheckoutForm";
import VoucherForm from "@/components/forms/VoucherForm";
import {Col, Row} from "react-bootstrap";
import CartPriceRuleItem from "@/components/cart/cart-price-rule-item";

export default function CheckoutSummary({cart}: {cart: OrderFragment}) {
    return <section>
        <StepComponent currentStep={"summary"}/>
        <div className="pb-3">
            <h3>Summary</h3>
        </div>
        <div className="row">
            {cart?.invoiceAddress ?
                <div className="col-12 col-lg-6 mb-3">
                    <div className="bg-light p-4 h-100">
                        <div>
                            <h3>Invoice Address</h3>
                            <div className="py-3">
                                <div>{cart?.invoiceAddress.salutation} {cart?.invoiceAddress.firstname} {cart?.invoiceAddress.lastname}</div>
                                <div>{cart?.invoiceAddress.street} {cart?.invoiceAddress.number}</div>
                                <div>{cart?.invoiceAddress.postcode} {cart?.invoiceAddress.city} {cart?.invoiceAddress?.country?.isoCode}</div>
                            </div>

                        </div>
                    </div>
                </div>
                : <div>No Invoice address</div>
            }
            {cart?.shippingAddress ?
                <div className="col-12 col-lg-6 mb-3">
                    <div className="bg-light p-4 h-100">
                        <div className="pb-3">
                            <h3>Shipping Address</h3>
                            <div className="py-3">
                                <div>{cart?.shippingAddress.salutation} {cart?.shippingAddress.firstname} {cart?.shippingAddress.lastname}</div>
                                <div>{cart?.shippingAddress.street} {cart?.shippingAddress.number}</div>
                                <div>{cart?.shippingAddress.postcode} {cart?.shippingAddress.city} {cart?.shippingAddress.country?.isoCode}</div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div> No Shippping Address</div>
            }
        </div>
        <Row>
            <Col xs={12} xl={8}>
                {cart.items?.map((item, index) => (item && (
                    <CartItemPage key={item.id} cartItem={item}/>
                )))}
            </Col>
            <Col xs={12} xl={4}>
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
                    <Currency amount={(cart.totalGross ?? 0) - (cart.totalNet ?? 0) ?? 0}
                              currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                </div>
                <hr />
                <div className="d-flex justify-content-between gap-2">
                    <strong>Total:</strong>
                    <Currency amount={cart.totalGross ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                </div>
                <div className="d-flex flex-column flex-md-row mt-5 gap-2">
                    <CoreButton buttonType="a" text="Continue Shopping" variant={CoreButtontype.Secondary} icon={false}
                                href="/cart"/>
                    <CheckoutForm cart={cart}/>
                </div>
            </Col>
        </Row>


    </section>;
}
