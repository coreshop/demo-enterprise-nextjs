import React from 'react';
import {Header} from '../../Organisms/Header/Header';
import {HomeProps} from '../Home/types';
import {CoreBreadcrumb} from '../../Atoms/Breadcrumb/CoreBreadcrumb';
import {Footer} from '../../Organisms/Footer/Footer';
import {FooterPre} from '../../Organisms/FooterPre/FooterPre';
import {CoreLink} from '../../Atoms/Link/CoreLink';
import '../../assets/scss/cartprogress.scss';
import {PaymentForm} from "../../Molecules/Form/Payment/PaymentForm";

export const CheckoutPayment = ({
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
                        <CoreLink text="customer" href="/cart" icon={false} cssClass="completed"/>
                        <CoreLink text="address" href="/cart" icon={false} cssClass="completed"/>
                        <CoreLink text="shipping" href="/cart" icon={false} cssClass="completed"/>
                        <CoreLink text="payment" href="/cart" icon={false} cssClass="active"/>
                        <CoreLink text="summary" href="/cart" icon={false}/>
                    </div>
                </section>
                <section className="container">
                    <div className="pb-3">
                        <h3>Payment</h3>
                        <p className="gray-600">Choose your payment provider</p>
                    </div>

                    <PaymentForm bg={false}/>

                </section>

            </main>
            <Footer logo={logo} links1={links1} links2={links2} links3={links3}/>
            <FooterPre footerPreText={footerPreText} footerPreItems={footerPreItems}/>
        </div>
    )
}