'use server';

import {cookies} from "next/headers";
import {
    addItemToOrder,
    addVoucherCode,
    authorize,
    checkoutAddress,
    checkoutCustomerAddress,
    checkoutGuestAddress,
    checkoutGuestRegistration,
    checkoutPayment,
    checkoutShipping,
    deleteCustomerAddress,
    getCheckoutOrder,
    getCoreshopMe,
    getOrder,
    removeOrderItem,
    removeVoucherCode,
    ResetPassword,
    updateCoreshopMe,
    updateCustomerAddress,
    updateOrderItem,
    UpdatePassword
} from "@/lib";
import {updateTag} from "next/cache";
import {
    AddressInput,
    CarrierEnumType,
    CheckoutAddressInput,
    CoreShopAuthorizeResult,
    CountryEnumType,
    GuestRegistrationInput,
    MeInput,
    OrderInput,
    PaymentProviderEnumType
} from "@/lib/graphql/types.generated";
import {redirect} from "next/navigation";
import {AddressType, GuestCustomerType} from "@/schema/CustomerRegistration";

export async function addItemToCart(state: any, {productId, quantity}: { productId: number, quantity: number }) {
    const token = (await cookies()).get('cartToken')?.value;

    const order = await addItemToOrder({token, productId, quantity});

    if (order) {
        (await cookies()).set('cartToken', order.token as string);
    }

    updateTag('cart');
}

export async function updateItemQuantity(state: any, {orderItemId, quantity}: {
    orderItemId: number,
    quantity: number
}) {
    const token = (await cookies()).get('cartToken')?.value;

    if (!token) {
        return;
    }

    if (quantity === 0) {
        await removeOrderItem({token, orderItemId});
    } else {
        await updateOrderItem({token, orderItemId, quantity});
    }

    updateTag('cart');
}

export async function addVoucherForm(state: any, formData: FormData): Promise<any> {
    const voucherCode = formData.get('voucherCode');

    if (null !== voucherCode) {
        return await addVoucher({voucherCode: voucherCode as string});
    }
}

export async function registerGuestCustomer(state: any, user: GuestCustomerType): Promise<any> {
    const guestCustomer: GuestRegistrationInput = {
        gender: user.gender,
        salutation: user.salutation,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        address: {
            company: user.address.company,
            salutation: user.address.salutation,
            firstname: user.address.firstname,
            lastname: user.address.lastname,
            street: user.address.street,
            number: user.address.number,
            postcode: user.address.postcode,
            city: user.address.city,
            country: CountryEnumType.Austria,
            phoneNumber: user.address.phoneNumber,
        },
    };

    const token = (await cookies()).get('cartToken')?.value;

    if (!token) {
        return;
    }

    const result = await checkoutGuestRegistration({token, guestCustomer});

    if (result) {
        redirect('/checkout/address');
    }
}

export async function registerGuestCartAddress(state: any, address: AddressType): Promise<any> {
    const invoiceAddress: AddressInput = {
        company: address.company,
        salutation: address.salutation,
        firstname: address.firstname,
        lastname: address.lastname,
        street: address.street,
        number: address.number,
        postcode: address.postcode,
        city: address.city,
        country: CountryEnumType.Austria,
        phoneNumber: address.phoneNumber,
    };

    const token = (await cookies()).get('cartToken')?.value;

    if (!token) {
        return;
    }


    const result = await checkoutGuestAddress({token, invoiceAddress, shippingAddress: undefined});

    if (result) {
        redirect('/checkout/shipping');
    }
}

export async function registerCustomerCartAddress(state: any, invoiceAddress: AddressType): Promise<any> {
    const address: AddressInput = {
        company: invoiceAddress.company,
        salutation: invoiceAddress.salutation,
        firstname: invoiceAddress.firstname,
        lastname: invoiceAddress.lastname,
        street: invoiceAddress.street,
        number: invoiceAddress.number,
        postcode: invoiceAddress.postcode,
        city: invoiceAddress.city,
        country: CountryEnumType.Austria,
        phoneNumber: invoiceAddress.phoneNumber,
    };

    const token = (await cookies()).get('cartToken')?.value;

    if (!token) {
        return;
    }

    const result = await checkoutCustomerAddress({address});

    if (result) {
        updateTag('cart');
    }
}

