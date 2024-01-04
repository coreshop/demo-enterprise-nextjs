import {ProductFragment} from "@/lib/graphql/types.generated";
import Image from "next/image";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import Link from "next/link";
import {PriceInfo} from "@/components/product/price";
import {AddToCart} from "@/components/product/add-to-cart";

type ProductPreviewProps = {
    product: ProductFragment
}

export default async function ProductListEntry({product}: ProductPreviewProps) {
    const firstImage = product.images?.[0];

    return (
        <div className="col-12 mb-4">
            <div className="product-col list clearfix">
                <div className="row">
                    <div className="col-12 col-sm-3">
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
                    </div>
                    <div className="col-12 col-sm-9">
                        <div className="caption">
                            <h4>
                                <Link href={`/product/${product.id}`}>
                                    {product.name}
                                </Link>
                            </h4>
                            <div className="description">
                                {product.shortDescription}
                            </div>

                            {product?.id && <PriceInfo productId={parseInt(product.id)} />}

                            <div className="cart-button">
                                <AddToCart product={product} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
