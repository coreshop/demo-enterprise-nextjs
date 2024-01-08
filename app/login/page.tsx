import LoginForm from "@/components/security/login";
import {redirect} from "next/navigation";
import {auth} from "@/auth";

export default async function ProductDetailPage() {
    const session = await auth()

    // @ts-ignore
    if (session && session.hasOwnProperty('accessToken') && session.accessToken !== null) {
        return (redirect('/'));
    }

    return (
        <LoginForm />
    )
}