import {CardProps} from "react-bootstrap/Card";
import React from "react";

export interface CoreCardProps extends Omit<CardProps, 'imageSrc'> {
    imageSrc?: string,
    imageSrc2?: string,
    title?: string,
    subtitle?: string,
    description?: string,
    layout: "layout1" | "layout2" | "layout3" | "layout4",
    link?: string|null
    btnBottom?: React.ReactNode;
    priceTag?: React.ReactNode;
}