export async function checkoutShippingForm(state: any, formData: FormData): Promise<any> {
    const carrier = formData.get('carrier') as CarrierEnumType;

    const token = (await cookies()).get('cartToken')?.value;

    if (!token) {
        return;
    }

    const result = await checkoutShipping({token, carrier});

    if (result) {
        redirect('/checkout/payment');
    }
}
export async function checkoutPaymentForm(state: any, formData: FormData): Promise<any> {
    const paymentProvider = formData.get('paymentProvider') as PaymentProviderEnumType;

    const token = (await cookies()).get('cartToken')?.value;

    if (!token) {
        return;
    }

    const result = await checkoutPayment({token, paymentProvider});

    if (result) {
        redirect('/checkout/summary');
    }
}

export async function addVoucher({voucherCode}: { voucherCode: string }): Promise<void | any> {
    const token = (await cookies()).get('cartToken')?.value;

    if (!token) {
        return;
    }

    try {
        await addVoucherCode({token, voucherCode});
    } catch (error) {
        if (error instanceof Error) {
            return {message: error.message};
        }
    }

    updateTag('cart');
}

export async function removeVoucher(state: any, {voucherCode}: { voucherCode: string }) {
    const token = (await cookies()).get('cartToken')?.value;

    if (!token) {
        return;
    }

    await removeVoucherCode({token, voucherCode});

    updateTag('cart');
}


export async function setCustomerCartAddress(state: any, address: CheckoutAddressInput): Promise<any> {

    const cartAddresses: CheckoutAddressInput = {
        invoiceAddressId: address.invoiceAddressId,
        shippingAddressId: address.invoiceAddressIsShippingAddress ? address.invoiceAddressId : address.shippingAddressId,
        invoiceAddressIsShippingAddress: address.invoiceAddressIsShippingAddress,
        order: {token: ''}
    };

    const token = (await cookies()).get('cartToken')?.value;

    if (!token) {
        return;
    }

    const result = await checkoutAddress({token, address: cartAddresses});

    if (result) {
        updateTag('cart');
    }
}
export async function updateCustomerAddressAction(state: any, addressId: number, address: Omit<AddressType, "termsAccepted">): Promise<any> {
    const result = await updateCustomerAddress({addressId: addressId, address: address});

    if (result) {
        redirect('/profile/addresses');
    }
}

export async function deleteCustomerAddressAction(state: any, addressId: number): Promise<any> {
    const result = await deleteCustomerAddress({addressId: addressId});

    if (result) {
        redirect('/profile/addresses');
    }
}

export async function updateMeAction(state: any, me:MeInput): Promise<any> {
    const result = await updateCoreshopMe({me: me});

    if (result) {
        redirect('/profile/personal');
    }
}

export async function getOrderAction(state: any, token: string): Promise<any> {
    if(token) {
        const order = await getOrder({cartToken: token});
        return order;
    } else {
        return null;
    }
}

export async function updatePasswordAction(state: any, password:string): Promise<any> {
    const result = await UpdatePassword({password: password});

    if (result) {
        redirect('/profile/password');
    }
}

export async function validateCurrentPassword(state: any, password:string): Promise<CoreShopAuthorizeResult | null> {
    const me = await getCoreshopMe();
    let username = 'empty';
    username = me?.email as string;
    return await authorize({username: username, password: password, orderToken: null});
}

export async function checkOutOrder(state: any, order: OrderInput ): Promise<any> {
    const result = await getCheckoutOrder({order: order});

    if (result) {
        (await cookies()).delete('cartToken');
        redirect('/');
    }
}

export async function productVariantAction(state: any, url: string | null ): Promise<any> {
    if (url) {
        redirect(url);
    }
}

export async function resetPasswordAction(state: any, username: string ): Promise<any> {
    return await ResetPassword({username});
}

export async function addVoucherCodeAction(state: any, token: string, voucherCode: string ): Promise<any> {
    const result = await addVoucherCode({token, voucherCode});
    if(result?.__typename !== 'CoreShopError') {
        updateTag('cart');
    }

    return result;
}




