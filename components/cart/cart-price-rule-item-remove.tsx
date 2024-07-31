'use client';

import {Fieldcollection_CoreShopProposalCartPriceRuleItem} from "@/lib/graphql/types.generated";
import {removeVoucher} from "@/components/actions";
import {useFormState} from "react-dom";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";

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
            <div className="d-flex justify-content-end">
                <CoreButton text="Remove" buttonType="button" type="submit" variant={CoreButtontype.OutlineSecondary } icon={true} iconPre={true} iconType="Trash" size="sm" />
            </div>
        </form>
    );
}
