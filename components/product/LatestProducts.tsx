import {getLatestProducts} from "@/lib";
import ProductPreview from "@/components/product/ProductPreview";

export default async function LatestProducts() {
    const latestProducts = await getLatestProducts();

    return (
        <section className="product-carousel">
            <h2 className="product-head">Latest Products</h2>
            <div className="row">
                {latestProducts.map(item => (
                    <div key={item.id} className="col-12 col-sm-3">
                        <ProductPreview product={item} />
                    </div>
                ))}
            </div>
        </section>
    );
}
