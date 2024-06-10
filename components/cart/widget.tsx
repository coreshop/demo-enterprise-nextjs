'use client';

import { OrderFragment } from "@/lib/graphql/types.generated";
import { CoreCartWidget } from "@/stories/Molecules/CartWidget/CartWidget";

type CartWidgetProps = {
    cart: OrderFragment | null
}

export default function CartWidget({ cart }: CartWidgetProps) {
    return (
        <CoreCartWidget cart={cart} />
    );
}
