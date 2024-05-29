import Currency from "@/components/common/currency";
import {getProductPrice} from "@/lib";
import {PriceTag} from "@/stories/Atoms/PriceTag/PriceTag";

export async function PriceInfo({productId, showTax = false}: {
    productId: number,
    showTax?: boolean
}) {

    const price = await getProductPrice({productId});

    return (
        <div>
            { showTax && price?.tax_amount ? (
            <PriceTag
                offerPrice={price ? <Currency amount={price.price_gross} currencyCode="EUR"/> : null}
                price={price ? <Currency amount={price.price_gross} currencyCode="EUR"/> : null}
                taxAmount={price ? <Currency amount={price.tax_amount} currencyCode="EUR"/> : null}
                vat={true}
            />
            ) : (
                <PriceTag
                offerPrice={price ? <Currency amount={price.price_gross} currencyCode="EUR"/> : null}
                price={price ? <Currency amount={price?.price_gross} currencyCode="EUR"/> : null}
                vat={false}
                />
            )
            }
        </div>
    );
};