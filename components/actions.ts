'use server';

import {cookies} from "next/headers";
import {
    addItemToOrder,
    addVoucherCode, checkoutAddress, checkoutCustomerAddress, checkoutGuestAddress,
    checkoutGuestRegistration, checkoutPayment, checkoutShipping, deleteCustomerAddress, getOrder,
    removeOrderItem,
    removeVoucherCode, updateCustomerAddress,
    updateOrderItem
} from "@/lib";
import {revalidateTag} from "next/cache";
import {
    AddressInput,
    CarrierEnumType, CheckoutAddressInput,
    CountryEnumType,
    GuestRegistrationInput,
    PaymentProviderEnumType
} from "@/lib/graphql/types.generated";
import {redirect} from "next/navigation";
import {AddressType, GuestCustomerType} from "@/schema/CustomerRegistration";

export async function addItemToCart(state: any, {productId, quantity}: { productId: number, quantity: number }) {
    const token = cookies().get('cartToken')?.value;

    const order = await addItemToOrder({token, productId, quantity});

    if (order) {
        cookies().set('cartToken', order.token as string);
    }

    revalidateTag('cart');
}

export async function updateItemQuantity(state: any, {orderItemId, quantity}: {
    orderItemId: number,
    quantity: number
}) {
    const token = cookies().get('cartToken')?.value;

    if (!token) {
        return;
    }

    if (quantity === 0) {
        await removeOrderItem({token, orderItemId});
    } else {
        await updateOrderItem({token, orderItemId, quantity});
    }

    revalidateTag('cart');
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

    const token = cookies().get('cartToken')?.value;

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

    const token = cookies().get('cartToken')?.value;

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

    const token = cookies().get('cartToken')?.value;

    if (!token) {
        return;
    }

    const result = await checkoutCustomerAddress({address});

    if (result) {
        revalidateTag('cart');
    }
}

export async function checkoutShippingForm(state: any, formData: FormData): Promise<any> {
    const carrier = formData.get('carrier') as CarrierEnumType;

    const token = cookies().get('cartToken')?.value;

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

    const token = cookies().get('cartToken')?.value;

    if (!token) {
        return;
    }

    const result = await checkoutPayment({token, paymentProvider});

    if (result) {
        redirect('/checkout/summary');
    }
}

export async function addVoucher({voucherCode}: { voucherCode: string }): Promise<void | any> {
    const token = cookies().get('cartToken')?.value;

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

    revalidateTag('cart');
}

export async function removeVoucher(state: any, {voucherCode}: { voucherCode: string }) {
    const token = cookies().get('cartToken')?.value;

    if (!token) {
        return;
    }

    await removeVoucherCode({token, voucherCode});

    revalidateTag('cart');
}


export async function setCustomerCartAddress(state: any, address: CheckoutAddressInput): Promise<any> {

    const cartAddresses: CheckoutAddressInput = {
        invoiceAddressId: address.invoiceAddressId,
        shippingAddressId: address.invoiceAddressIsShippingAddress ? address.invoiceAddressId : address.shippingAddressId,
        invoiceAddressIsShippingAddress: address.invoiceAddressIsShippingAddress,
        order: {token: ''}
    };

    const token = cookies().get('cartToken')?.value;

    if (!token) {
        return;
    }

    const result = await checkoutAddress({token, address: cartAddresses});

    if (result) {
        revalidateTag('cart');
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
    console.log(result);
    if (result) {
        redirect('/profile/addresses');
    }
}
