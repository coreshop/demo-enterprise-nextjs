import React, { useState } from 'react';
import { CoreButton } from '../../Atoms/Button/CoreButton';
import { CoreButtontype } from '../../Atoms/Button/types';
import Collapse from 'react-bootstrap/Collapse';

interface CoreCollapseProps {
  buttonText: string;
  collapseIdentifier: string;
  collapseDescription: string;
  status?: boolean;
}

export const CoreCollapse = ({
  collapseIdentifier,
  buttonText,
  collapseDescription,
  status
}: CoreCollapseProps) => {
    const [open, setOpen] = useState(status || false);

    return (
       <div>
        <CoreButton
                onClick={() => setOpen(!open)}
                ariaControls={`collapse-${collapseIdentifier}`}
                ariaExpanded={open}
                text={buttonText}
                variant={CoreButtontype.Primary} 
                icon={true}
                iconPost={true}
                iconType={open ? 'DashCircle' : 'PlusCircle'}
        /> 
        <Collapse in={open}>
            <div id={`collapse-${collapseIdentifier}`} className="mt-3">
              { collapseDescription }
            </div>
        </Collapse>
      </div>
    )
}