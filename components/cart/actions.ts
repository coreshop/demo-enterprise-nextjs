'use server';

import {cookies} from "next/headers";
import {addItemToOrder, removeOrderItem, updateOrderItem} from "@/lib";
import {revalidateTag} from "next/cache";

export async function addItemToCart(state: any, {productId, quantity}: { productId: number, quantity: number }) {
    const token = cookies().get('cartToken')?.value;

    const order = await addItemToOrder({token, productId, quantity});

    if (order) {
        cookies().set('cartToken', order.token as string);
    }

    revalidateTag('cart');
}

export async function updateItemQuantity(state: any, {orderItemId, quantity}: { orderItemId: number, quantity: number }) {
    const token = cookies().get('cartToken')?.value;

    if (!token) {
        return;
    }

    if (quantity === 0) {
        await removeOrderItem({token, orderItemId});
    }
    else {
        await updateOrderItem({token, orderItemId, quantity});
    }

    revalidateTag('cart');
}