import React from 'react';
import {Header} from '../../Organisms/Header/Header';
import {HomeProps} from '../Home/types';
import {CoreBreadcrumb} from '../../Atoms/Breadcrumb/CoreBreadcrumb';
import {CoreFooter} from '../../Organisms/Footer/Footer';
import {FooterPre} from '../../Organisms/FooterPre/FooterPre';
import {CoreLink} from '../../Atoms/Link/CoreLink';
import '../../assets/scss/cartprogress.scss';
import Table from "react-bootstrap/Table";
import {CoreButton} from "../../Atoms/Button/CoreButton";
import {CoreButtontype} from "../../Atoms/Button/types";
import {CoreCard} from "../../Molecules/Cards/CoreCard";
import {PriceTag} from "../../Atoms/PriceTag/PriceTag";
import {CartSummaryForm} from "../../Molecules/Form/Cart/CartSummaryForm";

export const CheckoutSummary = ({
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
                        <CoreLink text="payment" href="/cart" icon={false} cssClass="completed"/>
                        <CoreLink text="summary" href="/cart" icon={false} cssClass="active"/>
                    </div>
                </section>
                <section className="container">
                    <div className="pb-3">
                        <h3>Summary</h3>

                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3">
                            <div className="bg-light p-4 h-100">
                                <div>
                                    <h3>Invoice Address</h3>
                                    <div className="pt-3">
                                        <div>Mr. John Doe</div>
                                        <div>Sesame Street 23/2</div>
                                        <div>12345 Hogwarts</div>
                                        <div>Great Britain</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mb-3">
                            <div className="bg-light p-4 h-100">
                                <div className="pb-3">
                                    <h3>Shipping Address</h3>
                                    <div className="pt-3">
                                        <div>Mr. Mark Doe</div>
                                        <div>Company Street 23/2</div>
                                        <div>12345 Hogwarts</div>
                                        <div>Great Britain</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="container">
                    <Table>
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <CoreCard layout="layout3" imageSrc={"https://dummyimage.com/600x400/000/fff"}
                                          imageSrc2={"https://dummyimage.com/576x576/000/fff"} title={"Card Title"}
                                          description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}/>
                            </td>
                            <td>1 Piece(s)</td>
                            <td>€123.45</td>
                            <td><PriceTag  offerPrice="150.50" price="123.45" vat={false}/></td>
                            <td className="text-end text-md-start">
                                <div className="d-none d-md-inline-block">
                                    <CoreLink text="" href="" icon={true} iconType="Trash" cssClass="text-secondary"/>
                                </div>
                                <div className="d-inline-block d-md-none ">
                                    <CoreButton text="Delete" size="sm" icon={false} variant={CoreButtontype.Primary}
                                                href=""/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CoreCard layout="layout3" imageSrc={"https://dummyimage.com/600x400/000/fff"}
                                          imageSrc2={"https://dummyimage.com/576x576/000/fff"} title={"Card Title"}
                                          description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}/>
                            </td>
                            <td>2 Piece(s)</td>
                            <td>€43.73</td>
                            <td><PriceTag  offerPrice="83.99" price="43.73" vat={false}/></td>
                            <td className="text-end text-md-start">
                                <div className="d-none d-md-inline-block">
                                    <CoreLink text="" href="" icon={true} iconType="Trash"
                                              cssClass="text-secondary"/>
                                </div>
                                <div className="d-inline-block d-md-none ">
                                    <CoreButton text="Delete" size="sm" icon={false}
                                                variant={CoreButtontype.Primary}
                                                href=""/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CoreCard layout="layout3" imageSrc={"https://dummyimage.com/600x400/000/fff"}
                                          imageSrc2={"https://dummyimage.com/576x576/000/fff"} title={"Card Title"}
                                          description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}/>
                            </td>
                            <td>1 Piece(s)</td>
                            <td>€123.45</td>
                            <td><PriceTag  offerPrice="153.45" price="123.45" vat={false}/></td>
                            <td className="text-end text-md-start">
                                <div className="d-none d-md-inline-block">
                                    <CoreLink text="" href="" icon={true} iconType="Trash"
                                              cssClass="text-secondary"/>
                                </div>
                                <div className="d-inline-block d-md-none ">
                                    <CoreButton text="Delete" size="sm" icon={false}
                                                variant={CoreButtontype.Primary}
                                                href=""/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </section>
                <section className="container">
                    <CartSummaryForm bg={false}/>
                </section>

            </main>
            <CoreFooter logo={logo} links1={links1} links2={links2} links3={links3}/>
            <FooterPre footerPreText={footerPreText} footerPreItems={footerPreItems}/>
        </div>
    )
}