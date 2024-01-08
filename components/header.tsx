import CategoriesWidget from "@/components/category/widget";
import Link from "next/link";
import {Suspense} from "react";
import Cart from "@/components/cart";
import Image from "next/image";

export default function Header() {
    return (
        <header id="header-area">
            <div className="header-top">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/en/shop">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/en/shop/register">
                                        Register
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/en/shop/login">
                                        Login
                                    </a>
                                </li>

                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/en/shop/wishlist">
                                        Wishlist
                                    </a>
                                </li>
                                <li className="nav_item">
                                </li><li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="currencyDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Currency
                                </a>
                                <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                                    {/*<a className="dropdown-item" href="/en/shop/switch-currency/EUR">*/}
                                    {/*    Euro (EUR)*/}
                                    {/*</a>*/}
                                </div>
                            </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="languageDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Language
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="languageDropdown">
                                        <a className="dropdown-item" href="/en">en</a>
                                        <a className="dropdown-item" href="/de">de</a>
                                        <a className="dropdown-item" href="/fr">fr</a>
                                    </div>
                                </li>
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
                                    <Image src="/images/logo-full.svg" title="CoreShop" alt="CoreShop" className="img-fluid" width="300" height="78" />
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-3 p-sm-2">
                            <Suspense fallback={<div />}>
                                <Cart />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-main-menu navbar-dark bg-red">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCategories" aria-controls="navbarCategories" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <CategoriesWidget />
                </div>
            </nav>
        </header>
    );
}