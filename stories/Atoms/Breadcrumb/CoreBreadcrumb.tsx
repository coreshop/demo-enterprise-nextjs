'use client';

import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { HouseDoor } from 'react-bootstrap-icons';
import {BreadcrumbItem, CoreBreadcrumbProps, generateBreadcrumbs} from './types';
import './breadcrumb.scss';
import { usePathname } from 'next/navigation'

export const CoreBreadcrumb = ({
    breadcrumbItems,
    icon,
    divider
}:CoreBreadcrumbProps) => {
    const pathname = usePathname();
    let breadcrumbItemsRouter: BreadcrumbItem[];

    if(pathname) {
        breadcrumbItemsRouter = generateBreadcrumbs(pathname);
    } else {
        breadcrumbItemsRouter = breadcrumbItems
    }

    return (
        <div className="container-lg">
            <Breadcrumb>
                {breadcrumbItemsRouter.map((item, index) => (
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