import React from "react";
import { EnvelopeCheckFill } from 'react-bootstrap-icons';

export default async function ThankYouPage() {
    return <>
        <div className="row">
            <div className="col-12 d-flex justify-content-center py-5 mb-5">
                <div className="text-center">
                    <h1 className="h2">Thank you</h1>
                    <h2 className="h5">Your order was completed successfully</h2>
                    <div className="row my-5">
                        <div className="col-12 col-lg-8 offset-lg-2 d-flex justify-content-center">
                            <div className="d-sm-flex text-sm-start align-items-center gap-4">
                                <div className="mb-2 mb-sm-0">
                                    <EnvelopeCheckFill color={'#b4b4b4'} style={{width: '4rem', height: '4rem'}}/>
                                </div>
                                <div>
                                    <strong>An email with the details of your order has been sent to the email address
                                        that you
                                        have
                                        provided!</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}