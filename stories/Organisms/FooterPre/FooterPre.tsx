import React from 'react';
import { FooterPreProps } from './types';
import NavLink from 'react-bootstrap/NavLink';
import { CoreLink } from '../../Atoms/Link/CoreLink';
import './footerpre.scss';



export const FooterPre = ({
    footerPreText,
    footerPreItems

}: FooterPreProps) => {
    return (
       <div className="footerpre">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-7 mb-2 mb-xl-0"> { footerPreText && footerPreText.text } | { footerPreText && footerPreText.href &&  <CoreLink text={footerPreText.href} href={footerPreText.href} icon={false} cssClass="text-white text-decoration-none" />}</div>
                    <div className="col-12 col-xl-4 offset-xl-1">
                        <div className="row gap-2 gap-md-0">
                            {footerPreItems?.map((item, index) => (
                                <div className="col-12 col-md-6 col-xl-3" key={index}>
                                    <NavLink href={item.node.link} active={item.node.current}>{item.node.title}</NavLink>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}