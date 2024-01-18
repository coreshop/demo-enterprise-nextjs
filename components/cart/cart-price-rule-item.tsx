import Currency from "@/components/common/currency";
import {Fieldcollection_CoreShopProposalCartPriceRuleItem} from "@/lib/graphql/types.generated";
import CartPriceRuleItemRemove from "@/components/cart/cart-price-rule-item-remove";

type CartPriceRuleItemProps = {
    priceRule: Fieldcollection_CoreShopProposalCartPriceRuleItem
};

export default function CartPriceRuleItem({priceRule}: CartPriceRuleItemProps) {
    return <tr className="shopping-cart-item">
        <td colSpan={3} className="text-left">
            {priceRule.cartPriceRule?.name}
        </td>
        <td className="text-right">
            {(priceRule.discountNet ?? 0) != 0 && <Currency amount={priceRule.discountNet ?? 0} currencyCode="EUR"/>}
        </td>
        <td className="text-right">
            {(priceRule.discountGross ?? 0) != 0 && <Currency amount={priceRule.discountGross ?? 0} currencyCode="EUR"/>}
        </td>
        <td className="text-center">
            {priceRule.cartPriceRule?.isVoucherRule && <CartPriceRuleItemRemove priceRule={priceRule}/>}
        </td>
    </tr>
        ;
}
