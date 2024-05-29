import { BrandItem } from 'stories/Molecules/Navbar/types';

export interface FooterLink {
    text: string;
    href: string;
}

export  interface FooterProps {
    logo?: BrandItem;
    links1?: FooterLink[];
    links2?: FooterLink[];
    links3?: FooterLink[];
}