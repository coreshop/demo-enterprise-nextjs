import {getProductsInCategory} from "@/lib";
import {notFound} from "next/navigation";
import CategoryMenuLeft from "@/components/category/MenuLeft";
import CategoryDetail from "@/components/category/Detail";

export default async function CategoryDetailPage({params}: { params: { id: string } }) {
    debugger;
    const products = await getProductsInCategory({categoryId: Number(params.id)});

    if (!products?.length || products?.length === 0) {
        return notFound();
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <CategoryMenuLeft/>
            </div>
            <div className="col-md-9">
                <CategoryDetail products={products} />
            </div>
        </div>
    )
}
