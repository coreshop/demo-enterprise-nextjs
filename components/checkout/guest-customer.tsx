'use client';

import StepComponent from "@/components/checkout/steps";
import {useFormState} from "react-dom";
import {registerGuestCustomer} from "@/components/cart/actions";
import {useRef} from "react";
import {OrderFragment} from "@/lib/graphql/types.generated";

export default function CheckoutGuestCustomer({cart}: {cart: OrderFragment}) {
    const initialState = {

    }
    const [state, formAction] = useFormState(registerGuestCustomer, initialState);
    const ref = useRef<HTMLFormElement>(null)

    return <div>
        <StepComponent currentStep={"customer"} />
        <h2 className="main-heading text-center mt-4">
            Guest Customer Registration
        </h2>
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <form action={formAction}>
                            <div className="form-group">
                                <label className="required" htmlFor="salutation">Salutation</label>
                                <select className="form-control" id="salutation" name="salutation">
                                    <option value="mrs">Mrs.</option>
                                    <option value="mr">Mr.</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="required" htmlFor="guest_gender">Gender</label>
                                <select name="gender" className="form-control">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname" className="required">First Name</label>
                                <input type="text" id="firstname" name="firstname" required={true} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname" className="required">Last Name</label>
                                <input type="text" id="lastname" name="lastname" required={true} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="required">Email Address</label>
                                <input type="email" id="email" name="email" required={true} className="form-control"/>
                            </div>

                            <legend className="cs-address col-form-label required">Address Information</legend>

                            <div className="form-group">
                                <label htmlFor="address_company">Company</label>
                                <input type="text" id="address_company" name="address_company" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="required" htmlFor="address_salutation">Salutation</label>
                                <select className="form-control" id="address_salutation" name="address_salutation">
                                    <option value="mrs">Mrs.</option>
                                    <option value="mr">Mr.</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address_firstname" className="required">First Name</label>
                                <input type="text" id="address_firstname" name="address_firstname" required={true} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address_lastname" className="required">Last Name</label>
                                <input type="text" id="address_lastname" name="address_lastname" required={true} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address_street" className="required">Street</label>
                                <input type="text" id="address_street" name="address_street" required={true} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address_number" className="required">Number</label>
                                <input type="text" id="address_number" name="address_number" required={true} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address_postcode" className="required">ZIP</label>
                                <input type="text" id="address_postcode" name="address_postcode" required={true} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address_city" className="required">City</label>
                                <input type="text" id="address_city" name="address_city" required={true} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="required" htmlFor="address_country">Country</label>
                                <select id="address_country" name="address_country" className="form-control">
                                    <option value="11">Austria</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address_phoneNumber">Phone Number</label>
                                <input type="text" id="address_phoneNumber" name="address_phoneNumber" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input type="checkbox" id="termsAccepted" required={true} className="form-check-input" value="1"/>
                                    <label className="form-check-label required" htmlFor="termsAccepted">I have
                                        read and agree to the terms and conditions</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn-primary btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
