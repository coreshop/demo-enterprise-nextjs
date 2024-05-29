import React from 'react';
import {Header} from '../../Organisms/Header/Header';
import {HomeProps} from '../Home/types';
import {CoreBreadcrumb} from '../../Atoms/Breadcrumb/CoreBreadcrumb';
import {Footer} from '../../Organisms/Footer/Footer';
import {FooterPre} from '../../Organisms/FooterPre/FooterPre';
import {CoreLink} from '../../Atoms/Link/CoreLink';
import {CoreCard} from '../../Molecules/Cards/CoreCard';
import Table from 'react-bootstrap/Table';
import '../../assets/scss/cartprogress.scss';
import {CoreButton} from "../../Atoms/Button/CoreButton";
import {CoreButtontype} from "../../Atoms/Button/types";
import {PriceTag} from "../../Atoms/PriceTag/PriceTag";
import {CartSummaryForm} from "../../Molecules/Form/Cart/CartSummaryForm";

export const Cart = ({
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
                        <CoreLink text="cart" href="/cart" icon={false} cssClass="active"/>
                        <CoreLink text="customer" href="/cart" icon={false}/>
                        <CoreLink text="address" href="/cart" icon={false} />
                        <CoreLink text="shipping" href="/cart" icon={false} />
                        <CoreLink text="payment" href="/cart" icon={false} />
                        <CoreLink text="summary" href="/cart" icon={false} />
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
                                    <CoreCard layout="layout3" imageSrc={"https://dummyimage.com/600x400/000/fff"} imageSrc2={"https://dummyimage.com/576x576/000/fff"} title={"Card Title"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."} />
                                </td>
                                <td>1 Piece(s) </td>
                                <td>€123.45</td>
                                <td><PriceTag currency="€" offerPrice="150.50" price="123.45" vat={false} /></td>
                                <td className="text-end text-md-start">
                                    <div className="d-none d-md-inline-block">
                                        <CoreLink text="" href="" icon={true} iconType="Trash" cssClass="text-secondary"/>
                                    </div>
                                    <div className="d-inline-block d-md-none ">
                                        <CoreButton text="Delete" size="sm" icon={false} variant={CoreButtontype.Primary} href="" />
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
                                <td><PriceTag currency="€" offerPrice="83.99" price="43.73" vat={false}/></td>
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
                                <td><PriceTag currency="€" offerPrice="153.45" price="123.45" vat={false}/></td>
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
                    <div className="row mb-3">
                        <div className="d-flex col justify-content-end">
                            <CoreButton text="Reload Cart" variant={CoreButtontype.OutlineSecondary} icon={true}
                                        iconType="Repeat" iconPost={true}/>
                        </div>
                    </div>

                    <CartSummaryForm bg={false}/>
                </section>

            </main>
           <Footer logo={logo} links1={links1} links2={links2} links3={links3}/>
           <FooterPre footerPreText={footerPreText} footerPreItems={footerPreItems}/>
       </div>
    )
}