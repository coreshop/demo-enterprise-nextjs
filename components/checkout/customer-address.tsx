'use client';

import StepComponent from "@/components/checkout/steps";
import {AddressFragment, OrderFragment} from "@/lib/graphql/types.generated";
import {Session} from "next-auth";
import React, {useState} from "react";
import {Collapse, Form} from "react-bootstrap";
import CreateAddresses from "@/components/forms/CreateAddress";
import {AddressType} from '@/schema/CustomerRegistration';
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";
import {setCustomerCartAddress} from "@/components/actions";

export default function CheckoutCustomerAddress({cart, authSession, addresses, selectedInvoiceAddressId = '', selectedShippingAddressId =''}: {cart: OrderFragment; authSession: Session | null; addresses:AddressFragment[] | [], selectedInvoiceAddressId: string, selectedShippingAddressId: string }) {
    const [open, setOpen] = useState(false);
    const [invoiceAddressIsShippingAddress, setInvoiceAddressIsShippingAddress] = useState(cart?.invoiceAddress?.id === cart?.shippingAddress?.id );

    const handleInvoiceAddressChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedAddressString = event.target.value;

        const shippingAddress = invoiceAddressIsShippingAddress ? Number(selectedAddressString) : Number(selectedShippingAddressId);

        const address = {
            invoiceAddressId: Number(selectedAddressString),
            shippingAddressId: shippingAddress,
            order: { token: '' },
            invoiceAddressIsShippingAddress: invoiceAddressIsShippingAddress
        };
        await setCustomerCartAddress(null, address);
    };

    const handleShippingAddressChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedAddressString = event.target.value;

        const address = {
            invoiceAddressId: Number(cart?.invoiceAddress?.id),
            shippingAddressId: Number(selectedAddressString),
            order: { token: '' },
            invoiceAddressIsShippingAddress: invoiceAddressIsShippingAddress
        }
        await setCustomerCartAddress(null, address);

    };

    const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setInvoiceAddressIsShippingAddress(isChecked);

        if (isChecked && cart?.invoiceAddress?.id !== cart?.shippingAddress?.id) {
            const address = {
                invoiceAddressId: Number(selectedInvoiceAddressId),
                shippingAddressId: Number(selectedInvoiceAddressId),
                order: { token: '' },
                invoiceAddressIsShippingAddress: true
            };
            await setCustomerCartAddress(null, address);
        }
    };



    return <section>

            <StepComponent currentStep={"address"} />

            {authSession?.user ? <div>
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3">
                            <select className="form-select" onChange={handleInvoiceAddressChange}
                                    defaultValue={selectedInvoiceAddressId}>
                                <option key={"default-choose"}>Please choose</option>
                                {addresses.map((item) => (
                                    <option key={item.id} value={item.id ?? ''}>
                                        {item.street} {item.number} {item.postcode}
                                    </option>
                                ))}
                            </select>
                            <Form.Group className="my-3" controlId="invoiceAddressSame">
                                <Form.Check type="checkbox">
                                    <Form.Check.Input
                                        type="checkbox"
                                        checked={invoiceAddressIsShippingAddress}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check.Label>
                                        Invoice Address is Shipping Address
                                    </Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                        </div>
                        {!invoiceAddressIsShippingAddress &&
                            <div className="col-12 col-lg-6 mb-3">
                                <select className="form-select" onChange={handleShippingAddressChange}
                                        defaultValue={selectedShippingAddressId}>
                                    {addresses.map((item) => (
                                        <option key={item.id} value={item.id ?? ''}>
                                            {item.street} {item.number} {item.postcode}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        }
                    </div>
                    <div className="row">
                        {cart?.invoiceAddress ?
                            <div className="col-12 col-lg-6 mb-3">
                                <div className="bg-light p-4 h-100">
                                    <div>
                                        <h3>Invoice Address </h3>
                                        <div className="py-3">
                                            <div>{cart?.invoiceAddress.salutation} {cart?.invoiceAddress.firstname} {cart?.invoiceAddress.lastname}</div>
                                            <div>{cart?.invoiceAddress.street} {cart?.invoiceAddress.number}</div>
                                            <div>{cart?.invoiceAddress.postcode} {cart?.invoiceAddress.city} {cart?.invoiceAddress?.country?.isoCode}</div>
                                        </div>
                                        <div>
                                            <CoreButton text="Add new Adress" ariaExpanded={open}
                                                        ariaControls="customer-add-address"
                                                        variant={CoreButtontype.Primary}
                                                        icon={true} iconPre={true} iconType="PlusCircle"
                                                        onClick={() => setOpen(!open)}/>
                                            <Collapse in={open}>
                                                <div id="customer-add-address">
                                                    {/* create new address */}
                                                    <CreateAddresses cart={cart}/>
                                                </div>
                                            </Collapse>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            : <div className="col-12 col-lg-6 mb-3">
                                <div className="bg-light p-4 h-100">
                                    <h4>Invoice Address </h4>
                                    <div>

                                        <CoreButton text="Add new Adress" ariaExpanded={open}
                                                    ariaControls="customer-add-address" variant={CoreButtontype.Primary}
                                                    icon={true} iconPre={true} iconType="PlusCircle"
                                                    onClick={() => setOpen(!open)}/>
                                        <Collapse in={open}>
                                            <div id="customer-add-address">
                                                {/* create new address */}
                                                <CreateAddresses cart={cart}/>
                                            </div>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        }
                        {cart?.shippingAddress ? <div className="col-12 col-lg-6 mb-3">
                                <div className="bg-light p-4 h-100">
                                    <div className="pb-3">
                                        <h3>Shipping Address</h3>
                                        <div className="py-3">
                                            <div>{cart?.shippingAddress.salutation} {cart?.shippingAddress.firstname} {cart?.shippingAddress.lastname}</div>
                                            <div>{cart?.shippingAddress.street} {cart?.shippingAddress.number}</div>
                                            <div>{cart?.shippingAddress.postcode} {cart?.shippingAddress.city} {cart?.shippingAddress.country?.isoCode}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : <div className="col-12 col-lg-6 mb-3">
                                <div className="bg-light p-4 h-100">
                                    <div> No Shippping Address set in the cart</div>
                                </div>
                            </div>
                        }
                    </div>


                    <div className="d-flex flex-column flex-sm-row justify-content-between pt-3 gap-2">
                        <CoreButton buttonType="a" href="/checkout/customer" text="Go back" icon={true} iconPre={true}
                                    iconType="ChevronLeft"
                                    variant={CoreButtontype.Secondary}/>
                        <CoreButton buttonType="a" href="/checkout/shipping" text="Proceed" icon={true} iconPost={true} iconType="ChevronRight"
                                    variant={CoreButtontype.Primary}/>
                    </div>
                </div>
                :
                <div></div>
            }
    </section>
}
