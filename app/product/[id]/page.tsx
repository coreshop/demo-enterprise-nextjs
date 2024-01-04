import { useRouter } from 'next/router'
import {getProduct} from "@/lib";
import {notFound} from "next/navigation";
import ProductDetail from "@/components/product/Detail";
import CategoryMenuLeft from "@/components/category/MenuLeft";

export default async function ProductDetailPage({ params }: { params: { id: number } }) {
    const product = await getProduct({productId: Number(params.id)});

    if (undefined === product) {
        return notFound();
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <CategoryMenuLeft />
            </div>
            <div className="col-md-9">
                <ProductDetail product={product} />
            </div>
        </div>
    )
}
