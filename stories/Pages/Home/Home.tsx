import React from 'react';
import { Header } from '../../Organisms/Header/Header';
import { HomeProps } from './types';
import { Footer } from '../../Organisms/Footer/Footer';
import { FooterPre } from '../../Organisms/FooterPre/FooterPre';
import {CoreBreadcrumb} from "../../Atoms/Breadcrumb/CoreBreadcrumb";

export const Home = ({
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
               <br/><br/><br/><br/>MAIN AREA BODY<br/><br/><br/><br/><br/>
           </main>
           <Footer logo={logo} links1={links1} links2={links2} links3={links3}/>
           <FooterPre footerPreText={footerPreText} footerPreItems={footerPreItems}/>
       </div>
    )
}