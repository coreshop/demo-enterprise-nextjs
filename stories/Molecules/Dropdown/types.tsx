import * as Icons from 'react-bootstrap-icons';

export interface DropdownItem {
    description: string;
    link: string;
    icon?: keyof typeof Icons | '';
    flagCode?: string;
}