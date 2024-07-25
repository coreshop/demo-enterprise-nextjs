'use client';

import React, {useEffect, useState} from "react";
import {CoreBadgesize, CoreBadgetype} from "@/stories/Atoms/Badge/types";
import {CoreBadge} from "@/stories/Atoms/Badge/CoreBadge";
import {ProductFragment} from "@/lib/graphql/types.generated";
import {redirect} from "next/navigation";
import {productVariant} from "@/components/actions";

const mockDataAttributes = {
    71: {
        "attributes": {
            11 : 12,
            15 : 16,
            20 : 21
        },
        "url":"/product/71"
    },
    72: {
        "attributes": {
            11 : 14,
            15 : 19,
            20 : 21
        },
        "url":"/product/72"
    },
    73: {
        "attributes": {
            11 : 13,
            15 : 17,
            20 : 22
        },
        "url":"/product/73"
    },
    74: {
        "attributes": {
            11 : 14,
            15 : 19,
            20 : 22
        },
        "url":"/product/74"
    },
    75: {
        "attributes": {
            11 : 12,
            15 : 19,
            20 : 21
        },
        "url":"/product/75"
    },
    76: {
        "attributes": {
            11 : 14,
            15 : 17,
            20 : 21
        },
        "url":"/product/76"
    }
}

interface ProductVariant {
    attributes: {
        [key: number]: number;
    };
}

export function ProductVariant({ product }: {
    product: ProductFragment
}) {

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
        const productVariantsResults = Object.entries(mockDataAttributes)
            .filter(([key, value]) =>
                updatedSelectedIds.every(selectedId =>
                    Object.values(value.attributes).includes(parseInt(selectedId))
                )
            )
            .map(([key, value]) => ({ id: Number(key), attributes: value.attributes, url: value.url }));

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
            productVariant(null, exactMatch?.url);
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
            return true;
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
