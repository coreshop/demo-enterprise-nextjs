import React from 'react';
import { CoreNavbar } from '../../Molecules/Navbar/CoreNavbar';
import { NavItem, BrandItem } from '../../Molecules/Navbar/types';
import { Topbar } from '../../Molecules/Topbar/Topbar';
import { CoreLinkProps } from '../../Atoms/Link/types';
import { DropdownItem } from '../../Molecules/Dropdown/types';
import './header.scss';

interface HeaderProps {
    logo?: BrandItem;
    items?: NavItem[];
    itemsTopbar?: NavItem[];
    wishlist?: CoreLinkProps;
    dropdownItems?: DropdownItem[];
    dropdownItemsLanguage?: DropdownItem[];
    selectedOption?: number;
}

export const Header = ({
    logo,
    items,
    itemsTopbar,
    wishlist,
    dropdownItems,
    dropdownItemsLanguage,
    selectedOption = 0
}: HeaderProps) => {
    return (
        <header>
            <Topbar items={itemsTopbar} wishlist={wishlist} dropdownItems={dropdownItems} dropdownItemsLanguage={dropdownItemsLanguage} selectedOption={selectedOption}/>
            <div className="coreshop-main-nav-wrapper"><CoreNavbar logo={logo} searchBar={true} logoActive={true} cart={true} navbar={false}/></div>
            <div className="coreshop-basic-nav-wrapper"><CoreNavbar items={items} searchBar={false} logoActive={false} navbar={true}/></div>
        </header>
    )
}