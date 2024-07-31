import Currency from "@/components/common/currency";
import {Fieldcollection_CoreShopProposalCartPriceRuleItem} from "@/lib/graphql/types.generated";
import CartPriceRuleItemRemove from "@/components/cart/cart-price-rule-item-remove";
import Table from "react-bootstrap/Table";
import {PriceInfo} from "@/components/product/price";
import React from "react";

type CartPriceRuleItemProps = {
    priceRule: Fieldcollection_CoreShopProposalCartPriceRuleItem
};

export default function CartPriceRuleItem({priceRule}: CartPriceRuleItemProps) {

    return <tr className="shopping-cart-item-cart-rule ">
        <td colSpan={7}>
            <h5>Special cart discounts</h5>
            <Table>

                <tbody>
                    <tr>
                        <td className="text-start">
                            {priceRule.cartPriceRule?.name} (<small>{priceRule.cartPriceRule?.description}</small>)
                        </td>
                        <td className="text-end">
                            {(priceRule.discountNet ?? 0) != 0 && <Currency amount={priceRule.discountNet ?? 0} currencyCode="EUR"/>} (excl. VAT)
                        </td>
                        <td className="text-end">
                            {(priceRule.discountGross ?? 0) != 0 && <Currency amount={priceRule.discountGross ?? 0} currencyCode="EUR"/>} (incl. VAT)
                        </td>
                        <td className="text-center">
                            {priceRule.cartPriceRule?.isVoucherRule && <CartPriceRuleItemRemove priceRule={priceRule}/>}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </td>
    </tr>
        ;
}
