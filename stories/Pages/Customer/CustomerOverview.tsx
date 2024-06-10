import React from 'react';
import {Header} from '../../Organisms/Header/Header';
import {HomeProps} from '../Home/types';
import {CoreFooter} from '../../Organisms/Footer/Footer';
import {FooterPre} from '../../Organisms/FooterPre/FooterPre';
import {CoreBreadcrumb} from "../../Atoms/Breadcrumb/CoreBreadcrumb";
import {CoreIconCard} from "../../Molecules/IconCard/CoreIconCard";
import {CustomerMenu} from "./CustomerMenu";

export const CustomerOverview = ({
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
                            <div className="row">
                                <div className="col-12 col-lg-6 mb-3">
                                    <div className="bg-light">
                                        <CoreIconCard iconType="ListUl" btnText="Check order history" title="Order History" iconSize="36px" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <div className="bg-light">
                                        <CoreIconCard iconType="PersonWorkspace" btnText="Check addresses" title="Addresses" iconSize="36px" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <div className="bg-light">
                                        <CoreIconCard iconType="PersonLinesFill" btnText="Check information" title="Personal Information" iconSize="36px" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <div className="bg-light">
                                        <CoreIconCard iconType="LockFill" btnText="Change password" title="Change password" iconSize="36px" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
                                    </div>
                                </div>
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