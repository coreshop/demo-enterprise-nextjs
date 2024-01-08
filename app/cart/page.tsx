import {getOrder} from "@/lib";
import {cookies} from "next/headers";
import Currency from "@/components/common/currency";
import {OrderFragment} from "@/lib/graphql/types.generated";
import CartItemPage from "@/components/cart/cart-item";
import {Suspense} from "react";

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

    return <div>
        <table className="table table-bordered">
            <thead>
            <tr>
                <td className="text-center">
                    Image
                </td>
                <td className="text-center">
                    Product Details
                </td>
                <td className="text-center">
                    Quantity
                </td>
                <td className="text-center">
                    Price
                </td>
                <td className="text-center">
                    Total
                </td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {cart.items?.map((item, index) => (item && (
                <CartItemPage key={item.id} cartItem={item}/>
            )))}
            </tbody>
            <tfoot>
            <tr>
                <td colSpan={3} rowSpan={10}>

                </td>
                <td className="text-right">
                    <strong>Subtotal (incl. VAT):</strong>
                </td>
                <td colSpan={2} className="text-right cart-sub-total">
                    <Currency amount={cart.subtotalGross ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                </td>
            </tr>
            <tr>
                <td className="text-right">
                    <strong>Subtotal (excl. VAT):</strong>
                </td>
                <td colSpan={2} className="text-right cart-discount">
                    <Currency amount={cart.subtotalNet ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                </td>
            </tr>
            {cart.adjustmentItems?.map((item, index) => (item && (
                <>
                    <tr>
                        <td className="text-right">
                            <strong>{item.typeIdentifier} (incl. VAT):</strong>
                        </td>
                        <td colSpan={2} className="text-right cart-shipping">
                            <Currency amount={item.pimcoreAmountGross ?? 0}
                                      currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-right">
                            <strong>{item.typeIdentifier} (excl. VAT):</strong>
                        </td>
                        <td colSpan={2} className="text-right cart-shipping">
                            <Currency amount={item.pimcoreAmountNet ?? 0}
                                      currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                        </td>
                    </tr>
                </>
            )))}

            {cart.taxes?.map((item, index) => (item && (
                <tr key={index}>
                    <td className="text-right cart-tax-detail">
                        <strong>Tax {item.name}:</strong>
                    </td>
                    <td colSpan={2} className="text-right cart-tax-detail">
                        <Currency amount={item.amount ?? 0} currencyCode={cart?.currency?.isoCode ?? 'EUR'}/>
                    </td>
                </tr>
            )))}

            <tr>
                <td className="text-right">
                    <strong>Total Tax:</strong>
                </td>
                <td colSpan={2} className="text-right cart-tax">
                    <Currency amount={(cart.totalGross ?? 0) - (cart.totalNet ?? 0) ?? 0}
                              currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                </td>
            </tr>
            <tr>
                <td className="text-right">
                    <strong>Total:</strong>
                </td>
                <td colSpan={2} className="text-right cart-total-price">
                    <Currency amount={cart.totalGross ?? 0} currencyCode={cart.currency?.isoCode ?? 'EUR'}/>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
        ;
}
