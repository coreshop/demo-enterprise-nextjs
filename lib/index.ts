import {
    print
} from 'graphql';
import {
    CoreShopAddToOrder,
    CoreShopAddToOrderMutation, CoreShopAddToOrderMutationVariables,
    CoreShopProductPriceResult,
    GetCoreShopCategories,
    GetCoreShopCategoriesQuery,
    GetCoreShopCategoriesQueryVariables,
    GetCoreShopLatestProducts,
    GetCoreShopLatestProductsQuery,
    GetCoreShopLatestProductsQueryVariables, GetCoreShopOrder, GetCoreShopOrderQuery, GetCoreShopOrderQueryVariables,
    GetCoreShopProduct,
    GetCoreShopProductPrice,
    GetCoreShopProductPriceQuery,
    GetCoreShopProductPriceQueryVariables,
    GetCoreShopProductQuery,
    GetCoreShopProductQueryVariables,
    GetCoreShopProductsInCategory,
    GetCoreShopProductsInCategoryQuery,
    GetCoreShopProductsInCategoryQueryVariables,
    Object_CoreShopCategory, OrderFragment,
    ProductFragment
} from "@/lib/graphql/types.generated";
const domain = process.env.API_URL;
const endpoint = `${domain}`;
export async function coreShopFetch<TResult, TVariables>({
       query,
       variables,
       headers,
       cache = 'force-cache'
   }: {
    query: string;
    variables: TVariables;
    headers?: HeadersInit;
    cache?: RequestCache;
}): Promise<{data: TResult}> {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            ... headers
        },
        body: JSON.stringify({
            query,
            variables
        }),
        cache
    })

    if (response.status !== 200) {
        throw new Error(`Failed to fetch: ${response.statusText}. Body: ${await response.text()}`)
    }

    return await response.json() as {data: TResult};
}

export async function getCategories(): Promise<Object_CoreShopCategory[]> {
    const res = await coreShopFetch<GetCoreShopCategoriesQuery, GetCoreShopCategoriesQueryVariables>({
        query: print(GetCoreShopCategories),
        variables: {}
    });

    if (res.data.CoreShopCategories?.__typename === 'CoreShopCategoriesResult') {
        return res.data.CoreShopCategories?.categories?.edges?.map((data) => data?.node) as Object_CoreShopCategory[];
    }

    return [];
}
export async function getLatestProducts(): Promise<ProductFragment[]> {
    const res = await coreShopFetch<GetCoreShopLatestProductsQuery, GetCoreShopLatestProductsQueryVariables>({
        query: print(GetCoreShopLatestProducts),
        variables: {}
    });

    if (res.data.CoreShopLatestProducts?.__typename === 'CoreShopLatestProductsResult') {
        return res.data.CoreShopLatestProducts?.products?.edges?.map((data) => data?.node) as ProductFragment[];
    }

    return [];
}
export async function getProduct({productId} : {productId: number}): Promise<ProductFragment|undefined> {
    const res = await coreShopFetch<GetCoreShopProductQuery, GetCoreShopProductQueryVariables>({
        query: print(GetCoreShopProduct),
        variables: {
            productId: productId
        }
    });

    if (res.data?.CoreShopProduct?.__typename === 'CoreShopProductResult') {
        return res.data.CoreShopProduct?.product as ProductFragment;
    }

    return undefined;
}
export async function getProductsInCategory({categoryId} : {categoryId: number}): Promise<ProductFragment[]|undefined> {
    const res = await coreShopFetch<GetCoreShopProductsInCategoryQuery, GetCoreShopProductsInCategoryQueryVariables>({
        query: print(GetCoreShopProductsInCategory),
        variables: {
            categoryId: categoryId,
        }
    });

    if (res.data.CoreShopProducts?.__typename === 'CoreShopProductsResult') {
        return res.data.CoreShopProducts?.products?.edges?.map((data) => data?.node) as ProductFragment[];
    }

    return undefined;
}
export async function getProductPrice({productId} : {productId: number}): Promise<CoreShopProductPriceResult|undefined> {
    const res = await coreShopFetch<GetCoreShopProductPriceQuery, GetCoreShopProductPriceQueryVariables>({
        query: print(GetCoreShopProductPrice),
        variables: {
            productId: productId,
        }
    });

    if (res.data?.CoreShopProductPrice?.__typename === 'CoreShopProductPriceResult') {
        return res.data.CoreShopProductPrice as CoreShopProductPriceResult;
    }

    return undefined;
}
export async function getOrder({cartToken} : {cartToken: string}): Promise<OrderFragment|undefined> {
    const res = await coreShopFetch<GetCoreShopOrderQuery, GetCoreShopOrderQueryVariables>({
        query: print(GetCoreShopOrder),
        variables: {
            token: cartToken,
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopOrder?.__typename === 'CoreShopOrderResult') {
        return res.data.CoreShopOrder.order as OrderFragment;
    }

    return undefined;
}
export async function addItemToOrder({token, productId, quantity} : {token: string|undefined, productId: number, quantity: number}): Promise<OrderFragment|null> {
    const res = await coreShopFetch<CoreShopAddToOrderMutation, CoreShopAddToOrderMutationVariables>({
        query: print(CoreShopAddToOrder),
        variables: {
            token: token,
            productId: productId,
            quantity: quantity,
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopAddToOrder?.__typename === 'CoreShopAddToOrderResult') {
        return res.data.CoreShopAddToOrder.order as OrderFragment;
    }

    return null;
}