import React, {ReactNode, Suspense} from "react";
import ProfileMenu from "@/components/profile/ProfileMenu";
import Loader from "@/components/loader";
interface ProfileLayoutProps {
    children?: ReactNode
}

const ProfileLayout = ({children}:ProfileLayoutProps) => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-12 col-lg-3 mb-3">
                    <ProfileMenu active="addresses" />
                </div>
                <div className="col-12 col-lg-9">
                    <Suspense fallback={<Loader />}>
                        {children}
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default  ProfileLayout;
