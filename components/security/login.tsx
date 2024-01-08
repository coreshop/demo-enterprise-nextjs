'use client';

import { useFormState, useFormStatus } from 'react-dom';
import {authenticate} from "@/lib/auth";

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card card-smart">
                            <div className="card-header">
                                <h3 className="card-title">Login</h3>
                            </div>
                            <div className="card-body">
                                <p>
                                    Login with existing account
                                </p>

                                <form action={dispatch}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="required">Email</label>
                                        <input type="text" id="email" name="email" required={true} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="required">Password</label>
                                        <input type="password" id="password" name="password" required={true} className="form-control" />
                                    </div>
                                    <LoginButton />

                                    <a className="pull-right" href="/en/shop/password-reset-request">Reset Password</a>
                                    <div
                                        className="flex h-8 items-end space-x-1"
                                        aria-live="polite"
                                        aria-atomic="true"
                                    >
                                        {errorMessage && (
                                            <>
                                                <p className="alert alert-danger">{errorMessage}</p>
                                            </>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-sm-6">*/}
                    {/*    <div className="card card-smart">*/}
                    {/*        <div className="card-header">*/}
                    {/*            <h3 className="card-title">Create a new Account</h3>*/}
                    {/*        </div>*/}
                    {/*        <div class="card-body">*/}
                    {/*            <p>*/}
                    {/*                Create a new account*/}
                    {/*            </p>*/}
                    {/*            <a href="/en/shop/register?" class="btn btn-success">Register</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button className="btn-success btn submit button" aria-disabled={pending}>Login</button>
    );
}