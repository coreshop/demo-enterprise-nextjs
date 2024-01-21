'use client';

import StepComponent from "@/components/checkout/steps";
import {registerGuestCustomer} from "@/components/cart/actions";
import {CountryEnumType} from "@/lib/graphql/types.generated";
import {useForm} from "react-hook-form";
import {CustomerSchema, GuestCustomerType} from "@/schema/CustomerRegistration";
import { zodResolver } from "@hookform/resolvers/zod";
import Loading from "@/app/loading";

export default function CheckoutGuestCustomerForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isSubmitted, isDirty, isValid }
    } = useForm<GuestCustomerType>({
        mode: "onChange",
        resolver: zodResolver(CustomerSchema),
    });

    function onSubmit (user: GuestCustomerType) {
        return registerGuestCustomer(null, user);
    }

    return <div>
        <StepComponent currentStep={"customer"} />
        <h2 className="main-heading text-center mt-4">
            Guest Customer Registration
        </h2>
        {isSubmitting && <Loading />}
        {!isSubmitting &&
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label className="required" htmlFor="salutation">Salutation</label>
                                    <select className="form-control" {...register("salutation")}>
                                        <option value="mrs">Mrs.</option>
                                        <option value="mr">Mr.</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="required" htmlFor="guest_gender">Gender</label>
                                    <select className="form-control" {...register("gender")}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstname" className="required">First Name</label>
                                    <input type="text" className="form-control" {...register("firstname")}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname" className="required">Last Name</label>
                                    <input type="text" className="form-control" {...register("lastname")} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="required">Email Address</label>
                                    <input type="email" className="form-control" {...register("email")}/>
                                </div>

                                <legend className="cs-address col-form-label required">Address Information</legend>

                                <div className="form-group">
                                    <label htmlFor="address_company">Company</label>
                                    <input type="text" id="address_company" name="address_company" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label className="required" htmlFor="address_salutation">Salutation</label>
                                    <select className="form-control" {...register("address.salutation")}>
                                        <option value="mrs">Mrs.</option>
                                        <option value="mr">Mr.</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address_firstname" className="required">First Name</label>
                                    <input type="text" className="form-control" {...register("address.firstname")}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address_lastname" className="required">Last Name</label>
                                    <input type="text" className="form-control" {...register("address.lastname")}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address_street" className="required">Street</label>
                                    <input type="text" className="form-control" {...register("address.street")}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address_number" className="required">Number</label>
                                    <input type="text" className="form-control" {...register("address.number")}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address_postcode" className="required">ZIP</label>
                                    <input type="text" className="form-control" {...register("address.postcode")}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address_city" className="required">City</label>
                                    <input type="text" className="form-control" {...register("address.city")}/>
                                </div>
                                <div className="form-group">
                                    <label className="required" htmlFor="address_country">Country</label>
                                    <select className="form-control" {...register("address.country")}>
                                        {Object.keys(CountryEnumType).map((country: string) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address_phoneNumber">Phone Number</label>
                                    <input type="text" className="form-control" {...register("address.phoneNumber")} />
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input type="checkbox" id="termsAccepted" required={true} className="form-check-input" value="1"/>
                                        <label className="form-check-label required" htmlFor="termsAccepted">
                                            I have read and agree to the terms and conditions
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn-primary btn" disabled={isSubmitting || !isValid} >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>;
}
