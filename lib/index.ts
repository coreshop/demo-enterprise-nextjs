import {print} from 'graphql';

import {
    AddressFragment,
    AddressInput,
    CarrierEnumType,
    CategoryFragment,
    CheckoutAddressInput,
    CoreShopAddOrderVoucherCode,
    CoreShopAddOrderVoucherCodeMutation,
    CoreShopAddOrderVoucherCodeMutationVariables,
    CoreShopAddToOrder,
    CoreShopAddToOrderMutation,
    CoreShopAddToOrderMutationVariables,
    CoreShopAuthorize,
    CoreShopAuthorizeMutation,
    CoreShopAuthorizeMutationVariables,
    CoreShopAuthorizeResult,
    CoreShopCarrierList,
    CoreShopCarrierListQuery,
    CoreShopCarrierListQueryVariables,
    CoreShopCarrierListResult,
    CoreShopCheckoutAddress,
    CoreShopCheckoutAddressMutation,
    CoreShopCheckoutAddressMutationVariables,
    CoreShopCheckoutGuestAddress,
    CoreShopCheckoutGuestAddressMutation,
    CoreShopCheckoutGuestAddressMutationVariables,
    CoreShopCheckoutGuestRegistration,
    CoreShopCheckoutGuestRegistrationMutation,
    CoreShopCheckoutGuestRegistrationMutationVariables,
    CoreShopCheckoutPaymentProvider,
    CoreShopCheckoutPaymentProviderMutation,
    CoreShopCheckoutPaymentProviderMutationVariables,
    CoreShopCheckoutShipping,
    CoreShopCheckoutShippingMutation,
    CoreShopCheckoutShippingMutationVariables,
    CoreShopCreateAddress,
    CoreShopCreateAddressMutation,
    CoreShopCreateAddressMutationVariables,
    CoreShopDeleteAddress,
    CoreShopDeleteAddressMutation,
    CoreShopDeleteAddressMutationVariables,
    CoreShopDeleteAddressResult,
    CoreShopOrderList,
    CoreShopOrderListQuery,
    CoreShopOrderListQueryVariables,
    CoreShopPaymentProviderList,
    CoreShopPaymentProviderListQuery,
    CoreShopPaymentProviderListQueryVariables,
    CoreShopPaymentProviderListResult,
    CoreShopProductPriceResult,
    CoreShopRemoveOrderItem,
    CoreShopRemoveOrderItemMutation,
    CoreShopRemoveOrderItemMutationVariables,
    CoreShopRemoveOrderVoucherCode,
    CoreShopRemoveOrderVoucherCodeMutation,
    CoreShopRemoveOrderVoucherCodeMutationVariables,
    CoreShopUpdateAddress,
    CoreShopUpdateAddressMutation,
    CoreShopUpdateAddressMutationVariables,
    CoreShopUpdateAddressResult,
    CoreShopUpdateMe,
    CoreShopUpdateMeMutation,
    CoreShopUpdateMeMutationVariables,
    CoreShopUpdateMeResult,
    CoreShopUpdateOrderItem,
    CoreShopUpdateOrderItemMutation,
    CoreShopUpdateOrderItemMutationVariables,
    GetCoreShopActiveOrder,
    GetCoreShopActiveOrderQuery,
    GetCoreShopActiveOrderQueryVariables,
    GetCoreShopAddressList,
    GetCoreShopAddressListQuery,
    GetCoreShopAddressListQueryVariables,
    GetCoreShopCategories,
    GetCoreShopCategoriesQuery,
    GetCoreShopCategoriesQueryVariables,
    GetCoreShopCategory,
    GetCoreShopCategoryQuery,
    GetCoreShopCategoryQueryVariables,
    GetCoreShopLatestProducts,
    GetCoreShopLatestProductsQuery,
    GetCoreShopLatestProductsQueryVariables,
    GetCoreShopMe,
    GetCoreShopMeQuery,
    GetCoreShopMeQueryVariables,
    GetCoreShopOrder,
    GetCoreShopOrderQuery,
    GetCoreShopOrderQueryVariables,
    GetCoreShopProduct,
    GetCoreShopProductPrice,
    GetCoreShopProductPriceQuery,
    GetCoreShopProductPriceQueryVariables,
    GetCoreShopProductQuery,
    GetCoreShopProductQueryVariables,
    GetCoreShopProductsInCategory,
    GetCoreShopProductsInCategoryQuery,
    GetCoreShopProductsInCategoryQueryVariables,
    GuestRegistrationInput,
    MeInput,
    Object_CoreShopCategory,
    OrderFragment,
    PaymentProviderEnumType,
    ProductFragment,
    CoreShopUpdatePassword,
    CoreShopUpdatePasswordMutation,
    CoreShopUpdatePasswordMutationVariables,
    CoreShopUpdatePasswordResult,
    CoreShopCheckoutOrder,
    CoreShopCheckoutOrderMutation,
    CoreShopCheckoutOrderMutationVariables,
    CoreShopCheckoutOrderResult, OrderInput,
    CoreShopPasswordResetRequestResult,
    CoreShopPasswordResetRequestMutation,
    CoreShopPasswordResetRequestMutationVariables, CoreShopPasswordResetRequest, CoreShopError
} from "@/lib/graphql/types.generated";
import {auth} from "@/auth";

