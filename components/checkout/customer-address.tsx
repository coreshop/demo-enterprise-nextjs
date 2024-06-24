'use client';

import StepComponent from "@/components/checkout/steps";
import {AddressFragment, OrderFragment} from "@/lib/graphql/types.generated";
import {Session} from "next-auth";
import React, {useState} from "react";
import {Collapse} from "react-bootstrap";
import CreateAddresses from "@/components/forms/CreateAddress";
import {AddressType} from '@/schema/CustomerRegistration';
import {CoreButton} from "@/stories/Atoms/Button/CoreButton";
import {CoreButtontype} from "@/stories/Atoms/Button/types";

export default function CheckoutCustomerAddress({cart, authSession, addresses}: {cart: OrderFragment; authSession: Session | null; addresses:AddressFragment[] | []}) {
    const [selectedAddress, setSelectedAddress] = useState<AddressFragment[]>([]);
    const [open, setOpen] = useState(false);
    const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedAddressString = event.target.value;
        const parsedAddress: AddressType = JSON.parse(selectedAddressString);
        const address: AddressType = {
            salutation: parsedAddress.salutation,
            firstname: parsedAddress.firstname,
            lastname: parsedAddress.lastname,
            company: parsedAddress.company,
            street: parsedAddress.street,
            number: parsedAddress.number,
            postcode: parsedAddress.postcode,
            city: parsedAddress.city,
            country: parsedAddress.country,
            phoneNumber: parsedAddress.phoneNumber,
            termsAccepted: parsedAddress.termsAccepted,
        };
       console.log('address set to cart');
    };

    return <section>

            <StepComponent currentStep={"address"} />

            {authSession?.user ? <div>
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3">
                            <select className="form-select" onChange={handleSelectChange}>
                                {addresses.map((item, index) => (
                                    <option key={item.id} value={JSON.stringify(item)}>
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
                                            <h3>Invoice Address </h3>
                                            <div className="py-3">
                                                <div>{cart?.invoiceAddress.salutation} {cart?.invoiceAddress.firstname} {cart?.invoiceAddress.lastname}</div>
                                                <div>{cart?.invoiceAddress.street} {cart?.invoiceAddress.number}</div>
                                                <div>{cart?.invoiceAddress.postcode} {cart?.invoiceAddress.city} {cart?.invoiceAddress?.country?.isoCode}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                : <div className="col-12 col-lg-6 mb-3">
                                    <div className="bg-light p-4 h-100">
                                        <h4>Invoice Address </h4>
                                        <div>

                                            <CoreButton text="Add new Adress" ariaExpanded={open} ariaControls="customer-add-address" variant={CoreButtontype.Primary} icon={true} iconPre={true} iconType="PlusCircle" onClick={() => setOpen(!open)}/>
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


                    </div>
                </div>
                :
                <div>asd</div>
            }
    </section>
}
