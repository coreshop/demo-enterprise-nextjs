import React from 'react';
import Badge, { BadgeProps } from 'react-bootstrap/Badge';
import { CoreBadgetype, CoreBadgesize } from './types';
import * as Icons from 'react-bootstrap-icons';
import './badge.scss';

interface CoreBadgeProps extends Omit<BadgeProps, 'description'> {
    description: string,
    variant: CoreBadgetype,
    size?: CoreBadgesize,
    colorSpec?: string,
    close?: boolean,
    onClose?: () => void;
    disabled?: boolean;
    selected?: boolean;
}

export const CoreBadge = ({
    description,
    variant,
    size = CoreBadgesize.H6,
    pill,
    close = false,
    colorSpec,
    onClose,
    disabled = false,
    selected = false
}:CoreBadgeProps) => {
    const handleClose = () => {
        if (onClose) {
            onClose();
        }

        alert('Badge Closed');
    };

    const closeButton = () => {
        return (
            <span onClick={handleClose}><Icons.X size="14"/></span>
        );
    }

    return (
        <Badge pill={pill} bg={ variant } className={`${ colorSpec && 'badge-spec-wrapper' } ${size} ${selected && 'selected' } ${disabled && 'disabled' }`} >
            { colorSpec && (
                <div className="badge-spec" style={{ background: colorSpec }}></div>
            )}
            { description } { close && closeButton() }
        </Badge>
    )
}