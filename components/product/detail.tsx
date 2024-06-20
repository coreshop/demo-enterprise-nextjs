import {ProductFragment} from "@/lib/graphql/types.generated";
import Image from "next/image";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import {PriceInfo} from "@/components/product/price";
import {AddToCart} from "@/components/product/add-to-cart";

type ProductDetailProps = {
    product: ProductFragment
}

export default async function ProductDetail({product}: ProductDetailProps) {
    const firstImage = product.imagesProductDetail?.[0];

    return (
        <div>
            {/*<Breadcrumb name={product.name} />*/}

            <div className="row product-info">
                <div className="col-sm-5 images-block">
                    {firstImage && firstImage.dimensions && firstImage.fullpath && (
                        <Image
                            src={pimcoreImage(firstImage.fullpath)}
                            alt={product.name ?? ""}
                            className="img-fluid img-thumbnail"
                            width={firstImage.dimensions.width ?? 0}
                            height={firstImage.dimensions.height ?? 0}
                        />
                    )}

                    {product.imagesProductDetailPreview && product.imagesProductDetailPreview?.length > 0 && (
                        <div className="row">
                            {product.imagesProductDetailPreview.map((image, index) => (
                                image && image.dimensions && image.fullpath && (
                                    <div key={index} className="col-12 col-sm-6">
                                        <Image
                                        src={pimcoreImage(image.fullpath)}
                                        alt={product.name ?? ""}
                                        className="img-fluid img-thumbnail"
                                        width={image.dimensions.width ?? 0}
                                        height={image.dimensions.height ?? 0}
                                        />
                                    </div>
                            )))}
                        </div>
                    )}
                </div>

                <div className="col-sm-7 product-details">
                    <h2>{product.name}</h2>
                    <hr/>

                    {product.shortDescription && (
                        <div className="description">
                            {product.shortDescription}
                        </div>
                    )}
                    <hr/>

                    <ul className="list-unstyled manufacturer">
                        {product.ean && <li><span>EAN:</span>{product.ean}</li>}
                        <li>
                            <span>Availability:</span>
                            {product.stockAvailability ?
                                <strong className="label label-success">In Stock</strong> :
                                <span>Out of Stock</span>
                            }
                        </li>
                    </ul>
                    <hr/>

                    {product?.id && <PriceInfo productId={parseInt(product.id)} vat={true} />}
                    <hr/>

                    <div className="options">
                        <div className="cart-button btn-group">
                            <AddToCart product={product} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
