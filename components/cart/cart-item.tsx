import Currency from "@/components/common/currency";
import Link from "next/link";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import {OrderItemFragment} from "@/lib/graphql/types.generated";
import CartItemUpdate from "@/components/cart/cart-item-update";
import CartItemRemove from "@/components/cart/cart-item-remove";
import {CoreCard} from "@/stories/Molecules/Cards/CoreCard";
import React from "react";
import {PriceInfo} from "@/components/product/price";

type CartItemPageProps = {
    cartItem: OrderItemFragment
};

export default function CartItemPage({cartItem}: CartItemPageProps) {

    return <tr className="shopping-cart-item">
        <td>
            {cartItem.product && (
                <Link href={`/product/${cartItem.product.id}`}>
                    {cartItem.product?.imagesCartPreview?.[0] && cartItem.product?.imagesCartPreview?.[0]?.fullpath && cartItem.product?.imagesCartPreview?.[0]?.dimensions && (
                        <CoreCard
                            layout="layout3"
                            imageSrc={pimcoreImage(cartItem.product.imagesCartPreview[0].fullpath)}
                            imageSrc2={pimcoreImage(cartItem.product.imagesCartPreview[0].fullpath)}
                            title={cartItem.product?.name ?? undefined}
                            description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}
                        />
                    )}
                </Link>
            )}
        </td>

        <td className="text-center">
            <CartItemUpdate cartItem={cartItem}/>
        </td>
        <td className="text-right cart-item-price">
            <span className="price-new">
                 <PriceInfo cartItem={cartItem} mode="single" vat={false} />
            </span>
        </td>
        <td className="text-right cart-item-total-price">

            <PriceInfo cartItem={cartItem} mode="total" vat={true}/>
        </td>
        <td className="text-center">
            <CartItemRemove cartItem={cartItem}/>
        </td>
    </tr>
        ;
}
