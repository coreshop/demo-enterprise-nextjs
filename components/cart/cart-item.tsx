import Currency from "@/components/common/currency";
import Link from "next/link";
import Image from "next/image";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import {OrderItemFragment} from "@/lib/graphql/types.generated";
import CartItemUpdate from "@/components/cart/cart-item-update";
import CartItemRemove from "@/components/cart/cart-item-remove";

type CartItemPageProps = {
    cartItem: OrderItemFragment
};

export default function CartItemPage({cartItem}: CartItemPageProps) {
    return <tr className="shopping-cart-item">
        <td className="text-center">
            {cartItem.product && (
                <Link href={`/product/${cartItem.product.id}`}>
                    {cartItem.product?.imagesCartPreview?.[0] && cartItem.product?.imagesCartPreview?.[0]?.fullpath && cartItem.product?.imagesCartPreview?.[0]?.dimensions && (
                        <Image
                            src={pimcoreImage(cartItem.product.imagesCartPreview[0].fullpath)}
                            alt={cartItem.product.name ?? ""}
                            className="img-fluid img-thumbnail"
                            width={cartItem.product.imagesCartPreview[0].dimensions.width ?? 0}
                            height={cartItem.product.imagesCartPreview[0].dimensions.height ?? 0}
                        />
                    )}
                </Link>
            )}
        </td>
        <td className="text-center">
            {cartItem.product && (
                <Link href={`/product/${cartItem.product.id}`}>
                    {cartItem.product?.name}
                </Link>
            )}
        </td>
        <td className="text-center">
            <CartItemUpdate cartItem={cartItem}/>
        </td>
        <td className="text-right cart-item-price">
            <span className="price-new">
                 <Currency amount={cartItem.itemRetailPriceGross ?? 0} currencyCode="EUR"/>
            </span>
        </td>
        <td className="text-right cart-item-total-price">
            <Currency amount={cartItem.totalGross ?? 0} currencyCode="EUR"/>
        </td>
        <td className="text-center">
            <CartItemRemove cartItem={cartItem}/>
        </td>
    </tr>
        ;
}
