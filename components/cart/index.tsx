import {cookies} from "next/headers";
import {getOrder} from "@/lib";
import CartWidget from "@/components/cart/widget";
export default async function Cart() {
    //const categories = await getCategories();
    const cartToken = (await cookies()).get('cartToken')?.value;
    let cart;

    if (cartToken) {
        cart = await getOrder({cartToken: cartToken});
    }

    return <CartWidget cart={cart ?? null}/>;
}