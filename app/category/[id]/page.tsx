import {getProductsInCategory} from "@/lib";
import {notFound} from "next/navigation";
import CategoryMenuLeft from "@/components/category/menu-left";
import CategoryDetail from "@/components/category/detail";

export default async function CategoryDetailPage({params}: { params: { id: string } }) {
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
                <CategoryDetail products={products} categoryId={Number(params.id)}/>
            </div>
        </div>
    )
}
