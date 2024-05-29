import React from 'react';
import * as Icons from 'react-bootstrap-icons';
import './statusdot.scss';

interface StatusDotProps {
    status: 'available' | 'limited' | 'outofstock' | 'completed' | 'pending'
    text: string
}
export const StatusDot = ({
    status,
    text
}: StatusDotProps) => {
    return (
        <div className="d-flex align-items-center gap-2 stock">
            <Icons.CircleFill size={20} className={`stock-${status}`}/>
            <span>{text}</span>
        </div>
    )
}