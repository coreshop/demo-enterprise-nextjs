import {cookies} from "next/headers";
import {getOrder} from "@/lib";
import CartWidget from "@/components/cart/Widget";
import { revalidateTag } from 'next/cache';
export default async function Cart() {
    // const categories = await getCategories();
    const cartToken = cookies().get('cartToken')?.value;
    let cart;

    if (cartToken) {
        cart = await getOrder({cartToken: cartToken});
    }

    revalidateTag('cart');

    return <CartWidget cart={cart ?? null}/>;
}