import {ProductFragment, CategoryFragment} from "@/lib/graphql/types.generated";
import ProductListEntry from "@/components/product/product-list-entry";
import {getCategory} from "@/lib";

type CategoryDetailProps = {
    products: ProductFragment[]
    categoryId: number
}

export default async function CategoryDetail({products, categoryId}: CategoryDetailProps) {
    const category = await getCategory({ categoryId: categoryId });

    return (
        <div className="row">
            <h3>{category?.name}</h3>
            {products.map((product, index) => (
                (
                    <ProductListEntry key={index} product={product}/>
                )))}
        </div>
    );
}
