import {getProduct} from "@/lib";
import {notFound} from "next/navigation";
import ProductDetail from "@/components/product/detail";

export default async function ProductDetailPage({ params }: { params: { id: number } }) {
    const product = await getProduct({productId: Number(params.id)});

    if (undefined === product) {
        return notFound();
    }

    return (
        <ProductDetail product={product} />
    )
}
