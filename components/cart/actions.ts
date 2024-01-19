'use server';

import {cookies} from "next/headers";
import {
    addItemToOrder,
    addVoucherCode, checkoutGuestAddress,
    checkoutGuestRegistration,
    removeOrderItem,
    removeVoucherCode,
    updateOrderItem
} from "@/lib";
import {revalidateTag} from "next/cache";
import {AddressInput, CountryEnumType, GuestRegistrationInput} from "@/lib/graphql/types.generated";
import {redirect} from "next/navigation";

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

export async function registerGuestCustomer(state: any, formData: FormData): Promise<any> {
    const guestCustomer: GuestRegistrationInput = {
        gender: formData.get('gender') as string,
        salutation: formData.get('salutation') as string,
        firstname: formData.get('firstname') as string,
        lastname: formData.get('lastname') as string,
        email: formData.get('email') as string,
        address: {
            company: formData.get('address_company') as string,
            salutation: formData.get('address_salutation') as string,
            firstname: formData.get('address_firstname') as string,
            lastname: formData.get('address_lastname') as string,
            street: formData.get('address_street') as string,
            number: formData.get('address_number') as string,
            postcode: formData.get('address_postcode') as string,
            city: formData.get('address_city') as string,
            country: CountryEnumType.Austria,
            phoneNumber: formData.get('address_phoneNumber') as string,
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

export async function registerGuestCartAddress(state: any, formData: FormData): Promise<any> {
    const invoiceAddress: AddressInput = {
        company: formData.get('invoiceAddress_company') as string,
        salutation: formData.get('invoiceAddress_salutation') as string,
        firstname: formData.get('invoiceAddress_firstname') as string,
        lastname: formData.get('invoiceAddress_lastname') as string,
        street: formData.get('invoiceAddress_street') as string,
        number: formData.get('invoiceAddress_number') as string,
        postcode: formData.get('invoiceAddress_postcode') as string,
        city: formData.get('invoiceAddress_city') as string,
        country: CountryEnumType.Austria,
        phoneNumber: formData.get('invoiceAddress_phoneNumber') as string,
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
