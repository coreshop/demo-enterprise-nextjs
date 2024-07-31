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
import {Row} from "react-bootstrap";

export default async function CartPage() {
    const cartToken = cookies().get('cartToken')?.value;
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

    console.log(cart?.adjustmentItems);

    return <Suspense>
        <StepComponent currentStep={"cart"} />
        <section className="container">
            <Table>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {cart.items?.map((item, index) => (item && (
                    <CartItemPage key={item.id} cartItem={item}/>
                )))}
                {cart.priceRuleItems &&
                    <>
                        <tr className="shopping-cart-item-cart-rule-head">
                            <td colSpan={7}>
                                <h5>Special cart discounts</h5>
                            </td>
                        </tr>
                        <tr className="shopping-cart-item-cart-rule">
                            <td colSpan={7}>
                                <Row>
                                    {cart.priceRuleItems?.map((item, index) => (item && (
                                        <CartPriceRuleItem key={index} priceRule={item}/>
                                    )))}
                                </Row>
                            </td>
                        </tr>
                    </>
                }

                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={6} className="border-0"></td>
                    </tr>

                    <tr>
                        <td colSpan={6} className="border-0"></td>
                    </tr>
                    <tr>
                        <td colSpan={2} valign="top" className="border-0">
                            <VoucherForm cartToken={cartToken}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-0" colSpan={2}></td>
                        <td className="border-0"></td>
                        <td className="text-right border-0">
                            <strong>Subtotal (incl. VAT):</strong>
                        </td>
                        <td colSpan={2} className="text-right cart-sub-total border-0">
                            <Currency amount={cart.subtotalGross ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-0" colSpan={2}></td>
                        <td className="border-0"></td>
                        <td className="text-right border-0">
                            <strong>Subtotal (excl. VAT):</strong>
                        </td>
                        <td colSpan={2} className="text-right cart-discount border-0">
                            <Currency amount={cart.subtotalNet ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                        </td>
                    </tr>
                    {cart.adjustmentItems?.map((item, index) => (item && (
                        <>
                            <tr key={index}>
                                <td className="border-0" colSpan={2}></td>
                                <td className="border-0"></td>
                                <td className="text-right border-0">
                                    <strong>{item.label ? item.label : item.typeIdentifier} (incl. VAT):</strong>
                                </td>
                                <td colSpan={2} className="text-right cart-shipping border-0">
                                    <Currency amount={item.pimcoreAmountGross ?? 0}
                                              currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-0" colSpan={2}></td>
                                <td className="border-0"></td>
                                <td className="text-right border-0">
                                    <strong>{item.label ? item.label : item.typeIdentifier} (excl. VAT):</strong>
                                </td>
                                <td colSpan={2} className="text-right cart-shipping border-0">
                                    <Currency amount={item.pimcoreAmountNet ?? 0}
                                              currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                                </td>
                            </tr>
                        </>
                    )))}

                    {cart.taxes?.map((item, index) => (item && (
                        <tr key={index}>
                            <td className="border-0" colSpan={2}></td>
                            <td className="border-0"></td>
                            <td className="text-right cart-tax-detail border-0">
                                <strong>Tax {item.name}:</strong>
                            </td>
                            <td colSpan={2} className="text-right cart-tax-detail border-0">
                                <Currency amount={item.amount ?? 0} currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                            </td>
                        </tr>
                    )))}

                    <tr>
                        <td className="border-0" colSpan={2}></td>
                        <td className="border-0"></td>
                        <td className="text-right">
                            <strong>Total Tax:</strong>
                        </td>
                        <td colSpan={2} className="text-right cart-tax">
                            <Currency amount={(cart.totalGross ?? 0) - (cart.totalNet ?? 0) ?? 0}
                                      currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-0" colSpan={2}></td>
                        <td className="border-0"></td>
                        <td className="text-right border-0">
                            <strong>Total:</strong>
                        </td>
                        <td colSpan={2} className="text-right cart-tax border-0">
                            <Currency amount={cart.totalGross ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                        </td>
                    </tr>
                </tfoot>
            </Table>

            <div className="d-flex flex-column flex-md-row justify-content-end mt-3 gap-2">
                <CoreButton buttonType="a" text="Continue Shopping" variant={CoreButtontype.Secondary} icon={false} href="/cart" />
                <CoreButton buttonType="a" text="Proceed to Customer Data" variant={CoreButtontype.Primary} icon={false} href="/checkout/customer" />
            </div>
        </section>

    </Suspense>
;
}
