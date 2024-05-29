import React from 'react';
import Alert, { AlertProps } from 'react-bootstrap/Alert';
import { CoreAlerttype } from './types';
import * as Icons from 'react-bootstrap-icons';

interface CoreAlertProps extends Omit<AlertProps, 'text'> {
    text: string,
    variant: CoreAlerttype,
    dismissible?: boolean,
    iconType?: keyof typeof Icons;
}

export const CoreAlert = ({
    text,
    variant,
    dismissible,
    iconType
}:CoreAlertProps) => {
    const IconComponent = iconType ? Icons[iconType] : null;

    return (
        <Alert variant={variant} dismissible={dismissible} className="d-flex align-items-center">
            { IconComponent && <IconComponent className={text ? "me-2" : "" } />}
            { text }
        </Alert>
    )
}