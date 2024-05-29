import { NavItem } from '../../Molecules/Navbar/types';

export interface FooterTextLink {
    text?: string;
    href?: string
}

export interface FooterPreProps {
    footerPreText?: FooterTextLink;
    footerPreItems?: NavItem[];
}