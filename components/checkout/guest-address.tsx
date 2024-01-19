'use client';

import StepComponent from "@/components/checkout/steps";
import {useFormState} from "react-dom";
import {registerGuestCartAddress} from "@/components/cart/actions";
import {OrderFragment} from "@/lib/graphql/types.generated";

export default function CheckoutGuestAddress({cart}: {cart: OrderFragment}) {
    const initialState = {

    }
    const [state, formAction] = useFormState(registerGuestCartAddress, initialState);

    return <div>
        <StepComponent currentStep={"address"} />
        <form action={formAction}>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="invoice-address-selector">
                        <h1 className="h4">Invoice Address</h1>
                        <div className="card mb-2">
                            <div className="card-body">
                                <div className="form-floating mb-1 form-group">
                                    <label className="required" htmlFor="invoiceAddress_salutation">Salutation</label>
                                    <select id="invoiceAddress_salutation" name="invoiceAddress_salutation" className="form-control" defaultValue={cart.invoiceAddress?.salutation ?? ''}>
                                        <option defaultValue="mrs">Mrs.</option>
                                        <option defaultValue="mr">Mr.</option>
                                    </select>
                                </div>
                                <div className="form-floating mb-1 form-group">
                                    <label htmlFor="invoiceAddress_firstname" className="required">First Name</label>
                                    <input type="text" id="invoiceAddress_firstname" name="invoiceAddress_firstname" required={true} className="form-control" placeholder="First Name" defaultValue={cart.invoiceAddress?.firstname ?? ''} />
                                    </div>
                                <div className="form-floating mb-1 form-group">
                                    <label htmlFor="invoiceAddress_lastname" className="required">Last Name</label>
                                    <input type="text" id="invoiceAddress_lastname" name="invoiceAddress_lastname" required={true} className="form-control" placeholder="Last Name" defaultValue={cart.invoiceAddress?.lastname ?? ''}/>
                                </div>
                                <div className="form-floating mb-1 form-group">
                                    <label htmlFor="invoiceAddress_company">Company</label>
                                    <input type="text" id="invoiceAddress_company" name="invoiceAddress_company" className="form-control" placeholder="Company"  defaultValue={cart.invoiceAddress?.company ?? ''}/>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="form-floating mb-1 form-group">
                                            <label htmlFor="invoiceAddress_street" className="required">Street</label>
                                            <input type="text" id="invoiceAddress_street" name="invoiceAddress_street" required={true} className="form-control" placeholder="Street" defaultValue={cart.invoiceAddress?.street ?? ''}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="form-floating mb-1 form-group">
                                            <label htmlFor="invoiceAddress_number" className="required">Number</label>
                                            <input type="text" id="invoiceAddress_number" name="invoiceAddress_number" required={true} className="form-control" placeholder="Number" defaultValue={cart.invoiceAddress?.number ?? ''}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-3">
                                        <div className="form-floating mb-1 form-group">
                                            <label htmlFor="invoiceAddress_postcode" className="required">ZIP</label>
                                            <input type="text" id="invoiceAddress_postcode" name="invoiceAddress_postcode" required={true} className="form-control" placeholder="ZIP" defaultValue={cart.invoiceAddress?.postcode ?? ''}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-9">
                                        <div className="form-floating mb-1 form-group">
                                            <label htmlFor="invoiceAddress_city" className="required">City</label>
                                            <input type="text" id="invoiceAddress_city" name="invoiceAddress_city" required={true} className="form-control" placeholder="City" defaultValue={cart.invoiceAddress?.city ?? ''}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-floating mb-1 form-group">
                                    <label className="required" htmlFor="invoiceAddress_country">Country</label>
                                    <select id="invoiceAddress_country" name="invoiceAddress_country" className="form-control" defaultValue={ cart.invoiceAddress?.country?.isoCode ?? ''}>
                                        <option defaultValue="11">Austria</option>
                                    </select>
                                </div>
                                <div className="form-floating mb-1 form-group">
                                    <label htmlFor="invoiceAddress_phoneNumber">Phone Number</label>
                                    <input type="text" id="invoiceAddress_phoneNumber" name="invoiceAddress_phoneNumber" className="form-control" placeholder="Phone Number" defaultValue={cart.invoiceAddress?.phoneNumber ?? ''} />
                                </div>

                                {/*<div className="form-floating form-group">
                                    <div className="form-check">
                                        <input type="checkbox" id="useInvoiceAsShipping" name="coreshop[useInvoiceAsShipping]" required={true} className="form-check-input" defaultValue="1" checked="checked" />
                                        <label className="form-check-label required" htmlFor="useInvoiceAsShipping">Invoice Address is Shipping Address</label>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="col-12 col-lg-6">
                    <div className="shipping-address-selector" style="display:none">
                        <h1 className="h4">Shipping Address</h1>
                        <div className="card">
                            <div className="card-body">

                                <div className="form-floating mb-1 form-group"><label className="required" htmlFor="shippingAddress_salutation">Salutation</label><select id="shippingAddress_salutation" name="coreshop[shippingAddress][salutation]" className="form-control" placeholder="Salutation"><option defaultValue="mrs">Mrs.</option><option defaultValue="mr" selected="selected">Mr.</option></select></div>
                                <div className="form-floating mb-1 form-group"><label htmlFor="shippingAddress_firstname" className="required">First Name</label><input type="text" id="shippingAddress_firstname" name="coreshop[shippingAddress][firstname]" required={true} className="form-control" placeholder="First Name" defaultValue="Hiroko"></div>
                                <div className="form-floating mb-1 form-group"><label htmlFor="shippingAddress_lastname" className="required">Last Name</label><input type="text" id="shippingAddress_lastname" name="coreshop[shippingAddress][lastname]" required={true} className="form-control" placeholder="Last Name" defaultValue="Monroe"></div>
                                <div className="form-floating mb-1 form-group"><label htmlFor="shippingAddress_company">Company</label><input type="text" id="shippingAddress_company" name="coreshop[shippingAddress][company]" className="form-control" placeholder="Company" defaultValue="Barry Burks LLC"></div>

                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="form-floating mb-1 form-group"><label htmlFor="shippingAddress_street" className="required">Street</label><input type="text" id="shippingAddress_street" name="coreshop[shippingAddress][street]" required={true} className="form-control" placeholder="Street" defaultValue="Consequatur a repel"></div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="form-floating mb-1 form-group"><label htmlFor="shippingAddress_number" className="required">Number</label><input type="text" id="shippingAddress_number" name="coreshop[shippingAddress][number]" required={true} className="form-control" placeholder="Number" defaultValue="28"></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-3">
                                        <div className="form-floating mb-1 form-group"><label htmlFor="shippingAddress_postcode" className="required">ZIP</label><input type="text" id="shippingAddress_postcode" name="coreshop[shippingAddress][postcode]" required={true} className="form-control" placeholder="ZIP" defaultValue="46510"></div>
                                    </div>
                                    <div className="col-12 col-lg-9">
                                        <div className="form-floating mb-1 form-group"><label htmlFor="shippingAddress_city" className="required">City</label><input type="text" id="shippingAddress_city" name="coreshop[shippingAddress][city]" required={true} className="form-control" placeholder="City" defaultValue="Natus quo et sed sin"></div>
                                    </div>
                                </div>

                                <div className="form-floating mb-1 form-group"><label className="required" htmlFor="shippingAddress_country">Country</label><select id="shippingAddress_country" name="coreshop[shippingAddress][country]" className="form-control" placeholder="Country"><option defaultValue="11" selected="selected">Austria</option></select></div>
                                <div class="form-floating mb-1 form-group"><label for="shippingAddress_phoneNumber">Phone Number</label><input type="text" id="shippingAddress_phoneNumber" name="coreshop[shippingAddress][phoneNumber]" class="form-control" placeholder="Phone Number" defaultValue="+1 (997) 349-8043"></div>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
            <div className="mt-2 text-start text-lg-end">
                <button type="submit" className="btn btn-primary pull-right">
                    Proceed
                </button>
            </div>
        </form>
    </div>;
}
