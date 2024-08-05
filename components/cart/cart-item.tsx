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
    cartItem: OrderItemFragment,
    summary?: boolean
};

export default function CartItemPage({cartItem, summary=false}: CartItemPageProps) {
    return <div className="shopping-cart-item mb-3">
        <div className="d-md-flex justify-content-md-between gap-md-3 mb-2">
            <div className="shopping-cart-item-info">
                {cartItem.product && (
                    <Link href={`/product/${cartItem.product.id}`} className="text-decoration-none">
                        {cartItem.product?.imagesCartPreview?.[0] && cartItem.product?.imagesCartPreview?.[0]?.fullpath && cartItem.product?.imagesCartPreview?.[0]?.dimensions && (
                            <CoreCard
                                layout="layout4"
                                imageSrc={pimcoreImage(cartItem.product.imagesCartPreview[0].fullpath)}
                                imageSrc2={pimcoreImage(cartItem.product.imagesCartPreview[0].fullpath)}
                                title={cartItem.product?.name ?? undefined}
                                description={cartItem.product?.shortDescription ?? undefined}
                            />
                        )}
                    </Link>
                )}
            </div>
            <div className="d-flex justify-content-between gap-3 gap-md-5 mb-3">
                <div className="text-right cart-item-price">
                    <span className="price-new">
                        <div><small>Each:</small></div>
                        <PriceInfo cartItem={cartItem} mode="single" vat={false}/>
                    </span>
                </div>
                <div className="text-right cart-item-total-price">
                <div><small>Total:</small></div>
                <PriceInfo cartItem={cartItem} mode="total" vat={true}/>
            </div>
            </div>
        </div>
        <div className="d-flex justify-content-end gap-3">
            <div>
                <CartItemUpdate cartItem={cartItem} summary={summary}/>
            </div>
            {!summary &&
            <div className="text-center">
                <CartItemRemove cartItem={cartItem}/>
            </div>}
        </div>
    </div>
        ;
}