const domain = process.env.API_URL;
const endpoint = `${domain}`;

// catalog data (categories, products, prices) is cached in the Next.js data cache for this long;
// cart, checkout and customer calls always go to the shop
export const CATALOG_REVALIDATE_SECONDS = 300;
export const catalogCache = {cache: 'force-cache' as RequestCache, next: {revalidate: CATALOG_REVALIDATE_SECONDS}};

export async function coreShopFetch<TResult, TVariables>({
     query,
     variables,
     headers,
     cache = 'no-store',
     next
 }: {
    query: string;
    variables: TVariables;
    headers?: HeadersInit;
    cache?: RequestCache;
    next?: NextFetchRequestConfig;
}): Promise<{ data: TResult  }> {
    const session = await auth();
    const authHeader = {};

    // @ts-ignore
    if (session?.accessToken) {
        // @ts-ignore
        authHeader['Authorization'] = `Bearer ${session.accessToken}`;
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            ...authHeader,
            ...headers
        },
        body: JSON.stringify({
            query,
            variables
        }),
        cache,
        ...(next ? {next} : {})
    })

    if (response.status !== 200) {
        throw new Error('Network Error');

    }

    return await response.json() as { data: TResult };
}

export async function getCategories(): Promise<Object_CoreShopCategory[]> {
    const res = await coreShopFetch<GetCoreShopCategoriesQuery, GetCoreShopCategoriesQueryVariables>({
        query: print(GetCoreShopCategories),
        variables: {},
        ...catalogCache
    });

    if (res.data.CoreShopCategories?.__typename === 'CoreShopCategoriesResult') {
        return res.data.CoreShopCategories?.categories?.edges?.map((data) => data?.node) as Object_CoreShopCategory[];
    }

    return [];
}

export async function getCategory({categoryId}: { categoryId: number }) {
    const res = await coreShopFetch<GetCoreShopCategoryQuery, GetCoreShopCategoryQueryVariables>({
        query: print(GetCoreShopCategory),
        variables: {
            categoryId: categoryId
        },
        ...catalogCache
    });

    if (res.data?.CoreShopCategory?.__typename === 'CoreShopCategoryResult') {
        return res.data.CoreShopCategory?.category as CategoryFragment;
    }

    return undefined;
}

export async function getLatestProducts(): Promise<ProductFragment[]> {
    const res = await coreShopFetch<GetCoreShopLatestProductsQuery, GetCoreShopLatestProductsQueryVariables>({
        query: print(GetCoreShopLatestProducts),
        variables: {},
        ...catalogCache
    });

     if (res.data?.CoreShopLatestProducts?.__typename === 'CoreShopLatestProductsResult') {
        return res.data.CoreShopLatestProducts?.products?.edges?.map((data) => data?.node) as ProductFragment[];
    }

    return [];
}

export async function getProduct({ productId }: { productId: number }): Promise<ProductFragment | undefined> {
    // Simulate a delay of 3 seconds
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    await delay(500);
    const res = await coreShopFetch<GetCoreShopProductQuery, GetCoreShopProductQueryVariables>({
        query: print(GetCoreShopProduct),
        variables: {
            productId: productId
        },
        ...catalogCache
    });

    if (res.data?.CoreShopProduct?.__typename === 'CoreShopProductResult') {
        return res.data.CoreShopProduct?.product as ProductFragment;
    }

    return undefined;
}

