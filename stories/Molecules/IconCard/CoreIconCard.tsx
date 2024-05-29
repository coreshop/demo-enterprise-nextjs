import React from 'react';
import Card, { CardProps } from 'react-bootstrap/Card';
import * as Icons from 'react-bootstrap-icons';
import { CoreButton } from '../../Atoms/Button/CoreButton';
import { CoreButtontype } from '../../Atoms/Button/types';
import  './iconcard.scss';

interface CoreIconCardProps extends Omit<CardProps, 'iconType'> {
    iconType?: keyof typeof Icons;
    title?: string,
    iconSize?: string,
    description?: string,
    btnText: string,
    btnHref?: string,
}

export const CoreIconCard = ({
    title,
    description,
    iconType = "ListUl",
    iconSize = "36px",
    btnText,
    btnHref
}:CoreIconCardProps) => {
    const IconComponent = Icons[iconType];
    const spaceLeft = `calc(${iconSize} + 24px)`;
    return (
        <Card className="icon-card bg-light border-0 p-3">
            <Card.Body>
                { title && <div className="card-title h3"><IconComponent size={iconSize} className={title ? "text-primary me-3" : ""} /> {title} </div> }
                <div className="card-body--details" style={{marginLeft: spaceLeft}}>
                    {description &&
                        <Card.Text>
                            { description }
                        </Card.Text>
                    }
                    <div className="d-inline-flex">
                        <CoreButton
                            text={btnText}
                            variant={CoreButtontype.Primary}
                            icon={false}
                            buttonType="a"
                            href={btnHref}
                        />

                    </div>
                </div>
            </Card.Body>
        </Card>


    );
};
