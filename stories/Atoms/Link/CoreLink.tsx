import React from "react";
import * as Icons from "react-bootstrap-icons";
import { CoreLinkProps } from "./types";


export const CoreLink = ({
    text,
    href,
    title,
    rel,
    target = "_self",
    cssClass,
    icon,
    iconType = "Search",
    iconCss
}: CoreLinkProps) => {
    const IconComponent = Icons[iconType];
    return (
        <a
            href={href}
            className={cssClass ?? cssClass}
            rel={rel ?? rel}
            title={title ?? title}
            target={target ?? target}
        >
            {icon && (
                <IconComponent className={`${text ? "me-2" : ""} ${iconCss ? iconCss : ""}`} />
            )}
            <span className="link-description">{text}</span>
        </a>
    );
};
