import React from "react";
import ProfileCards from "@/components/profile/ProfileCards";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function ProfilePage() {
    const session = await auth();
    if (!session) {
        return (redirect('/'));
    }
    return <>
        <div className="row">
            <ProfileCards/>
        </div>
    </>
}