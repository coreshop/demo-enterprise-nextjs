import React from 'react';
import { CoreNavbar } from '../../Molecules/Navbar/CoreNavbar';
import { NavItem } from '../../Molecules/Navbar/types';
import './topbar.scss';
import { CoreLink } from '../../Atoms/Link/CoreLink';
import { CoreDropdown } from '../Dropdown/CoreDropdown';
import { CoreButtontype } from '../../Atoms/Button/types';
import { DropdownItem } from '../../Molecules/Dropdown/types';
import { CoreLinkProps } from '../../Atoms/Link/types';

interface TopbarProps {
    items?: NavItem[];
    wishlist?: CoreLinkProps;
    dropdownItems?: DropdownItem[];
    dropdownItemsLanguage?: DropdownItem[];
    selectedOption?: number;
}

export const Topbar = ({
    items,
    wishlist,
    dropdownItems,
    dropdownItemsLanguage,
    selectedOption = 0
}: TopbarProps) => {
    return (
        <div className="topbar">

            <div className="d-flex justify-content-between align-items-center container-lg">
                <CoreNavbar items={items} searchBar={false} logoActive={false} navbar={true}/>
                <div className="d-flex align-items-center">
                    <div className="topbar__wishlist">{wishlist &&
                        <CoreLink text={wishlist.text} href={wishlist.href} cssClass={wishlist.cssClass}
                                  icon={wishlist.icon} iconType={wishlist.iconType}/>}</div>
                    <div className="topbar__currency">{dropdownItems && dropdownItems[0] &&
                        <CoreDropdown variant={CoreButtontype.Link} title={dropdownItems[0].description}
                                      items={dropdownItems} select={true} iconType="CurrencyEuro"/>}</div>
                    <div className="topbar__language">{dropdownItemsLanguage && dropdownItemsLanguage[0] &&
                        <CoreDropdown variant={CoreButtontype.Link} title={dropdownItemsLanguage[0].description}
                                      items={dropdownItemsLanguage} select={false} flagCode="AT" selectedOption={selectedOption}/>}</div>
                </div>
            </div>
        </div>
    )
}