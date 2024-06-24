import {getLatestProducts} from "@/lib";
import ProductPreview from "@/components/product/product-preview";

export default async function LatestProducts() {
    const latestProducts = await getLatestProducts();

    return (
        <section className="product-carousel">
            <h2 className="product-head">Latest Products</h2>
            <div className="row">
                {latestProducts.map(item => (
                    <div key={item.id} className="col-12 col-md-6 col-lg-3 mb-3 d-flex align-items-stretch">
                        <ProductPreview product={item} />

                    </div>
                ))}
            </div>
        </section>
    );
}