export async function getProductsInCategory({categoryId}: {
    categoryId: number
}): Promise<ProductFragment[] | undefined> {
    const res = await coreShopFetch<GetCoreShopProductsInCategoryQuery, GetCoreShopProductsInCategoryQueryVariables>({
        query: print(GetCoreShopProductsInCategory),
        variables: {
            categoryId: categoryId,
        },
        ...catalogCache
    });

    if (res.data.CoreShopProducts?.__typename === 'CoreShopProductsResult') {
        return res.data.CoreShopProducts?.products?.edges?.map((data) => data?.node) as ProductFragment[];
    }

    return undefined;

}

export async function getProductPrice({productId}: {
    productId: number
}): Promise<CoreShopProductPriceResult | undefined> {
    const res = await coreShopFetch<GetCoreShopProductPriceQuery, GetCoreShopProductPriceQueryVariables>({
        query: print(GetCoreShopProductPrice),
        variables: {
            productId: productId,
        },
        ...catalogCache
    });

    if (res.data?.CoreShopProductPrice?.__typename === 'CoreShopProductPriceResult') {
        return res.data.CoreShopProductPrice as CoreShopProductPriceResult;
    }

    return undefined;
}

export async function getOrder({cartToken}: { cartToken: string }): Promise<OrderFragment | undefined> {
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

export async function getActiveOrder(): Promise<OrderFragment | undefined> {
    const res = await coreShopFetch<GetCoreShopActiveOrderQuery, GetCoreShopActiveOrderQueryVariables>({
        query: print(GetCoreShopActiveOrder),
        variables: {},
        cache: "no-cache"
    });

    if (res.data?.CoreShopActiveOrder?.__typename === 'CoreShopActiveOrderResult') {
        return res.data.CoreShopActiveOrder.order as OrderFragment;
    }

    return undefined;
}

export async function addItemToOrder({token, productId, quantity}: {
    token: string | undefined,
    productId: number,
    quantity: number
}): Promise<OrderFragment | null> {
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

export async function updateOrderItem({token, orderItemId, quantity}: {
    token: string,
    orderItemId: number,
    quantity: number
}): Promise<OrderFragment | null> {
    const res = await coreShopFetch<CoreShopUpdateOrderItemMutation, CoreShopUpdateOrderItemMutationVariables>({
        query: print(CoreShopUpdateOrderItem),
        variables: {
            token: token,
            orderItemId: orderItemId,
            quantity: quantity,
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopUpdateOrderItem?.__typename === 'CoreShopUpdateOrderItemResult') {
        return res.data.CoreShopUpdateOrderItem.order as OrderFragment;
    }

    return null;
}

export async function removeOrderItem({token, orderItemId}: {
    token: string,
    orderItemId: number
}): Promise<OrderFragment | null> {
    const res = await coreShopFetch<CoreShopRemoveOrderItemMutation, CoreShopRemoveOrderItemMutationVariables>({
        query: print(CoreShopRemoveOrderItem),
        variables: {
            token: token,
            orderItemId: orderItemId,
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopRemoveOrderItem?.__typename === 'CoreShopRemoveOrderItemResult') {
        return res.data.CoreShopRemoveOrderItem.order as OrderFragment;
    }

    return null;
}

export async function addVoucherCode({token, voucherCode}: {
    token: string,
    voucherCode: string
}): Promise<OrderFragment | null | CoreShopError> {
    const res = await coreShopFetch<CoreShopAddOrderVoucherCodeMutation, CoreShopAddOrderVoucherCodeMutationVariables>({
        query: print(CoreShopAddOrderVoucherCode),
        variables: {
            token: token,
            voucherCode: voucherCode,
        },
        cache: "no-cache"
    });
    console.log(res.data);
    if (res.data?.CoreShopAddOrderVoucherCode?.__typename === 'CoreShopAddOrderVoucherCodeResult') {
        return res.data.CoreShopAddOrderVoucherCode.order as OrderFragment;
    }

    if (res.data?.CoreShopAddOrderVoucherCode?.__typename === 'CoreShopError') {
       return res.data.CoreShopAddOrderVoucherCode.message as OrderFragment;
    }

    if (res.data?.CoreShopAddOrderVoucherCode?.__typename === 'CoreShopValidationError') {
        return res.data.CoreShopAddOrderVoucherCode.message as OrderFragment;
    }

    return null;
}

export async function removeVoucherCode({token, voucherCode}: {
    token: string,
    voucherCode: string
}): Promise<OrderFragment | null> {
    const res = await coreShopFetch<CoreShopRemoveOrderVoucherCodeMutation, CoreShopRemoveOrderVoucherCodeMutationVariables>({
        query: print(CoreShopRemoveOrderVoucherCode),
        variables: {
            token: token,
            voucherCode: voucherCode,
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopRemoveOrderVoucherCode?.__typename === 'CoreShopRemoveOrderVoucherCodeResult') {
        return res.data.CoreShopRemoveOrderVoucherCode.order as OrderFragment;
    }

    return null;
}

export async function authorize({username, password, orderToken = null}: {
    username: string,
    password: string,
    orderToken: string | null
}): Promise<CoreShopAuthorizeResult | null> {
    const res = await coreShopFetch<CoreShopAuthorizeMutation, CoreShopAuthorizeMutationVariables>({
        query: print(CoreShopAuthorize),
        variables: {
            username: username,
            password: password,
            orderToken: orderToken,
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopAuthorize?.__typename === 'CoreShopAuthorizeResult' && res.data.CoreShopAuthorize) {
        console.log(res);
        return res.data.CoreShopAuthorize;
    }

    return null;
}

export async function checkoutGuestRegistration({token, guestCustomer}: {
    token: string,
    guestCustomer: GuestRegistrationInput
}): Promise<boolean> {
    const res = await coreShopFetch<CoreShopCheckoutGuestRegistrationMutation, CoreShopCheckoutGuestRegistrationMutationVariables>({
        query: print(CoreShopCheckoutGuestRegistration),
        variables: {
            token: token,
            guestCustomer: guestCustomer,
        },
        cache: "no-cache"
    });

    return res.data?.CoreShopCheckoutGuestRegistration?.__typename === 'CoreShopCheckoutGuestRegistrationResult';
}

export async function checkoutGuestAddress({token, invoiceAddress, shippingAddress}: {
    token: string,
    invoiceAddress: AddressInput
    shippingAddress: AddressInput|undefined
}): Promise<boolean> {
    const res = await coreShopFetch<CoreShopCheckoutGuestAddressMutation, CoreShopCheckoutGuestAddressMutationVariables>({
        query: print(CoreShopCheckoutGuestAddress),
        variables: {
            token: token,
            invoiceAddress: invoiceAddress,
            shippingAddress: invoiceAddress,
            invoiceAddressIsShippingAddress: shippingAddress === undefined,
        },
        cache: "no-cache"
    });

    return res.data?.CoreShopCheckoutGuestAddress?.__typename === 'CoreShopCheckoutGuestAddressResult';
}

export async function checkoutShipping({token, carrier}: {
    token: string,
    carrier: CarrierEnumType
}): Promise<boolean> {
    const res = await coreShopFetch<CoreShopCheckoutShippingMutation, CoreShopCheckoutShippingMutationVariables>({
        query: print(CoreShopCheckoutShipping),
        variables: {
            token: token,
            carrier: carrier
        },
        cache: "no-cache"
    });

    return res.data?.CoreShopCheckoutShipping?.__typename === 'CoreShopCheckoutShippingResult';
}

export async function checkoutPayment({token, paymentProvider}: {
    token: string,
    paymentProvider: PaymentProviderEnumType
}): Promise<boolean> {
    const res = await coreShopFetch<CoreShopCheckoutPaymentProviderMutation, CoreShopCheckoutPaymentProviderMutationVariables>({
        query: print(CoreShopCheckoutPaymentProvider),
        variables: {
            token: token,
            paymentProvider: paymentProvider
        },
        cache: "no-cache"
    });

    return res.data?.CoreShopCheckoutPaymentProvider?.__typename === 'CoreShopCheckoutPaymentProviderResult';
}

export async function listCarriers({token}: {
    token: string,
}): Promise<CoreShopCarrierListResult|null> {
    const res = await coreShopFetch<CoreShopCarrierListQuery, CoreShopCarrierListQueryVariables>({
        query: print(CoreShopCarrierList),
        variables: {
            token: token
        },
        cache: "no-cache"
    });


    if (res.data?.CoreShopCarrierList?.__typename === 'CoreShopCarrierListResult') {
        return res.data.CoreShopCarrierList;
    }

    return null;
}

export async function listPaymentProviders({token}: {
    token: string,
}): Promise<CoreShopPaymentProviderListResult|null> {
    const res = await coreShopFetch<CoreShopPaymentProviderListQuery, CoreShopPaymentProviderListQueryVariables>({
        query: print(CoreShopPaymentProviderList),
        variables: {
            token: token
        },
        cache: "no-cache"
    });


    if (res.data?.CoreShopPaymentProviderList?.__typename === 'CoreShopPaymentProviderListResult') {
        return res.data.CoreShopPaymentProviderList;
    }

    return null;
}



export async function getCustomerAddresses(sessionToken: string): Promise<AddressFragment[]> {
    try {
        const res = await coreShopFetch<GetCoreShopAddressListQuery, GetCoreShopAddressListQueryVariables>({
            query: print(GetCoreShopAddressList),
            variables: {},
            headers: {
                'Authorization': `Bearer ${sessionToken}`
            },
        });

        if (res.data?.CoreShopAddressList?.__typename === 'CoreShopAddressListResult') {
            return res.data.CoreShopAddressList.addresses as AddressFragment[];
        } else {
            throw new Error('Failed to fetch addresses: Unexpected response structure.');
        }
    } catch (error) {
        throw new Error('Failed to fetch addresses: GraphQL error.');
    }
}

export async function checkoutCustomerAddress({address}: {
    address: AddressInput
}): Promise<boolean> {
    const res = await coreShopFetch<CoreShopCreateAddressMutation, CoreShopCreateAddressMutationVariables>({
        query: print(CoreShopCreateAddress),
        variables: {
            address: address,
        },
        cache: "no-cache"
    });

    return res.data?.CoreShopCreateAddress?.__typename === 'CoreShopCreateAddressResult';
}


export async function checkoutAddress({token,address}: {
    token: string,
    address: CheckoutAddressInput
}): Promise<boolean> {
    const res = await coreShopFetch<CoreShopCheckoutAddressMutation, CoreShopCheckoutAddressMutationVariables>({
        query: print(CoreShopCheckoutAddress),
        variables: {
            shippingAddress: address.shippingAddressId,
            invoiceAddress: address.invoiceAddressId,
            token: token,
            invoiceAddressIsShippingAddress: address.invoiceAddressIsShippingAddress ?? true
        },
        cache: "no-cache"
    });

    return res.data?.CoreShopCheckoutAddress?.__typename === 'CoreShopCheckoutAddressResult';
}

interface MeInputExtend extends MeInput {
    defaultAddress: {
        id: string;
    } | null;
}
export async function getCoreshopMe(): Promise<{
    __typename?: "object_CoreShopCustomer";
    id?: string | null;
    salutation?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    email?: string | null;
    gender?: string | null;
    newsletterActive?: boolean | null;
    defaultAddress?: { __typename?: "object_CoreShopAddress"; id?: string | null } | null
} | null> {
    const res = await coreShopFetch<GetCoreShopMeQuery, GetCoreShopMeQueryVariables>({
        query: print(GetCoreShopMe),
        variables: {},
        cache: "no-cache"
    });

    if (res.data?.CoreShopMe?.__typename === "CoreShopMeResult") {
        const customer = res.data.CoreShopMe.user?.customer;
        return customer || null;
    } else {
        return null;
    }
}

// Define the correct type for the function parameter
export async function updateCoreshopMe({ me }: { me: MeInput }): Promise<MeInput | undefined | null> {
    const res = await coreShopFetch<CoreShopUpdateMeMutation, CoreShopUpdateMeMutationVariables>({
        query: print(CoreShopUpdateMe),
        variables: {
            salutation: me.salutation ?? '',
            gender: me.gender ?? '',
            firstname: me.firstname ?? '',
            lastname: me.lastname ?? '',
            newsletterActive: me.newsletterActive ?? false,
            defaultAddressId: parseInt(me.defaultAddressId as unknown as string) ?? 0,
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopUpdateMe?.__typename === "CoreShopUpdateMeResult") {
        return res.data.CoreShopUpdateMe?.me;
    } else {
        return null;
    }
}


export async function updateCustomerAddress({addressId,  address }: { addressId: number, address: AddressInput }): Promise<CoreShopUpdateAddressResult | null> {

    const res = await coreShopFetch<CoreShopUpdateAddressMutation, CoreShopUpdateAddressMutationVariables>({
        query: print(CoreShopUpdateAddress),
        variables: {
            addressId,
            address,
        },
        cache: "no-cache"
    });
    
    if (res.data?.CoreShopUpdateAddress?.__typename === 'CoreShopUpdateAddressResult') {
        return res.data.CoreShopUpdateAddress;
    }

    if (res.data?.CoreShopUpdateAddress?.__typename === 'CoreShopError') {
        throw new Error(res.data.CoreShopUpdateAddress.message ?? 'An unknown error occurred.');
    }

    if (res.data?.CoreShopUpdateAddress?.__typename === 'CoreShopValidationError') {
        throw new Error(res.data.CoreShopUpdateAddress.message ?? 'Validation errors occurred.');
    }

    return null;
}

export async function deleteCustomerAddress({addressId}: { addressId: number}): Promise<CoreShopDeleteAddressResult | null> {

    const res = await coreShopFetch<CoreShopDeleteAddressMutation, CoreShopDeleteAddressMutationVariables>({
        query: print(CoreShopDeleteAddress),
        variables: {
            addressId,
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopDeleteAddress?.__typename === 'CoreShopDeleteAddressResult') {
        return res.data.CoreShopDeleteAddress;
    }

    if (res.data?.CoreShopDeleteAddress?.__typename === 'CoreShopError') {
        throw new Error(res.data.CoreShopDeleteAddress.message ?? 'An unknown error occurred.');
    }

    if (res.data?.CoreShopDeleteAddress?.__typename === 'CoreShopValidationError') {
        throw new Error(res.data.CoreShopDeleteAddress.message ?? 'Validation errors occurred.');
    }

    return null;
}

export async function getOrders(): Promise<OrderFragment[] | null> {
    const res = await coreShopFetch<CoreShopOrderListQuery, CoreShopOrderListQueryVariables>({
        query: print(CoreShopOrderList),
        variables: {},
        cache: "no-cache"
    });

    if (res.data.CoreShopOrderList?.__typename === 'CoreShopOrderListResult') {
        return res.data.CoreShopOrderList?.orders as OrderFragment[];
    }

    return null;

}

export async function UpdatePassword({password }: { password: string }): Promise<CoreShopUpdatePasswordResult | null> {

    const res = await coreShopFetch<CoreShopUpdatePasswordMutation, CoreShopUpdatePasswordMutationVariables>({
        query: print(CoreShopUpdatePassword),
        variables: {
            password
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopUpdatePassword?.__typename === 'CoreShopUpdatePasswordResult') {
        return res.data.CoreShopUpdatePassword;
    }

    if (res.data?.CoreShopUpdatePassword?.__typename === 'CoreShopError') {
        throw new Error(res.data.CoreShopUpdatePassword.message ?? 'An unknown error occurred.');
    }

    if (res.data?.CoreShopUpdatePassword?.__typename === 'CoreShopValidationError') {
        throw new Error(res.data.CoreShopUpdatePassword.message ?? 'Validation errors occurred.');
    }

    return null;
}

export async function getCheckoutOrder({order}:{order: OrderInput}): Promise<boolean | null > {
    const res = await coreShopFetch<CoreShopCheckoutOrderMutation, CoreShopCheckoutOrderMutationVariables>({
        query: print(CoreShopCheckoutOrder),
        variables: {
            order: {
                token: order.token,
            },
        },
        cache: "no-cache"
    });

    if (res.data.CoreShopCheckoutOrder?.__typename === 'CoreShopCheckoutOrderResult') {
        return true;
    }

    return null;

}

export async function ResetPassword({username }: { username: string }): Promise<CoreShopPasswordResetRequestResult | string | null | CoreShopError> {

    const res = await coreShopFetch<CoreShopPasswordResetRequestMutation, CoreShopPasswordResetRequestMutationVariables>({
        query: print(CoreShopPasswordResetRequest),
        variables: {
            username
        },
        cache: "no-cache"
    });

    if (res.data?.CoreShopPasswordResetRequest?.__typename === 'CoreShopPasswordResetRequestResult') {
        return res.data.CoreShopPasswordResetRequest;
    }

    if (res.data?.CoreShopPasswordResetRequest?.__typename === 'CoreShopError') {
        return res.data.CoreShopPasswordResetRequest;
    }

    return null;
}
