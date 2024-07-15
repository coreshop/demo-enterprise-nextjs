import React from "react";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import ProfilePassword from "@/components/profile/ProfilePassword";


export default async function PasswordPage() {
    const session = await auth();

    if (!session) {
        return (redirect('/'));
    }

    return <>
        <ProfilePassword />
    </>
}