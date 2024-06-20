'use client';

import StepComponent from "@/components/checkout/steps";
import {AddressFragment, OrderFragment} from "@/lib/graphql/types.generated";
import {Session} from "next-auth";
import React, {useState} from "react";
import ChooseAddresses from "@/components/forms/ChooseAddresses";

export default async function CheckoutCustomerAddress({cart, authSession, addresses}: {cart: OrderFragment; authSession: Session | null; addresses:AddressFragment[] | []}) {
    const [selectedAddress, setSelectedAddress] = useState<number>(0);
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAddress(Number(event.target.value));
    };
    return <section>

            <StepComponent currentStep={"address"} />

            {authSession?.user ? <div>
                    <div className="row">
                        <div className="col-12 col-lg-8 mb-3">
                            <select className="form-select" onChange={handleSelectChange}>
                                {addresses.map((item, index) => (
                                    <option key={item.firstname} value={index}>
                                        {item.street} {item.number} {item.postcode}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="row">
                            {cart?.invoiceAddress ?
                                <div className="col-12 col-lg-6 mb-3">
                                    <div className="bg-light p-4 h-100">
                                        <div>
                                            <h3>Invoice Address {cart?.invoiceAddress.id}</h3>
                                            <div className="py-3">
                                                <div>{cart?.invoiceAddress.salutation} {cart?.invoiceAddress.firstname} {cart?.invoiceAddress.lastname}</div>
                                                <div>{cart?.invoiceAddress.street} {cart?.invoiceAddress.number}</div>
                                                <div>{cart?.invoiceAddress.postcode} {cart?.invoiceAddress.city} {cart?.invoiceAddress?.country?.isoCode}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                : <div>No Invoice address set in the cart</div>
                            }
                            {cart?.shippingAddress ?
                                <div className="col-12 col-lg-6 mb-3">
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
                                :
                                <div> No Shippping Address set in the cart</div>
                            }
                        </div>
                        {/* we need new handler for that (create new adressess for shipping / invoice that update the cart addressess and the connected addresses of the customer who logged in.)*/}
                        <ChooseAddresses cart={cart} addresses={addresses} selectedInvoice={selectedAddress}/>

                    </div>
                </div>
                :
                <div>asd</div>
            }
    </section>
}
