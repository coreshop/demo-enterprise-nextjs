import {ProductFragment} from "@/lib/graphql/types.generated";
import Image from "next/image";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import Link from "next/link";
import {PriceInfo} from "@/components/product/Price";

type ProductPreviewProps = {
    product: ProductFragment
}

export default async function ProductPreview({product}: ProductPreviewProps) {
    const firstImage = product.images?.[0];

    return (
        <div className="product-col">
            <div className="image">
                {firstImage && firstImage.dimensions && firstImage.fullpath && (
                    <Link href={`/product/${product.id}`}>
                        <Image
                            src={pimcoreImage(firstImage.fullpath)}
                            alt={product.name ?? ""}
                            className="img-fluid img-thumbnail"
                            width={firstImage.dimensions.width ?? 0}
                            height={firstImage.dimensions.height ?? 0}
                        />
                    </Link>
                )}
            </div>
            <div className="caption">
                <h4>
                    <Link href={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </h4>
                <div className="description">
                    {product.shortDescription}
                </div>

                {/*<ProductPriceWidget product={product} />*/}
                {product?.id && <PriceInfo productId={parseInt(product.id)} />}

                <div className="cart-button">
                    {/*<ProductAddToOrder product={product} />*/}
                </div>
            </div>
        </div>
    );
}
