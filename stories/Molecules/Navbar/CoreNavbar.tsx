import React,{ useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrandItem, NavItem, SubNavItem } from './types';
import Form from 'react-bootstrap/Form';
import { CoreButton } from '../../Atoms/Button/CoreButton';
import { CoreButtontype } from '../../Atoms/Button/types';
import Dropdown from 'react-bootstrap/Dropdown';
import * as Icons from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import './nav.scss';
import '../Dropdown/dropdown.scss';


interface CoreNavbarProps {
    logo?: BrandItem;
    items?: NavItem[];
    searchBar: boolean;
    logoActive: boolean;
    cart?: boolean;
    navbar?: boolean;
}

export const CoreNavbar = ({
    logo,
    items,
    searchBar,
    logoActive,
    cart,
    navbar
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
                        src={logo && logo.imgsrc}
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
                            <Dropdown>
                            <Dropdown.Toggle variant="normal">
                                <span className="cart-number">2</span>
                                <Icons.Cart className="me-2"/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="pt-1 px-3">
                                    <div className='mb-2'>
                                        <ListGroup as="ul">
                                            <ListGroup.Item as="li">
                                                <div>Product name</div>
                                                <div>x2 - €300.00</div>
                                                <div className="cart-close-item">
                                                    <CoreButton variant={CoreButtontype.Link} buttonType="a" text="" href="/cart" icon={true} iconPre={true} iconType="X"/>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                <div>Product name</div>
                                                <div>x1 - €180.00</div>
                                                <div className="cart-close-item">
                                                    <CoreButton variant={CoreButtontype.Link} buttonType="a" text="" href="/cart" icon={true} iconPre={true} iconType="X"/>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        <hr />
                                    </div>
                                    <div className="mb-3">
                                        Total: €480.20
                                    </div>
                                    <div className="d-flex gap-2">
                                        <CoreButton variant={CoreButtontype.Secondary} buttonType="a" text="Cart" href="/cart" icon={false} />
                                        <CoreButton variant={CoreButtontype.Primary} buttonType="a" text="Checkout" href="/checkout" icon={false} />
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                }
                
            </div>
        </Navbar>
    )
}
