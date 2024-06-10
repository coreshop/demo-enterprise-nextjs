import Currency from "@/components/common/currency";
import {getProductPrice} from "@/lib";
import {PriceTag} from "@/stories/Atoms/PriceTag/PriceTag";
import {OrderItemFragment} from "@/lib/graphql/types.generated";

export async function PriceInfo({productId, cartItem, mode = 'single', vat = false }: {
    productId?: number,
    cartItem?: OrderItemFragment,
    mode?: 'single' | 'total',
    vat: boolean
}) {
    let productCartId: number | null = null;
    if (cartItem && cartItem.product && cartItem.product.id) {
        productCartId = parseInt(cartItem.product.id);
    } else {
        productCartId = productId ?? 0;
    }

    let productPrice;
    if (productCartId !== null && productCartId ) {
        productPrice = await getProductPrice({productId: productCartId});
    }

    return (
        <div>
            { cartItem && cartItem.quantity ? (
                <div>
                    { mode == 'single' ? (
                        <PriceTag
                            offerPrice={cartItem.itemRetailPriceGross !== 0 ? (
                                <Currency amount={cartItem.itemRetailPriceGross} currencyCode="EUR"/>
                            ) : null }
                            price={cartItem.itemDiscountPriceGross ? (
                                <Currency
                                    amount={cartItem.itemDiscountPriceGross && cartItem.itemDiscountPriceGross > 0 ? cartItem.itemDiscountPriceGross : cartItem.itemRetailPriceGross}
                                    currencyCode="EUR"
                                />
                            ) :  <Currency
                                amount={cartItem.itemRetailPriceGross }
                                currencyCode="EUR"
                            /> }
                            taxAmount={productPrice ? <Currency amount={productPrice.tax_amount} currencyCode="EUR"/> : null}
                            showDiscount={productPrice && productPrice.discount_price_net != 0 ? true : false }
                            vat={vat}
                        />
                        ) : (
                        <PriceTag
                            offerPrice={cartItem.itemRetailPriceGross !== 0 ? (
                                <Currency amount={cartItem.quantity > 1 ? cartItem && cartItem.itemRetailPriceGross && cartItem.itemRetailPriceGross * cartItem.quantity : cartItem.itemRetailPriceGross} currencyCode="EUR"/>
                            ) : null }
                            price={cartItem.itemDiscountPriceGross ? (
                                <Currency
                                    amount={cartItem && cartItem.quantity && cartItem.quantity > 1 ?
                                        (cartItem.itemDiscountPriceNet && cartItem.itemDiscountPriceNet > 0 ?
                                            cartItem.itemDiscountPriceNet * cartItem.quantity :
                                            cartItem && cartItem.itemRetailPriceNet && cartItem.itemRetailPriceNet * cartItem.quantity) :
                                        (cartItem.itemDiscountPriceNet && cartItem.itemDiscountPriceNet > 0 ?
                                            cartItem.itemDiscountPriceNet :
                                            cartItem.itemRetailPriceNet)}
                                    currencyCode="EUR"
                                />
                            ) :  <Currency
                                amount={cartItem.itemRetailPriceNet }
                                currencyCode="EUR"
                                />
                            }
                            taxAmount={productPrice ? <Currency   amount={
                                cartItem && cartItem.quantity && cartItem.quantity > 1 && productPrice && productPrice.tax_amount != null
                                    ? cartItem.quantity * productPrice.tax_amount
                                    : productPrice && productPrice.tax_amount != null
                                        ? productPrice.tax_amount
                                        : 0
                            } currencyCode="EUR"/> : null}
                            showDiscount={productPrice && productPrice.discount_price_net != 0 ? true : false }
                            vat={vat}
                        />
                    )
                    }
                </div>
            ) : (
                <PriceTag
                    offerPrice={productPrice ? <Currency amount={productPrice.discount_price_net != 0 ? productPrice.price_gross : 0 } currencyCode="EUR"/> : null}
                    price={productPrice ? <Currency amount={productPrice.discount_price_net != 0 ? productPrice.discount_price_net : productPrice.price_net} currencyCode="EUR"/> : null}
                    taxAmount={productPrice ? <Currency amount={productPrice.tax_amount} currencyCode="EUR"/> : null}
                    showDiscount={productPrice && productPrice.discount_price_net != 0 ? true : false }
                    vat={true}
                />

            )}

        </div>
    );
};