'use client';

import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrandItem, NavItem } from './types';
import Form from 'react-bootstrap/Form';
import { CoreButton } from '../../Atoms/Button/CoreButton';
import { CoreButtontype } from '../../Atoms/Button/types';
import './nav.scss';
import '../Dropdown/dropdown.scss';
import {Session} from "next-auth";


interface CoreNavbarProps {
    logo?: BrandItem;
    items?: NavItem[];
    searchBar: boolean;
    logoActive: boolean;
    cart?: boolean;
    navbar?: boolean;
    cartWidget?: React.ReactNode;
    authSession?: Session|null;
}

export const CoreNavbar = ({
    logo,
    items,
    searchBar,
    logoActive,
    cart,
    navbar,
    cartWidget,
    authSession
}:CoreNavbarProps) => {
    const renderNavItem = (item: NavItem) => {
        if (item.node?.children && item.node?.children.length > 0) {
            return (
                <NavDropdown title={item.node.title} id={item.node.title.toLowerCase().replace(/\s/g, '-')} key={`drop_${item.node?.id}`}>
                    {item.node.children.map((child, index) => (
                        <NavDropdown.Item key={`child_${child.id}`} href={child.link} active={child.current} >{child.title}</NavDropdown.Item>
                    ))}
                </NavDropdown>
            );
        } else {
            return (
                item.node && (item.node.parent.__typename !== 'object_Page' && item.node.parent.__typename !== 'object_TopBar') ? (
                    <Nav.Link href={item.node.link} key={`parent_${item.node.id}`} active={item.node.current}>
                        {item.node.title}
                    </Nav.Link>
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
                    <div className={`${!navbar && "ms-auto" }`}>
                        {authSession && authSession.user ? <div>{authSession.user.email}</div> : <div>Logged out</div>}
                        {cartWidget}
                    </div>
                }
                
            </div>
        </Navbar>
    )
}
