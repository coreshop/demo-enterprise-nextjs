'use server';

import {cookies} from "next/headers";
import {addItemToOrder, addVoucherCode, removeOrderItem, removeVoucherCode, updateOrderItem} from "@/lib";
import {revalidateTag} from "next/cache";

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
