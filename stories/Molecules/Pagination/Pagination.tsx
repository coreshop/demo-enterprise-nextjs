import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { CorePaginationProps } from './types';
import './pagination.scss';

export const CorePagination = ({
    paginationItems
}:CorePaginationProps) => {
    const activeIndex = paginationItems.findIndex(i => i.active);
    const items: React.ReactNode[] = [];
    let ellipsisRenderedBeforeActive = false;
    for (let index = 0; index < paginationItems.length; index++) {
        const item = paginationItems[index];
        const isActive = item.active;
        const isFirstOrLast = index === 0 || index === paginationItems.length - 1;
        const isInRange = Math.abs(index - activeIndex) <= 2;

        if (isActive || isFirstOrLast || isInRange) {
            if (isInRange) {
                ellipsisRenderedBeforeActive = false;
            }
            items.push(
                <Pagination.Item
                    key={index}
                    href={item.link}
                    active={isActive}
                >
                    {item.number}
                </Pagination.Item>
            );
        } else if (!isFirstOrLast && !ellipsisRenderedBeforeActive) {
            ellipsisRenderedBeforeActive = true;
            items.push(<Pagination.Ellipsis key={index} />);
        }
    }
    return (
        <div className="d-flex align-items-center gap-3">
            <div className="text-14">Total {paginationItems.length} items </div>
            <Pagination className="mb-0" size="sm">
                {items}
            </Pagination>
        </div>
    );
}