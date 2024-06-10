import React from 'react';
import {Header} from '../../Organisms/Header/Header';
import {ProductProps} from './types';
import {CoreBreadcrumb} from '../../Atoms/Breadcrumb/CoreBreadcrumb';
import {CoreFooter} from '../../Organisms/Footer/Footer';
import {FooterPre} from '../../Organisms/FooterPre/FooterPre';
import '../../assets/scss/cartprogress.scss';
import {CoreLink} from "../../Atoms/Link/CoreLink";
import {StatusDot} from "../../Molecules/StatusDot/StatusDot";
import {CoreBadge} from "../../Atoms/Badge/CoreBadge";
import {CoreBadgesize, CoreBadgetype} from "../../Atoms/Badge/types";
import {PriceTag} from "../../Atoms/PriceTag/PriceTag";
import {CoreButton} from "../../Atoms/Button/CoreButton";
import {CoreButtontype} from "../../Atoms/Button/types";
import Table from "react-bootstrap/Table";

export const ProductDetails = ({
    logo,
    items,
    itemsTopbar,
    wishlist,
    dropdownItems,
    dropdownItemsLanguage,
    links1,
    links2,
    links3,
    footerPreItems,
    footerPreText,
    breadcrumbItems,
    accordionItems,
}: ProductProps) => {
    return (
        <div>
            <Header logo={logo} items={items} itemsTopbar={itemsTopbar} wishlist={wishlist} dropdownItems={dropdownItems} dropdownItemsLanguage={dropdownItemsLanguage}/>
            <main>
                <section className="container mt-3">
                    <CoreBreadcrumb breadcrumbItems={breadcrumbItems} icon={true}/>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3">
                            Gallery
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <CoreLink text="Add to favorites" href="" icon={true} iconType="Heart"
                                      iconCss="text-primary"
                                      cssClass="d-inline-block text-decoration-none text-body mb-2"/>
                            <h1 className="h2">Test Product XS-4</h1>
                            <div className="d-flex justify-content-between mb-3">
                                <div className="text-14 "><span className="text-600 pe-2">EAN:</span> 5801882956622
                                </div>
                                <div className="text-14 ">
                                    <StatusDot status="available" text="In Stock"/>
                                </div>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                            <div className="mb-2">Selection Labels:</div>
                            <div className="d-flex flex-wrap gap-2">
                                <CoreBadge description="Color Label" size={CoreBadgesize.F16}
                                           variant={CoreBadgetype.OutlineSecondary} colorSpec="#DD5959" selected={true}/>
                                <CoreBadge description="Color Label" size={CoreBadgesize.F16}
                                           variant={CoreBadgetype.OutlineSecondary} colorSpec="#5966DD"/>
                                <CoreBadge description="Color Label" size={CoreBadgesize.F16}
                                           variant={CoreBadgetype.OutlineSecondary} colorSpec="#CC6228"
                                           disabled={true}/>
                                <CoreBadge description="Color Label" size={CoreBadgesize.F16}
                                           variant={CoreBadgetype.OutlineSecondary} colorSpec="#F1BE3C"
                                           disabled={true}/>
                            </div>
                            <div className="my-3"></div>
                            <div className="mb-2">Selection Labels:</div>
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <CoreBadge description="Color Label" size={CoreBadgesize.F16}
                                           variant={CoreBadgetype.OutlineSecondary} selected={true}/>
                                <CoreBadge description="Color Label" size={CoreBadgesize.F16}
                                           variant={CoreBadgetype.OutlineSecondary}/>
                                <CoreBadge description="Color Label" size={CoreBadgesize.F16}
                                           variant={CoreBadgetype.OutlineSecondary}
                                           disabled={true}/>
                                <CoreBadge description="Color Label" size={CoreBadgesize.F16}
                                           variant={CoreBadgetype.OutlineSecondary}
                                           disabled={true}/>
                            </div>
                            <div className="mb-3">
                                <Table className="layout-2">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Price per Carton: €123.50</td>
                                        <td className="text-end">
                                            <CoreBadge description="Including 24pcs."
                                                       variant={CoreBadgetype.Secondary}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-0">Price per Carton: €123.50</td>
                                        <td className="text-end">
                                            <CoreBadge description="Including 24pcs."
                                                       variant={CoreBadgetype.Secondary}/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="mb-3">
                                <Table className="layout-2">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Quantity</td>
                                        <td className="text-end">Unit Price</td>
                                    </tr>
                                    <tr>
                                        <td className="text-primary py-0" colSpan={2}>Piece</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Starting from 20</strong> You Save 20%</td>
                                        <td className="text-end">€123.50</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Starting from 20</strong> You Save 20%</td>
                                        <td className="text-end">€123.50</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="mb-3">
                                <div>Price p. unit:</div>
                                <PriceTag offerPrice="123.50" price="99.99" vat={true}/>
                            </div>
                            <div className="d-flex gap-2">
                                <div>Selection input</div>
                                <CoreButton text="Add to Carrt" variant={CoreButtontype.Primary} icon={true}
                                            iconPre={true} iconType="PlusCircle"/>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
            <CoreFooter logo={logo} links1={links1} links2={links2} links3={links3}/>
            <FooterPre footerPreText={footerPreText} footerPreItems={footerPreItems}/>
        </div>
    )
}