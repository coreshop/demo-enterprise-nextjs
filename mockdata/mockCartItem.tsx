import {OrderFragment} from "@/lib/graphql/types.generated";

export const mockCart: OrderFragment = {
    "__typename": "object_CoreShopOrder",
    "id": "173",
    "token": "bQac39j2kTPIe6oLLxxX",
    "totalGross": 840,
    "totalNet": 700,
    "subtotalGross": 240,
    "subtotalNet": 200,
    "carrier": {
        "__typename": "CoreshopCarrier",
        "identifier": "Standard"
    },
    "currency": {
        "__typename": "CoreshopCurrency",
        "isoCode": "EUR"
    },
    "paymentProvider": null,
    "items": [
        {
            "id": "175",
            "quantity": 1,
            "totalGross": 240,
            "totalNet": 200,
            "subtotalGross": 240,
            "subtotalNet": 200,
            "itemRetailPriceGross": 240,
            "itemRetailPriceNet": 200,
            "itemDiscountNet": 0,
            "itemDiscountGross": 0,
            "itemDiscountPriceGross": 0,
            "itemDiscountPriceNet": 0,
            "product": {
                "__typename": "object_CoreShopProduct",
                "id": "31",
                "name": "Durable Aluminum Chair",
                "ean": "2437285029187",
                "images": [
                    {
                        "fullpath": "/demo/products/Computer/image_664e018f406f93.44055687.jpg",
                        "dimensions": {
                            "width": 1000,
                            "height": 1000
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/image_664e018f462bd4.00195991.jpg",
                        "dimensions": {
                            "width": 1000,
                            "height": 1000
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/image_664e018f4a1cb5.40510853.jpg",
                        "dimensions": {
                            "width": 1000,
                            "height": 1000
                        }
                    }
                ],
                "imagesCartPreview": [
                    {
                        "fullpath": "/demo/products/Computer/5/image-thumb__5__coreshop_productCartPreview/image_664e018f406f93.44055687.03091f0f.jpg",
                        "dimensions": {
                            "width": 100,
                            "height": 100
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/6/image-thumb__6__coreshop_productCartPreview/image_664e018f462bd4.00195991.03091f0f.jpg",
                        "dimensions": {
                            "width": 100,
                            "height": 100
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/7/image-thumb__7__coreshop_productCartPreview/image_664e018f4a1cb5.40510853.694f04ee.jpg",
                        "dimensions": {
                            "width": 100,
                            "height": 100
                        }
                    }
                ],
                "imagesCartProduct": [
                    {
                        "fullpath": "/demo/products/Computer/5/image-thumb__5__coreshop_productCart/image_664e018f406f93.44055687.d2785850.jpg",
                        "dimensions": {
                            "width": 200,
                            "height": 200
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/6/image-thumb__6__coreshop_productCart/image_664e018f462bd4.00195991.d2785850.jpg",
                        "dimensions": {
                            "width": 200,
                            "height": 200
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/7/image-thumb__7__coreshop_productCart/image_664e018f4a1cb5.40510853.3fd1ebe8.jpg",
                        "dimensions": {
                            "width": 200,
                            "height": 200
                        }
                    }
                ],
                "imagesGrid": [
                    {
                        "fullpath": "/demo/products/Computer/5/image-thumb__5__coreshop_productGrid/image_664e018f406f93.44055687.c7f07179.jpg",
                        "dimensions": {
                            "width": 240,
                            "height": 240
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/6/image-thumb__6__coreshop_productGrid/image_664e018f462bd4.00195991.c7f07179.jpg",
                        "dimensions": {
                            "width": 240,
                            "height": 240
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/7/image-thumb__7__coreshop_productGrid/image_664e018f4a1cb5.40510853.8742d0b0.jpg",
                        "dimensions": {
                            "width": 240,
                            "height": 240
                        }
                    }
                ],
                "imagesProductDetail": [
                    {
                        "fullpath": "/demo/products/Computer/5/image-thumb__5__coreshop_productDetail/image_664e018f406f93.44055687.ada478f7.jpg",
                        "dimensions": {
                            "width": 330,
                            "height": 330
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/6/image-thumb__6__coreshop_productDetail/image_664e018f462bd4.00195991.ada478f7.jpg",
                        "dimensions": {
                            "width": 330,
                            "height": 330
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/7/image-thumb__7__coreshop_productDetail/image_664e018f4a1cb5.40510853.3024f1e2.jpg",
                        "dimensions": {
                            "width": 330,
                            "height": 330
                        }
                    }
                ],
                "imagesProductDetailPreview": [
                    {
                        "fullpath": "/demo/products/Computer/5/image-thumb__5__coreshop_productDetailThumbnail/image_664e018f406f93.44055687.947a4678.jpg",
                        "dimensions": {
                            "width": 150,
                            "height": 150
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/6/image-thumb__6__coreshop_productDetailThumbnail/image_664e018f462bd4.00195991.947a4678.jpg",
                        "dimensions": {
                            "width": 150,
                            "height": 150
                        }
                    },
                    {
                        "fullpath": "/demo/products/Computer/7/image-thumb__7__coreshop_productDetailThumbnail/image_664e018f4a1cb5.40510853.47e52f1c.jpg",
                        "dimensions": {
                            "width": 150,
                            "height": 150
                        }
                    }
                ],
                "isTracked": null,
                "stockAvailability": true,
                "shortDescription": "Quibusdam distinctio exercitationem nobis corrupti et eius. Rem commodi enim qui commodi. Laboriosam quis vel dolorem adipisci. Rerum incidunt earum omnis quia. Laudantium in necessitatibus illum."
            }
        }
    ],
    "customer": null,
    "taxes": [
        {
            "name": "20AT",
            "rate": 20,
            "amount": 140
        }
    ],
    "priceRuleItems": null,
    "adjustmentItems": [
        {
            "typeIdentifier": "shipping",
            "label": "",
            "pimcoreAmountNet": 500,
            "pimcoreAmountGross": 600
        }
    ],
    "shippingAddress": null,
    "invoiceAddress": null
}