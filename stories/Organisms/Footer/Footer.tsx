import React from 'react';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { CoreLink } from '../../Atoms/Link/CoreLink';
import { FooterProps } from './types';
import './footer.scss';

export const CoreFooter = ({
    logo,
    links1,
    links2,
    links3
}: FooterProps) => {
    return (
       <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-3 mb-3">
                        <NavbarBrand href={ logo && logo.link }>
                            <img
                                src={logo && logo.imgsrc.src}
                                width="160"
                                height="40"
                                className="d-inline-block align-top"
                                alt="Coreshop logo"
                            />
                        </NavbarBrand>
                        <div className="gap-3 mt-3">
                            <div>CoreShop GmbH</div>
                            <div>Zeileisstraße 6</div>
                            <div>4600 Wels</div>
                            <div>Mobile +43 660 36 177 85</div>
                            <div>Email <CoreLink href="mailto:info@coreshop.org" text="info@coreshop.org" icon={false} /></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3 mb-3">
                        <h5>Product</h5>
                        <div className="gap-3 mt-3">
                            {links1?.map((item, index) => (
                                <div key={index} ><CoreLink href={item.href} text={item.text} icon={false} /></div>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3 mb-3">
                        <h5>Text Title</h5>
                        <div className="gap-3 mt-3">
                            {links2?.map((item, index) => (
                                <div key={index}><CoreLink href={item.href} text={item.text} icon={false} /></div>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-3">
                        <h5>Text Title</h5>
                        <div className="gap-3 mt-3">
                            {links3?.map((item, index) => (
                                <div key={index}><CoreLink href={item.href} text={item.text} icon={false} /></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}