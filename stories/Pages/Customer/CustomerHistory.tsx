import React from 'react';
import {Header} from '../../Organisms/Header/Header';
import {HomeProps} from '../Home/types';
import {CoreFooter} from '../../Organisms/Footer/Footer';
import {FooterPre} from '../../Organisms/FooterPre/FooterPre';
import {CoreBreadcrumb} from "../../Atoms/Breadcrumb/CoreBreadcrumb";
import Table from 'react-bootstrap/Table';
import {CustomerMenu} from "./CustomerMenu";
import {StatusDot} from "../../Molecules/StatusDot/StatusDot";

export const CustomerHistory = ({
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
                                     breadcrumbItems
                                 }: HomeProps) => {
    return (
        <div>
            <Header logo={logo} items={items} itemsTopbar={itemsTopbar} wishlist={wishlist} dropdownItems={dropdownItems} dropdownItemsLanguage={dropdownItemsLanguage}/>

            <main>
                <section className="container mt-3">
                    <CoreBreadcrumb breadcrumbItems={breadcrumbItems} icon={true}/>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 mb-3">
                            <CustomerMenu />
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="h2">Your Order history</div>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Order Number</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border-0">12345678909687</td>
                                    <td className="border-0">23.12.2023</td>
                                    <td className="border-0">€456.90</td>
                                    <td className="border-0">
                                        <StatusDot status="completed" text="Completed"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-0">99345678909687</td>
                                    <td className="border-0">29.12.2023</td>
                                    <td className="border-0">€256.90</td>
                                    <td className="border-0">
                                        <StatusDot status="pending" text="Pending"/>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </section>
            </main>
            <CoreFooter logo={logo} links1={links1} links2={links2} links3={links3}/>
            <FooterPre footerPreText={footerPreText} footerPreItems={footerPreItems}/>
        </div>
    )
}