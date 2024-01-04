import Currency from "@/components/common/currency";
import {getProductPrice} from "@/lib";

export async function PriceInfo({productId, showTax = false}: {
    productId: number,
    showTax?: boolean
}) {
    const price = await getProductPrice({productId});

    return (
        <div>
            {price?.price_gross && (
                <div className="price">
                    <span className="price-head">Price</span>
                    <span className="price-new">
                    <Currency amount={price?.price_gross} currencyCode="EUR"/>
                </span>
                </div>
            )}

            {showTax && price?.tax_amount && (
                <div className="price">
                    <div className="tax">
                        <span> Tax {price.tax_rate}</span>
                        <span> (<Currency amount={price.tax_amount} currencyCode="EUR"/>)</span>
                    </div>
                </div>
            )}
        </div>
    );
};