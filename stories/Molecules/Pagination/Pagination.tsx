import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { CorePaginationProps } from './types';
import './pagination.scss';

export const CorePagination = ({
    paginationItems
}:CorePaginationProps) => {
    let ellipsisRenderedBeforeActive = false;
    return (
        <div className="d-flex align-items-center gap-3">
            <div className="text-14">Total {paginationItems.length} items </div>
            <Pagination className="mb-0" size="sm">
                {paginationItems.map((item, index) => {
                    const isActive = item.active;
                    const isFirstOrLast = index === 0 || index === paginationItems.length - 1;
                    const isInRange = Math.abs(index - paginationItems.findIndex(i => i.active)) <= 2;

                    if (isActive || isFirstOrLast || isInRange) {
                        if(isInRange) {
                            ellipsisRenderedBeforeActive = false;
                        }
                        return (
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
                        return <Pagination.Ellipsis key={index} />;
                    } else {
                        return null;
                    }
                })}
            </Pagination>
        </div>
    );
}