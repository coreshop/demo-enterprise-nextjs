import React from 'react';
import * as Icons from "react-bootstrap-icons";
import Link from "next/link";
import Currency from "@/components/common/currency";
import {OrderFragment} from "@/lib/graphql/types.generated";
import './cartwidget.scss';
import {ListGroup} from "react-bootstrap";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import CartItemRemove from "@/components/cart/cart-item-remove";

type CartWidgetProps = {
    cart: OrderFragment | null
}

export const CoreCartWidget = ({cart}:CartWidgetProps) => {
    return (
        <div id="cart" className="cart-widget btn-group btn-block">
            <button
                type="button"
                className={`btn btn-link ${cart && cart.items && cart.items.length > 0 && "dropdown-toggle"}`}
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <span className="cart-number">{cart && cart.items ? cart.items.length : 0}</span>
                <Icons.Cart className="me-2" size={18}/>
                {/*  <span id="cart-overview-total">
                    <span className="cart-total">
                        <Currency amount={cart && cart.totalGross ? cart.totalGross : 0} currencyCode="EUR"/>
                    </span>
                </span>
                */}
            </button>
            {cart && cart.items && cart.items.length > 0 && (
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    <div className="pt-1 px-3">
                        <div className='mb-2'>
                            <ListGroup as="ul">
                                {cart.items.map((item, index) => (item && (
                                    <ListGroup.Item as="li" className="cart-widget-item" key={item?.product?.id}>
                                        <div>
                                            {item.product && (
                                                <Link href={`/product/${item.product.id}`} target="_blank">
                                                    {item.product.name}
                                                </Link>
                                            )}
                                        </div>
                                        <div>x{item.quantity} - <Currency amount={item.totalGross ? item.totalGross : 0}
                                                                          currencyCode="EUR"/></div>
                                        <div className="cart-close-item">
                                            <CartItemRemove cartItem={item}/>
                                        </div>

                                    </ListGroup.Item>
                                )))}
                            </ListGroup>

                        </div>
                        <div className="my-1">
                            Subtotal: <Currency amount={cart?.subtotalGross ?? 0} currencyCode="EUR"/>
                        </div>
                        <div className="mb-3">
                            Total: <Currency amount={cart?.totalGross ?? 0} currencyCode="EUR"/>
                        </div>
                        <div className="d-flex gap-2">
                            <CoreButton variant={CoreButtontype.Secondary} buttonType="a" text="Cart" href="/cart"
                                        icon={false}/>
                            <CoreButton variant={CoreButtontype.Primary} buttonType="a" text="Checkout" href="/checkout/customer"
                                        icon={false}/>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}