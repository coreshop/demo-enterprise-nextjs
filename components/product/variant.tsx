'use client';

import React, {useEffect, useState} from "react";
import {CoreBadgesize, CoreBadgetype} from "@/stories/Atoms/Badge/types";
import {CoreBadge} from "@/stories/Atoms/Badge/CoreBadge";
import {ProductFragment} from "@/lib/graphql/types.generated";
import {productVariantAction} from "@/components/actions";

interface ProductVariant {
    attributes: {
        [key: number]: number;
    },
    url: string
}

export function ProductVariant({ product }: {
    product: ProductFragment
}) {
    const [loading, setLoading] = useState(false);
    
    const transformData = (data:any) => {
        return data.reduce((acc:any, item:any) => {
            acc[item.productId] = {
                attributes: item.attributes.reduce((attrAcc:any, attr:any) => {
                    attrAcc[attr.groupId] = attr.attributeId;
                    return attrAcc;
                }, {}),
                url: `/product/${item.productId}`
            };
            return acc;
        }, {});
    };
    let transformedData = [];
    if(product.variantAttributeIndex) {
        transformedData = transformData(product.variantAttributeIndex);
    }
    const [selectedAttributeIds, setSelectedAttributeIds] = useState<string[]>(() => {
        if (product.attributes) {
            return product.attributes
                .map(attr => { return attr?.id != null ? attr?.id : ''});
        }
        return [];
    });
    const [productVariantsArray, setProductVariantsArray] = useState<ProductVariant[]>([]);
    const [firstClick, setFirstClick] = useState<boolean>(false);
    const handleVariant = (attributeId: string) => {
        const id = parseInt(attributeId);

        let updatedSelectedIds: string[] = [];

        // Toggle selection of the attributeId
        if (firstClick) {
            updatedSelectedIds = selectedAttributeIds.includes(attributeId)
                ? selectedAttributeIds.filter(id => id !== attributeId)
                : [...selectedAttributeIds, attributeId];
        } else {
            updatedSelectedIds = [attributeId];
        }

        // Update productVariantsArray based on the updated selected attributes
        const productVariantsResults = Object.entries(transformedData)
            .filter(([key, value]) =>
                updatedSelectedIds.every(selectedId =>
                    Object.values((value as ProductVariant).attributes).includes(parseInt(selectedId))
                )
            )
            .map(([key, value]) => ({ id: Number(key), attributes: (value as ProductVariant).attributes, url: (value as ProductVariant).url }));

        setSelectedAttributeIds(updatedSelectedIds);
        setProductVariantsArray(productVariantsResults);
        setFirstClick(true);

        // Check for an exact match and redirect if found
        const exactMatch = productVariantsResults.find(variant =>
            Object.keys(variant.attributes).length === updatedSelectedIds.length &&
            updatedSelectedIds.every(id =>
                Object.values(variant.attributes).includes(parseInt(id))
            )
        );

        if (typeof exactMatch?.url !== 'undefined') {
            productVariantAction(null, exactMatch?.url);
        }
    };
    const checkAttribute = (attributeId: string) => {
        if (firstClick) {
            const updatedSelectedIds = [...selectedAttributeIds, attributeId];
            return productVariantsArray.some(variant =>
                updatedSelectedIds.every(id =>
                    Object.values(variant.attributes).includes(parseInt(id))
                )
            );
        } else {
            const updatedSelectedIds = [...selectedAttributeIds, attributeId];
            const productVariantsResults = Object.entries(transformedData)
                .filter(([key, value]) =>
                    updatedSelectedIds.every(selectedId =>
                        Object.values((value as ProductVariant).attributes).includes(parseInt(selectedId))
                    )
                )
                .map(([key, value]) => ({ id: Number(key), attributes: (value as ProductVariant).attributes, url: (value as ProductVariant).url }));
            return productVariantsResults.some(variant =>
                updatedSelectedIds.every(id =>
                    Object.values(variant.attributes).includes(parseInt(id))
                )
            );
        }
    };
    useEffect(() => {
    }, [selectedAttributeIds, productVariantsArray]);

    return (
        <>
            {product.allowedAttributeGroups && product.allowedAttributeGroups.map((groupAttribute: any) => (
                <div className="mb-3" key={groupAttribute.id}>
                    <div className="mb-2">{groupAttribute.name}:</div>
                    <div className="d-flex flex-wrap gap-2">
                        {groupAttribute.children && groupAttribute.children.map((attribute: any) => (
                            <CoreBadge
                                key={attribute.id}
                                description={attribute.name}
                                size={CoreBadgesize.F16}
                                variant={CoreBadgetype.OutlineSecondary}
                                colorSpec={attribute.valueColor}
                                onClick={() => handleVariant(attribute.id)}
                                selected={selectedAttributeIds.includes(attribute.id)}
                                disabled={!checkAttribute(attribute.id)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
