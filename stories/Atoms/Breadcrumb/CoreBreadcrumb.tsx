'use client';

import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { HouseDoor } from 'react-bootstrap-icons';
import { CoreBreadcrumbProps } from './types';
import './breadcrumb.scss';

export const CoreBreadcrumb = ({
    breadcrumbItems,
    icon,
    divider
}:CoreBreadcrumbProps) => {
    return (
        <div className="container-lg">
            <Breadcrumb>
                {breadcrumbItems.map((item, index) => (
                    <Breadcrumb.Item
                        key={index}
                        href={item.link}
                        active={!item.link}
                        className={`${icon && index === 0 ? 'with-icon ' : ''}${divider}`}
                    >
                        {icon && index === 0 && <HouseDoor className="me-1" />} <span>{item.title}</span>
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </div>
    )
}