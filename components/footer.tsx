import React from "react";
import { CoreFooter } from "@/stories/Organisms/Footer/Footer";
import {FooterPre} from "@/stories/Organisms/FooterPre/FooterPre";
import {mockNavItems} from "@/mockdata/mockNavItems";

export default function Footer() {
    const logo = {
        imgsrc: {
            src: '/images/logo-full.svg',
            height: 40,
            width: 160,
            blurDataURL: ''
        },
        link: '/'
    };

    const links1 = [
            {text:"Item", href:"/"},
            {text:"Item", href:"/"},
            {text:"Item", href:"/"},
            {text:"Item", href:"/"},
        ];

    const links2 = [
            {text:"Item", href:"/"},
            {text:"Item", href:"/"},
            {text:"Item", href:"/"},
            {text:"Item", href:"/"},
        ];

    const links3 = [
            {text:"Item", href:"/"},
            {text:"Item", href:"/"},
            {text:"Item", href:"/"},
            {text:"Item", href:"/"},
        ];

    const footerPreItems = mockNavItems;
    const footerPreText = {
        text:"© CoreShop GmbH (GPLv3 and CoreShop Commercial License)",
        href:"https://www.coreshop.org"
    };

    return (
        <footer>
            <CoreFooter logo={logo} links1={links1} links2={links2} links3={links3}/>
            <FooterPre footerPreText={footerPreText} footerPreItems={footerPreItems}/>
        </footer>
    );
}