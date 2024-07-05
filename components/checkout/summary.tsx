import StepComponent from "@/components/checkout/steps";
import {
    OrderFragment
} from "@/lib/graphql/types.generated";

import React from "react";
import Table from "react-bootstrap/Table";
import CartItemPage from "@/components/cart/cart-item";
import Currency from "@/components/common/currency";
import VoucherForm from "@/components/cart/voucher";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import { Form } from "react-bootstrap";

export default function CheckoutSummary({cart}: {cart: OrderFragment}) {
    console.log(cart);
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
                <CartItemPage key={item.id} cartItem={item} summary={true}/>
            )))}

            </tbody>

            <tfoot>
            <tr>
                <td colSpan={6} className="border-0"></td>
            </tr>

            <tr>
                <td colSpan={6} className="border-0"></td>
            </tr>
            <tr>
                <td colSpan={2} rowSpan={10} valign="top" className="border-0">

                </td>
                <td className="border-0"></td>
                <td className="text-right border-0">
                    <strong>Subtotal (incl. VAT):</strong>
                </td>
                <td colSpan={2} className="text-right cart-sub-total border-0">
                    <Currency amount={cart.subtotalGross ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                </td>
            </tr>
            <tr>
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
                    <tr>
                        <td className="border-0"></td>
                        <td className="text-right border-0">
                            <strong>{item.typeIdentifier} (incl. VAT):</strong>
                        </td>
                        <td colSpan={2} className="text-right cart-shipping border-0">
                            <Currency amount={item.pimcoreAmountGross ?? 0}
                                      currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-0"></td>
                        <td className="text-right border-0">
                            <strong>{item.typeIdentifier} (excl. VAT):</strong>
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
                <td className="border-0"></td>
                <td className="text-right border-0">
                    <strong>Total:</strong>
                </td>
                <td colSpan={2} className="text-right cart-total-price border-0">
                    <Currency amount={cart.totalGross ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                </td>
            </tr>
            </tfoot>

        </Table>
        <Form>
            <div className="d-flex flex-column flex-md-row justify-content-end mt-3 gap-2">
                <CoreButton buttonType="a" text="Continue Shopping" variant={CoreButtontype.Secondary} icon={false}
                            href="/cart"/>
                <CoreButton type="submit" text="Checkout" variant={CoreButtontype.Primary} icon={false} />
            </div>
        </Form>
    </section>;
}
