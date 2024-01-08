import {signOut} from "@/auth";
import {cookies} from "next/headers";

export function Logout() {
    return (
        <li className="nav-item">
            <form action={async () => {
                "use server"

                cookies().delete('cartToken');
                await signOut();
            }}>
                <button className="btn btn-secondary nav-link">
                    Logout
                </button>
            </form>
        </li>
    )
}