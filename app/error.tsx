'use client';

import { FC } from 'react';

const Error: FC<{ error: Error }> = ({ error }) => {

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1 className="h3">Something went wrong</h1>
            <p>We encountered an error. Please try again later.</p>
        </div>
    );
};

export default Error;