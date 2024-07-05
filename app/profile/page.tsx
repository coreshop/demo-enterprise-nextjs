import React, {Suspense} from "react";
import ProfileMenu from "@/components/profile/ProfileMenu";
import ProfileCards from "@/components/profile/ProfileCards";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import Loader from "@/components/loader";

export default async function ProfilePage() {
    const session = await auth();
    if (!session) {
        return (redirect('/'));
    }
    return <>
            <section className="container">
                <div className="row">
                    <Suspense fallback={<Loader/>}>
                        <div className="col-12 col-lg-3 mb-3">
                            <ProfileMenu />
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row">
                                <ProfileCards />
                            </div>
                        </div>
                    </Suspense>
                </div>
            </section>
    </>
}