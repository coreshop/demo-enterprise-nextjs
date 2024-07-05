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

export const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(segment => segment);

    const breadcrumbItems: BreadcrumbItem[] = [
        { title: "Home", link: "/" }
    ];

    pathSegments.forEach((segment, index) => {
        let link = `/${pathSegments.slice(0, index + 1).join('/')}`;

        let title = segment.charAt(0).toUpperCase() + segment.slice(1);

        breadcrumbItems.push({
            title: title,
            link: link
        });
    });

    return breadcrumbItems;
};