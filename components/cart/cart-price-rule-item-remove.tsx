'use client';

import {Fieldcollection_CoreShopProposalCartPriceRuleItem} from "@/lib/graphql/types.generated";
import {removeVoucher} from "@/components/actions";
import {useFormState} from "react-dom";

type CartPriceRuleItemRemoveProps = {
    priceRule: Fieldcollection_CoreShopProposalCartPriceRuleItem
};

export default function CartPriceRuleItemRemove({priceRule}: CartPriceRuleItemRemoveProps) {
    const [message, formAction] = useFormState(removeVoucher, null);
    const action = formAction.bind(null, {
        voucherCode: priceRule.voucherCode ?? '',
    });

    return (
        <form action={action}>
            <button title="Remove" className="btn btn-danger tool-tip">
                <i className="fa fa-times-circle"></i>
            </button>
        </form>
    );
}
