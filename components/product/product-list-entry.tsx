import {ProductFragment} from "@/lib/graphql/types.generated";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import {PriceInfo} from "@/components/product/price";
import {AddToCart} from "@/components/product/add-to-cart";
import {CoreCard} from "@/stories/Molecules/Cards/CoreCard";
import React from "react";

type ProductPreviewProps = {
    product: ProductFragment
}

export default async function ProductListEntry({product}: ProductPreviewProps) {
    const firstImage = product.images?.[0];

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-3">
            <CoreCard
                layout="layout1"
                imageSrc={firstImage && firstImage.fullpath ? pimcoreImage(firstImage.fullpath) : ''}
                imageSrc2={"https://dummyimage.com/576x576/000/fff"}
                title={product.name ? product.name : ''}
                description={product.shortDescription ? product.shortDescription : ''}
                link={product.id ? `/product/${product.id}` : null}
                btnBottom={product.id ? <AddToCart product={product}/> : null}
                priceTag={product.id ? <PriceInfo productId={parseInt(product.id)} vat={true}/> : null}
            />
        </div>
    );
}
