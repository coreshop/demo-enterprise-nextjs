import {getProduct} from "@/lib";
import {notFound} from "next/navigation";
import ProductDetail from "@/components/product/detail";

export default async function ProductDetailPage(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const product = await getProduct({productId: Number(params.id)});

    if (undefined === product) {
        return notFound();
    }

    return (
        <ProductDetail product={product} />
    )
}
