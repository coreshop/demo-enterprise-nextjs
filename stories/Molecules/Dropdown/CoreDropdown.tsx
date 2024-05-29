import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CoreButtontype } from '../../Atoms/Button/types';
import * as Icons from 'react-bootstrap-icons';
import Flag from "react-country-flag";
import './dropdown.scss';
import { DropdownItem } from './types';


interface CoreDropdownProps {
    variant: CoreButtontype,
    title: string,
    items: DropdownItem[],
    iconType?: keyof typeof Icons;
    flagCode?: string;
    select?: boolean;
    selectedOption?: number;
}

export const CoreDropdown = ({
    variant,
    title,
    items,
    iconType,
    flagCode,
    select = false,
    selectedOption = 0
}:CoreDropdownProps) => {
    const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(items.length > selectedOption ? items[selectedOption] : null);
    const IconComponent = selectedItem && selectedItem.flagCode
    ? null
    : (selectedItem && selectedItem.icon ? Icons[selectedItem.icon] : (iconType ? Icons[iconType] : null));

    const handleItemClick = (event: React.MouseEvent<HTMLElement>, item: DropdownItem) => {
        if(select) {
            event.preventDefault();
            setSelectedItem(item);
        }
    };

    return (
        <DropdownButton title={
            <span>
                {selectedItem && selectedItem.flagCode && <span><Flag countryCode={selectedItem.flagCode} className="me-2" /></span>}
                {flagCode && !selectedItem?.flagCode && <span><Flag countryCode={flagCode} className="me-2" /></span>}
                {IconComponent && <IconComponent className="me-1" />}
                <span className="dropdown-description">
                    {selectedItem ? selectedItem.description : title}
                </span>
            </span>
        } variant={variant}>
             {items.map((item, index) => {
                const Icon = item.icon ? Icons[item.icon] : null;
                return (
                    <Dropdown.Item
                        key={index}
                        href={item.link}
                        onClick={(event) => handleItemClick(event as React.MouseEvent<HTMLElement, MouseEvent>, item)}
                    >
                        <span>
                            {!item.flagCode && Icon && <Icon className="me-1" />}
                            {item.flagCode && <Flag countryCode={item.flagCode} className="me-2" />}
                            {item.description}
                        </span>
                    </Dropdown.Item>
                );
             })}
        </DropdownButton>
    )
}