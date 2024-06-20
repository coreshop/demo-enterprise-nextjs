import React from "react";
import './pricetag.scss';

interface PriceTagProps {
    offerPrice: React.ReactNode;
    price: React.ReactNode;
    vat: boolean;
    size?: 'small' | 'normal';
    taxAmount?: React.ReactNode;
    showDiscount?: boolean;
}

export const PriceTag = ({
    offerPrice,
    price,
    vat = true,
    size = "normal",
    taxAmount,
    showDiscount = true,
}:PriceTagProps) => {

    return (
        <div className={`price-tag ${size}`}>
            {offerPrice && showDiscount && <div className="price-tag-offer">{offerPrice}</div>}
            <div className="price-tag-price">{price}</div>
            {vat && taxAmount && <div className="price-tag-vat">{taxAmount} incl VAT</div>}
        </div>
    );
};