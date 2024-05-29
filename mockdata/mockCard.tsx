import {PriceTag} from "@/stories/Atoms/PriceTag/PriceTag";
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import {CoreCardProps} from "@/stories/Molecules/Cards/types";
import React from "react";

export const mockCard: Partial<CoreCardProps> = {
    imageSrc: "https://dummyimage.com/600x400/000/fff",
    imageSrc2: "https://dummyimage.com/576x576/000/fff",
    title: "Card Title",
    subtitle: "Card SubTitle",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    layout: "layout1",
    priceTag: <PriceTag offerPrice='€150.50EUR' price='€150.50EUR' taxAmount='€30.50EUR' vat={false}/>,
    btnBottom: <div className="d-inline-flex gap-2">
        <div><input type="number" name="quantity" className="form-control cart-item-quantity" min="1"
                    value="1" /></div>
        <CoreButton type="submit" text="Add to Cart" variant={CoreButtontype.Primary} icon={false} loader={false}/>
    </div>
}