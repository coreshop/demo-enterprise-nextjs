'use server';

import {cookies} from "next/headers";
import {addItemToOrder} from "@/lib";

export async function addItemToCart(state: any, {productId, quantity}: { productId: number, quantity: number }) {
    const token = cookies().get('cartToken')?.value;

    const order = await addItemToOrder({token, productId, quantity});

    if (order) {
        cookies().set('cartToken', order.token as string);
    }
}