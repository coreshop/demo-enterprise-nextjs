import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import * as Icons from 'react-bootstrap-icons';
import { Header } from '../../Organisms/Header/Header';
import { ProductsProps } from './types';
import { Footer } from '../../Organisms/Footer/Footer';
import { FooterPre } from '../../Organisms/FooterPre/FooterPre';
import { CoreBreadcrumb } from '../../Atoms/Breadcrumb/CoreBreadcrumb';
import { CoreBadge } from '../../Atoms/Badge/CoreBadge';
import { CoreBadgetype } from '../../Atoms/Badge/types';
import { CoreCard } from '../../Molecules/Cards/CoreCard';
import { CorePagination } from '../../Molecules/Pagination/Pagination';
import {pimcoreImage} from "@/lib/pimcoreLoader";
import {AddToCart} from "@/components/product/add-to-cart";
import {PriceInfo} from "@/components/product/price";
import {mockCard} from "@/mockdata/mockCard";
import Currency from "@/components/common/currency";
import {PriceTag} from "@/stories/Atoms/PriceTag/PriceTag";


export const Products = ({
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
    paginationItems
}: ProductsProps) => {
    const [layout, setLayout] = useState<"layout1" | "layout2">("layout1"); // State for layout toggle

    const toggleLayout1 = () => {
        setLayout("layout1");
    };

    const toggleLayout2 = () => {
        setLayout("layout2");
    };

    return (
       <div>
            <Header logo={logo} items={items} itemsTopbar={itemsTopbar} wishlist={wishlist} dropdownItems={dropdownItems} dropdownItemsLanguage={dropdownItemsLanguage}/>
            <main>
                <section className="text-center mb-3 pb-0" style={{ background: '#cecece' }}><br /><br /><br />Herocarousel<br /><br /><br /></section>

                <section className="container mt-3">
                    <CoreBreadcrumb breadcrumbItems={breadcrumbItems} icon={true}/>
                </section>

                <section className="container">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <h3 className="mb-4">Filter</h3>
                            <div>
                                <div className="mb-3">
                                    <div className="text-14 mb-2">Active Filters:</div>
                                    <div className="d-flex flex-wrap gap-2">
                                        <CoreBadge description="Tag 1" variant={CoreBadgetype.Light} close={true}/>
                                        <CoreBadge description="Tag 2" variant={CoreBadgetype.Light} close={true}/>
                                        <CoreBadge description="Tag 3" variant={CoreBadgetype.Light} close={true}/>
                                        <CoreBadge description="Tag 4" variant={CoreBadgetype.Light} close={true}/>
                                        <CoreBadge description="Tag 1" variant={CoreBadgetype.Light} close={true}/>
                                        <CoreBadge description="Tag 2" variant={CoreBadgetype.Light} close={true}/>
                                        <CoreBadge description="Tag 3" variant={CoreBadgetype.Light} close={true}/>
                                        <CoreBadge description="Tag 4" variant={CoreBadgetype.Light} close={true}/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h5>Filter Category</h5>
                                    <div>
                                        <Form.Group className="mb-3" controlId="category_1">
                                            <Form.Check type="checkbox" label="Category 1" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="category_2">
                                            <Form.Check type="checkbox" label="Category 2" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="category_3">
                                            <Form.Check type="checkbox" label="Category 3" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="category_4">
                                            <Form.Check type="checkbox" label="Category 4" />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-8">
                            <h3 className="mb-4">Products</h3>
                            
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex gap-1">
                                    <Icons.GridFill color="var(--coreshop-primary)" onClick={toggleLayout1} style={{ cursor: 'pointer' }}/>
                                    <Icons.DistributeVertical color="var(--coreshop-primary)" onClick={toggleLayout2} style={{ cursor: 'pointer' }} />
                                </div>
                                <div>
                                    <Form.Group className="mb-3" controlId="formBasicSelect">
                                        <Form.Select size="sm" aria-label="Default select example">
                                            <option>Select sorting</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6 mb-3">
                                    <CoreCard
                                        layout={layout}
                                        imageSrc={"https://dummyimage.com/600x400/000/fff"}
                                        imageSrc2={"https://dummyimage.com/576x576/000/fff"}
                                        title={"Card Title"}
                                        description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}
                                        link= ""
                                        btnBottom={mockCard.btnBottom}
                                        priceTag= {mockCard.priceTag}

                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <CoreCard
                                        layout={layout}
                                        imageSrc={"https://dummyimage.com/600x400/000/fff"}
                                        imageSrc2={"https://dummyimage.com/576x576/000/fff"}
                                        title={"Card Title"}
                                        description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}
                                        link= ""
                                        btnBottom={mockCard.btnBottom}
                                        priceTag= {mockCard.priceTag}

                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <CoreCard
                                        layout={layout}
                                        imageSrc={"https://dummyimage.com/600x400/000/fff"}
                                        imageSrc2={"https://dummyimage.com/576x576/000/fff"}
                                        title={"Card Title"}
                                        description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}
                                        link= ""
                                        btnBottom={mockCard.btnBottom}
                                        priceTag= {mockCard.priceTag}

                                    />
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <CoreCard
                                        layout={layout}
                                        imageSrc={"https://dummyimage.com/600x400/000/fff"}
                                        imageSrc2={"https://dummyimage.com/576x576/000/fff"}
                                        title={"Card Title"}
                                        description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}
                                        link= ""
                                        btnBottom={mockCard.btnBottom}
                                        priceTag= {mockCard.priceTag}

                                    />
                                </div>
                            </div>

                            <CorePagination paginationItems={paginationItems} />
                        </div>
                    </div>
                </section>

            </main>
            <Footer logo={logo} links1={links1} links2={links2} links3={links3}/>
            <FooterPre footerPreText={footerPreText} footerPreItems={footerPreItems}/>
       </div>
    )
}