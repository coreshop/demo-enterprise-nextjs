import React from 'react';
import { CoreButton } from '../../Atoms/Button/CoreButton';
import { CoreButtontype } from '../../Atoms/Button/types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const CoreButtonGroup = () => {
    return (
      <ButtonGroup aria-label="Basic example">
        <CoreButton variant={CoreButtontype.Primary} text="Button 1" icon={false} />
        <CoreButton variant={CoreButtontype.Secondary} text="Button 2" icon={true} iconType="Search" iconPre={true} />
        <CoreButton variant={CoreButtontype.Primary} text="Button 3" icon={false} />
        <CoreButton variant={CoreButtontype.Dark} text="Button 4" icon={false} />
      </ButtonGroup>
    )
}