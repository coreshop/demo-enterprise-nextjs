import React from "react";
import {auth} from "@/auth";
import LoginForm from "@/components/forms/LoginForm";
import {redirect} from "next/navigation";

export default async function Login() {
    const session = await auth();
    if(session) {
        redirect('/');
    }

    return (
        <div className="row">
            <div className="col-12">
                <LoginForm />
            </div>
        </div>
    );
}


