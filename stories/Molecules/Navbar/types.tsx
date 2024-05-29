export interface BrandItem {
    imgsrc: string;
    link: string;
}

export interface NavItem {
    node:{
        parent: {
            __typename: string;
        };
        id: string;
        title: string;
        link: string;
        children: SubNavItem[],
        current: boolean
    }
}

export interface SubNavItem {
    id: string;
    title: string;
    link: string;
    children: SubNavItem[],
    current: boolean
}