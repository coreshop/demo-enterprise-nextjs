'use client';

import React, {Suspense, useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrandItem, NavItem } from './types';
import Form from 'react-bootstrap/Form';
import { CoreButton } from '../../Atoms/Button/CoreButton';
import { CoreButtontype } from '../../Atoms/Button/types';
import './nav.scss';
import '../Dropdown/dropdown.scss';
import {Session} from "next-auth";
import * as Icons from 'react-bootstrap-icons';
import {CoreLink} from "@/stories/Atoms/Link/CoreLink";
import Loader from "@/components/loader";
import {MeInput} from "@/lib/graphql/types.generated";
import Link from "next/link";

interface CoreNavbarProps {
    logo?: BrandItem;
    items?: NavItem[];
    searchBar: boolean;
    logoActive: boolean;
    cart?: boolean;
    navbar?: boolean;
    cartWidget?: React.ReactNode;
    authSession?: Session|null;
    logout?: React.ReactNode;
    user?: MeInput | null
}

export const CoreNavbar = ({
    logo,
    items,
    searchBar,
    logoActive,
    cart,
    navbar,
    cartWidget,
    authSession,
    logout,
    user
}:CoreNavbarProps) => {
    const renderNavItem = (item: NavItem) => {
        if (item.node?.children && item.node?.children.length > 0) {
            return (
                <NavDropdown title={item.node.title} id={item.node.title.toLowerCase().replace(/\s/g, '-')} key={`drop_${item.node?.id}`}>
                    {item.node.children.map((child, index) => (
                        <Link key={`child_${child.id}`} href={child.link} passHref legacyBehavior>
                            <NavDropdown.Item active={child.current} >{child.title}</NavDropdown.Item>
                        </Link>
                    ))}
                </NavDropdown>
            );
        } else {
            return (
                item.node && (item.node.parent.__typename !== 'object_Page' && item.node.parent.__typename !== 'object_TopBar') ? (
                    <Link key={`parent_${item.node.id}`} href={item.node.link} passHref legacyBehavior>
                        <Nav.Link  active={item.node.current}>
                            {item.node.title}
                        </Nav.Link>
                    </Link>
                ) : null
            );
        }
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: { currentTarget: any; preventDefault: () => void; stopPropagation: () => void; }) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Navbar expand="lg" className={`${ !logoActive && "without-logo"}`}>
            <div className="container-lg">
                { logoActive &&
                    <Navbar.Brand href={ logo && logo.link }>
                        <img
                        src={logo && logo.imgsrc.src}
                        width="160"
                        height="40"
                        className="d-inline-block align-top"
                        alt="Coreshop logo"
                        />
                    </Navbar.Brand>
                }
                <div className="coreshop-main-nav">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><div><span className="navbar-toggler-icon"></span><span>Menu</span></div></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        { items && navbar && 
                            <Nav className={`me-auto justify-content-between ${!logoActive && 'flex-grow-1'}`}>
                                {items.map((item, index) => (
                                    renderNavItem(item)
                                ))}
                            </Nav>
                        }

                    </Navbar.Collapse>
                </div>
                { searchBar && logoActive && 
                    <div className={`coreshop-main-nav-search ${!navbar && !cart ? "ms-auto" : !navbar && "mx-auto" }`}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="d-flex">
                                <Form.Group className="me-3" controlId="formBasicSearch">
                                    <Form.Control type="search" placeholder="Search"  />
                                </Form.Group>
                                <CoreButton type="submit" text="Submit" variant={CoreButtontype.Primary} icon={true} iconPost={true} iconType='Search'/>
                            </div>
                        </Form>
                    </div>
                }
                { cart && logoActive && 
                    <div className={`${!navbar && "d-flex align-items-center ms-auto" }`}>

                        {authSession && authSession.user && user ?
                            <div>
                                <Suspense fallback={<Loader/>}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" id="dropdown-basic">
                                            <Icons.Person />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <div className="px-3 mb-3 text-nowrap">Hi, {user?.firstname} {user?.lastname}</div>
                                            <Link href="/profile" passHref legacyBehavior>
                                                <Dropdown.Item>Profile</Dropdown.Item>
                                            </Link>
                                            <Link href="/profile/orders" passHref legacyBehavior>
                                                <Dropdown.Item className="ms-2">Order history</Dropdown.Item>
                                            </Link>
                                            <Link href="/profile/addresses" passHref legacyBehavior>
                                                <Dropdown.Item href="/profile/addresses" className="ms-2">Addresses</Dropdown.Item>
                                            </Link>
                                            <Link href="/profile/personal" passHref legacyBehavior>
                                                <Dropdown.Item className="ms-2">Personal information</Dropdown.Item>
                                            </Link>
                                            <Link href="/profile/password" passHref legacyBehavior>
                                                <Dropdown.Item className="ms-2">Change password</Dropdown.Item>
                                            </Link>
                                            <div className="px-3 mt-3">{logout}</div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Suspense>
                            </div> :
                            <CoreLink text="Log in" href="/login" icon={false} />
                        }
                        {cartWidget}

                    </div>
                }
                
            </div>
        </Navbar>
    )
}