import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function OrderPage() {
    const session = await auth();
    if (!session) {
        return (redirect('/'));
    }
    return <div>Order</div>
}