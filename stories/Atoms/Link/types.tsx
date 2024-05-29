import * as Icons from "react-bootstrap-icons";

export interface CoreLinkProps {
    text: string;
    href: string;
    title?: string;
    rel?: string;
    target?: "_self" | "_blank";
    cssClass?: string;
    icon: boolean;
    iconType?: keyof typeof Icons;
    iconCss?: string;
}