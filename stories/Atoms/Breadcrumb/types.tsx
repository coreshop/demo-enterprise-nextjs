import { BreadcrumbProps } from 'react-bootstrap/Breadcrumb';

export interface BreadcrumbItem {
    title: string;
    link: string;
}

export interface CoreBreadcrumbProps extends Omit<BreadcrumbProps, 'items'> {
    breadcrumbItems: BreadcrumbItem[];
    icon: boolean;
    divider?: "style-1" | "style-2" | "style-3";
}