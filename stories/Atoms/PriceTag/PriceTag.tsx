import React from "react";
import './pricetag.scss';

interface PriceTagProps {
    offerPrice: React.ReactNode;
    price: React.ReactNode;
    vat: boolean;
    size?: 'small' | 'normal';
    taxAmount?: React.ReactNode;
}

export const PriceTag = ({
    offerPrice,
    price,
    vat = true,
    size = "normal",
    taxAmount
}:PriceTagProps) => {

    return (
        <div className={`price-tag ${size}`}>
            { offerPrice && <div className="price-tag-offer">{offerPrice}</div> }
            <div className="price-tag-price">{price}</div>
            { vat && taxAmount && <div className="price-tag-vat">{taxAmount} incl. VAT</div> }
        </div>
    );
};