import {getCategories} from "@/lib";
import Link from "next/link";

export default async function CategoryMenuLeft() {
    const categories = await getCategories();

    return (
        <div>
            <h3 className="side-heading">Categories</h3>
            <div className="list-group categories">
                {categories && categories.map((item, index) => (
                    <Link key={index} href={`/category/${item.id}`} className="list-group-item">
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
