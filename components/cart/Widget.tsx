import {OrderFragment} from "@/lib/graphql/types.generated";
import Currency from "@/components/common/Currency";
import Link from "next/link";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import Image from "next/image";

type CartWidgetProps = {
    cart: OrderFragment | null
}

export default async function CartWidget({cart}: CartWidgetProps) {
    return (
        <div id="cart" className="btn-group btn-block">
            <button type="button" className="btn btn-block btn-lg dropdown-toggle" data-toggle="dropdown">
                <i className="fa fa-shopping-cart"></i>
                <span id="cart-overview-total">
                    <span className="cart-badge">{cart && cart.items ? cart.items.length : 0}</span> Items -
                    <span className="cart-total"> <Currency amount={cart && cart.totalGross ? cart.totalGross : 0}
                                                            currencyCode="EUR"/></span>
                </span>
            </button>
            {cart && cart.items && cart.items.length > 0 && (
                <ul className="dropdown-menu pull-right" aria-labelledby="dropdownMenuButton">
                    <li>
                        <table className="table hcart cart-items">
                            <tbody>
                            {cart.items.map((item, index) => (item && (
                                <tr key={index}>
                                    <td className="text-center">
                                        {item.product && (
                                            <Link href={`/product/${item.product.id}`}>
                                                {item.product?.imagesCartPreview?.[0] && item.product?.imagesCartPreview?.[0]?.fullpath && item.product?.imagesCartPreview?.[0]?.dimensions && (
                                                    <Image
                                                        src={pimcoreImage(item.product.imagesCartPreview[0].fullpath)}
                                                        alt={item.product.name ?? ""}
                                                        className="img-fluid img-thumbnail"
                                                        width={item.product.imagesCartPreview[0].dimensions.width ?? 0}
                                                        height={item.product.imagesCartPreview[0].dimensions.height ?? 0}
                                                    />
                                                )}
                                            </Link>
                                        )}
                                    </td>
                                    <td className="text-left">
                                        {item.product && (
                                            <Link href={`/product/${item.product.id}`}>
                                                {item.product.name}
                                            </Link>
                                        )}
                                    </td>
                                    <td className="text-right">x {item.quantity}</td>
                                    <td className="text-right">
                                        <Currency amount={item.totalGross ? item.totalGross : 0}
                                                  currencyCode="EUR"/>
                                    </td>
                                    <td className="text-center">
                                        {/* Entfernen-Schaltfläche oder ähnliche Logik hier */}
                                    </td>
                                </tr>)
                            ))}
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <table className="table table-bordered total">
                            <tbody>
                            <tr>
                                <td className="text-right"><strong>Subtotal</strong></td>
                                <td className="text-left cart-subtotal">
                                    <Currency amount={cart?.subtotalGross ?? 0} currencyCode="EUR"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-right"><strong>Total</strong></td>
                                <td className="text-left cart-total">
                                    <Currency amount={cart?.totalGross ?? 0} currencyCode="EUR"/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <p className="text-right btn-block1">
                            <Link href="`/cart`">
                                Cart
                            </Link>
                        </p>
                    </li>
                </ul>
            )}
        </div>
    );
}
