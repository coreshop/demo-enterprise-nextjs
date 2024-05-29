import React from 'react';
import {Header} from '../../Organisms/Header/Header';
import {HomeProps} from '../Home/types';
import {CoreBreadcrumb} from '../../Atoms/Breadcrumb/CoreBreadcrumb';
import {Footer} from '../../Organisms/Footer/Footer';
import {FooterPre} from '../../Organisms/FooterPre/FooterPre';
import {CoreLink} from '../../Atoms/Link/CoreLink';
import '../../assets/scss/cartprogress.scss';
import {CoreButton} from "../../Atoms/Button/CoreButton";
import {CoreButtontype} from "../../Atoms/Button/types";
import {LoginForm} from "../../Molecules/Form/Login/LoginForm";
import {GuestForm} from "../../Molecules/Form/Guest/GuestForm";

export const ChekoutLogin = ({
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
}: HomeProps) => {
    return (
       <div>
            <Header logo={logo} items={items} itemsTopbar={itemsTopbar} wishlist={wishlist} dropdownItems={dropdownItems} dropdownItemsLanguage={dropdownItemsLanguage}/>
           <main>
               <section className="container mt-3">
                   <CoreBreadcrumb breadcrumbItems={breadcrumbItems} icon={true}/>
               </section>
               <section className="container">
                   <div className="cartprogress">
                       <CoreLink text="cart" href="/cart" icon={false} cssClass="completed"/>
                       <CoreLink text="customer" href="/cart" icon={false} cssClass="active"/>
                       <CoreLink text="address" href="/cart" icon={false}/>
                       <CoreLink text="shipping" href="/cart" icon={false}/>
                       <CoreLink text="payment" href="/cart" icon={false}/>
                       <CoreLink text="summary" href="/cart" icon={false}/>
                   </div>
               </section>
               <section className="container">
                   <div className="row">
                       <div className="col-12 col-lg-6 mb-3">
                           <div className="bg-light p-4">
                               <div className="pb-3">
                                   <h3>Login</h3>
                                   <p className="gray-600">Log in with existing account</p>
                               </div>
                               <LoginForm bg={false}/>
                           </div>
                       </div>
                       <div className="col-12 col-lg-6 mb-3">
                           <div className="bg-light p-4">
                               <h3>Create new Account</h3>
                               <p className="gray-600">Continue Checkout with new account</p>
                               <div className="d-flex flex-column flex-sm-row justify-content-end">
                                   <CoreButton text="Register" icon={true} iconPost={true} iconType="BoxArrowInRight"
                                               variant={CoreButtontype.Primary} href="/link-to-register-page"/>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-12 mb-3">
                           <div className="bg-light p-4">
                               <div className="pb-3">
                                   <h3>Guest</h3>
                                   <p className="gray-600">Continue Checkout as a Guest</p>
                               </div>
                               <GuestForm bg={false}/>
                           </div>
                       </div>
                   </div>
               </section>

           </main>
           <Footer logo={logo} links1={links1} links2={links2} links3={links3}/>
           <FooterPre footerPreText={footerPreText} footerPreItems={footerPreItems}/>
       </div>
    )
}