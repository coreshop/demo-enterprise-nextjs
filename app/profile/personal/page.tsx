import React, {Suspense} from "react";
import ProfileMenu from "@/components/profile/ProfileMenu";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
import Loader from "@/components/loader";
import {getCoreshopMe} from "@/lib";
import ProfileInfo from "@/components/profile/ProfileInfo";

export default async function PersonalPage() {
    const session = await auth();
    if (!session) {
        return (redirect('/'));
    }

    const user = await getCoreshopMe();

    return <>
        <section className="container">
            <div className="row">
                <Suspense fallback={<Loader/>}>
                    <div className="col-12 col-lg-3 mb-3">
                        <ProfileMenu active="addresses"/>
                    </div>
                    <div className="col-12 col-lg-9">
                        <ProfileInfo user={user} />
                    </div>
                </Suspense>
            </div>
        </section>
    </>
}