import React, {Suspense} from "react";
import Cart from "@/components/cart";
import {auth} from "@/auth";
import Loader from "@/components/loader";
import {Topbar} from "@/stories/Molecules/Topbar/Topbar";
import {CoreLinkProps} from "@/stories/Atoms/Link/types";
import {DropdownItem} from "@/stories/Molecules/Dropdown/types";
import {CoreNavbar} from "@/stories/Molecules/Navbar/CoreNavbar";
import {mockNavItems} from "@/mockdata/mockNavItems";
import "@/stories/Organisms/Header/header.scss";
import {CoreBreadcrumb} from "@/stories/Atoms/Breadcrumb/CoreBreadcrumb";
import {BreadcrumbItem} from "@/stories/Atoms/Breadcrumb/types";
import {Logout} from "@/components/security/logout";
import {getCoreshopMe} from "@/lib";

export default async function Header() {
    const session = await auth()
    const itemsTopbar = [
        {
            node: {
                parent: {
                    __typename: ''
                },
                id:"1",
                title: "Page 1",
                link: "/",
                children: [],
                current: false
            }
        },
    ]
    const user = await getCoreshopMe();
    const items = mockNavItems;
    const wishlist:CoreLinkProps = {text:"Wishlist", href:"/", iconType:"Heart" ,icon: true};
    const dropdownItems: DropdownItem[] = [
        { description: "(EUR)", link: "/", icon:"CurrencyEuro" ,flagCode:"" },
        { description: "(USD)", link: "/link-3",icon:"CurrencyDollar",flagCode:"" }
    ];
    const dropdownItemsLanguage: DropdownItem[] = [
        { description: "Austria", link: "/de", icon:"", flagCode:"AT" },
        { description: "USA", link: "/en",icon:"", flagCode:"US" }
    ];
    const  logo = {
        imgsrc: {
            src: '/images/logo-full.svg',
            height: 40,
            width: 160,
            blurDataURL: ''
        },
        link: '/'
    };
    const selectedOption = 1;
    const   breadcrumbItems: BreadcrumbItem[] = [
            { title: "Home", link: "/" },
            { title: "Shop", link: "/shop"},
            { title: "Cart", link: ""},
        ];
    return (

        <header id="header-area">
            <Topbar items={itemsTopbar} wishlist={wishlist} dropdownItems={dropdownItems}
                    dropdownItemsLanguage={dropdownItemsLanguage} selectedOption={selectedOption}/>
            <div className="coreshop-main-nav-wrapper">
                <CoreNavbar logo={logo} logoActive={true}
                            cart={true} navbar={false} cartWidget={<Suspense fallback={<Loader/>}><Cart/></Suspense>} authSession={session} logout={<Logout />} searchBar={false} user={user}/>
            </div>
            <div className="coreshop-basic-nav-wrapper">
                <CoreNavbar items={items} searchBar={false} logoActive={false}
                                                                    navbar={true}/>
            </div>
            <div className="mt-3">
                <CoreBreadcrumb breadcrumbItems={breadcrumbItems} icon={true}/>
            </div>


            {/*<div className="header-top bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" href={'/'}>
                                        Home
                                    </Link>
                                </li>
                                {!session?.user &&
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" href={'/register'}>
                                                Register
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href={'/login'}>
                                                Login
                                            </Link>
                                        </li>
                                    </>
                                }
                                {session && session.user &&
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" href={'/account'}>
                                                Account
                                            </Link>
                                        </li>
                                    </>
                                }
                            </ul>
                            <ul className="navbar-nav">
                                {session && session.user &&
                                    <Logout />
                                }
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

            <div className="main-header">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 p-sm-2">
                            SEARCH
                        </div>

                        <div className="col-md-6">
                            <div id="logo">
                                <Link href="/">
                                    <Image src="/images/logo-full.svg" title="CoreShop" alt="CoreShop"
                                           className="img-fluid" width="300" height="78"/>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-3 p-sm-2">
                            <Suspense fallback={<Loader/>}>
                                <Cart/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-main-menu navbar-dark bg-red">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCategories" aria-controls="navbarCategories" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <CategoriesWidget/>
                </div>
            </nav>*/}
        </header>
    );
}