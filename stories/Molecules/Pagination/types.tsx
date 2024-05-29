export interface PaginationItem {
    number: string;
    link?: string;
    active: boolean;
}

export interface CorePaginationProps {
    paginationItems: PaginationItem[];
}