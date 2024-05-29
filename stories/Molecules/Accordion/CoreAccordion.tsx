import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './accordion.scss';
import {CoreAccordionProps} from './types';

export const CoreAccordion = ({
    accordionItems,
    active,
}: CoreAccordionProps) => {
    return (
        <Accordion defaultActiveKey={active}>
            {accordionItems.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                        {item.description}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}