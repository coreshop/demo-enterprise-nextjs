import {getCategories} from "@/lib";
import Link from "next/link";
import {pimcoreImage} from "@/lib/pimcoreLoader";
import {AddToCart} from "@/components/product/add-to-cart";
import {PriceInfo} from "@/components/product/price";
import {CoreCard} from "@/stories/Molecules/Cards/CoreCard";
import React from "react";

export default async function GetAllCategories() {
    const categories = await getCategories();

    return <>
        <h3>Categories</h3>
        <div className="row">
            {categories && categories.map((item, index) => (
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <CoreCard
                        layout="layout1"
                        imageSrc={''}
                        imageSrc2={''}
                        title={item.name ? item.name : ''}
                        description={item.description ? item.description : ''}
                        link={item.id ? `/category/${item.id}` : null}
                        btnBottom={null}
                        priceTag={null}
                    />
                </div>
            ))}
        </div>
    </>
}
