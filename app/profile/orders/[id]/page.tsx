import OrderDetail from "@/components/profile/OrderDetail";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

export default async function OrderDetailPage() {
    const session = await auth();
    if (!session) {
        return (redirect('/'));
    }

    return <OrderDetail />
}




