import {getProductsInCategory} from "@/lib";
import {notFound} from "next/navigation";
import CategoryDetail from "@/components/category/detail";

export default async function CategoryDetailPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const products = await getProductsInCategory({categoryId: Number(params.id)});

    if (!products?.length || products?.length === 0) {
        return notFound();
    }

    return (
        <CategoryDetail products={products} categoryId={Number(params.id)}/>
    )
}
