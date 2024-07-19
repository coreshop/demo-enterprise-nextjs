import {ProductFragment} from "@/lib/graphql/types.generated";
import Image from "next/image";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import {PriceInfo} from "@/components/product/price";
import {AddToCart} from "@/components/product/add-to-cart";
import {CoreLink} from "@/stories/Atoms/Link/CoreLink";
import {StatusDot} from "@/stories/Molecules/StatusDot/StatusDot";
import React from "react";
import {redirect} from "next/navigation";
import {ProductVariant} from "@/components/product/variant";


type ProductDetailProps = {
    product: ProductFragment
}

export default async function ProductDetail({product}: ProductDetailProps) {
    const firstImage = product.imagesProductDetail?.[0];
    console.log(product);

    if(product.attributes === null && product.mainVariant) { //land to mainvariant if attributes exists
        redirect(`/product/${product.mainVariant.id}`);
    }

    return (
        <>
            {/*<CoreBreadcrumb  breadcrumbItems={}/>*/}

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

                <div className="col-12 col-lg-7 mb-3">
                    <CoreLink text="Add to favorites" href="" icon={true} iconType="Heart"
                              iconCss="text-primary"
                              cssClass="d-inline-block text-decoration-none text-body mb-2"/>
                    <h1 className="h2">{product.name}</h1>
                    <div className="d-flex justify-content-between mb-3">
                        <div className="text-14 ">
                            { product.ean && <span><span className="text-600 pe-2">EAN:</span> { product.ean }</span>  }
                        </div>
                        <div className="text-14 ">
                            {product.stockAvailability ?
                                <StatusDot status="available" text="In Stock" />
                                :
                                <StatusDot status="outofstock" text="Out of Stock"/>
                            }
                        </div>
                    </div>
                    {product.shortDescription && (
                        <div className="description mb-3">
                            {product.shortDescription}
                        </div>
                    )}


                    <ProductVariant product={product} />

                    {/*<div className="mb-3">
                        <Table className="layout-2">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Price per Carton: €123.50</td>
                                <td className="text-end">
                                    <CoreBadge description="Including 24pcs."
                                               variant={CoreBadgetype.Secondary}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-0">Price per Carton: €123.50</td>
                                <td className="text-end">
                                    <CoreBadge description="Including 24pcs."
                                               variant={CoreBadgetype.Secondary}/>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="mb-3">
                        <Table className="layout-2">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Quantity</td>
                                <td className="text-end">Unit Price</td>
                            </tr>
                            <tr>
                                <td className="text-primary py-0" colSpan={2}>Piece</td>
                            </tr>
                            <tr>
                                <td><strong>Starting from 20</strong> You Save 20%</td>
                                <td className="text-end">€123.50</td>
                            </tr>
                            <tr>
                                <td><strong>Starting from 20</strong> You Save 20%</td>
                                <td className="text-end">€123.50</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>

                    */}
                    <div className="my-3">
                        {product?.id && <PriceInfo productId={parseInt(product.id)} vat={true}/>}
                    </div>
                    { product.allowedAttributeGroups ? (
                        <>
                            { product.attributes && product.attributes.length > 0 &&
                                <div className="d-flex gap-2 justify-content-end">
                                    <AddToCart product={product}/>
                                </div>
                            }
                        </>
                    ) : (
                        <div className="d-flex gap-2 justify-content-end">
                            <AddToCart product={product}/>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
