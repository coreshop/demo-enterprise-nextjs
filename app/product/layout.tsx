import React, {ReactNode, Suspense} from "react";
import Loader from "@/components/loader";
import CategoryMenuLeft from "@/components/category/menu-left";

interface ProductLayoutProps {
    children?: ReactNode
}

const ProductLayout = ({children}:ProductLayoutProps) => {

    return (
        <section className="container">
            <div className="row">
                <div className="col-12 col-lg-3 mb-3">
                    <CategoryMenuLeft />
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

export default  ProductLayout;
