import { NavItem, BrandItem } from '../../Molecules/Navbar/types';
import { CoreLinkProps } from '../../Atoms/Link/types';
import { DropdownItem } from '../../Molecules/Dropdown/types';
import { FooterLink } from '../../Organisms/Footer/types';
import { FooterTextLink } from '../../Organisms/FooterPre/types';
import { BreadcrumbItem } from '../../Atoms/Breadcrumb/types';
import { PaginationItem } from '../../Molecules/Pagination/types';

export interface ProductsProps {
    logo?: BrandItem;
    items: NavItem[];
    itemsTopbar: NavItem[];
    wishlist?: CoreLinkProps;
    dropdownItems?: DropdownItem[];
    dropdownItemsLanguage?: DropdownItem[];
    links1?: FooterLink[];
    links2?: FooterLink[];
    links3?: FooterLink[];
    footerPreItems?: NavItem[];
    footerPreText?: FooterTextLink;
    breadcrumbItems: BreadcrumbItem[];
    paginationItems: PaginationItem[];
}