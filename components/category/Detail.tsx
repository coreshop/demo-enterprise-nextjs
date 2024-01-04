import {ProductFragment} from "@/lib/graphql/types.generated";
import ProductListEntry from "@/components/product/ProductListEntry";

type CategoryDetailProps = {
    products: ProductFragment[]
}

export default async function CategoryDetail({products}: CategoryDetailProps) {

    return (
        <div className="row">
            {products.map((product, index) => (
                (
                    <ProductListEntry key={index} product={product}/>
                )))}
        </div>
    );
}
