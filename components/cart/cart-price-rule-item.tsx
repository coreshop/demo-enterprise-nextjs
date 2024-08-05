import Currency from "@/components/common/currency";
import {Fieldcollection_CoreShopProposalCartPriceRuleItem} from "@/lib/graphql/types.generated";
import CartPriceRuleItemRemove from "@/components/cart/cart-price-rule-item-remove";
import React from "react";
import {Col} from "react-bootstrap";

type CartPriceRuleItemProps = {
    priceRule: Fieldcollection_CoreShopProposalCartPriceRuleItem
};

export default function CartPriceRuleItem({priceRule}: CartPriceRuleItemProps) {

    return <Col xs="12" className="d-flex mb-2">
                <div className="cart-rule d-flex flex-column justify-content-center">
                    <div className="mb-3"><h5>{priceRule.cartPriceRule?.name}</h5> <small>{priceRule.cartPriceRule?.description}</small></div>
                    <div className={`h6 ${priceRule.cartPriceRule?.isVoucherRule ? 'mb-4' : ''}`}>{(priceRule.discountGross ?? 0) != 0 &&
                        <Currency amount={priceRule.discountGross ?? 0} currencyCode="EUR"/>} (incl. VAT)
                    </div>
                    {priceRule.cartPriceRule?.isVoucherRule &&
                        <div><CartPriceRuleItemRemove priceRule={priceRule}/></div>
                    }
                </div>
            </Col>

}
