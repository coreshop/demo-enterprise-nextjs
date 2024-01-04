import {getCategories} from "@/lib";
import Link from "next/link";

export default async function CategoriesWidget() {
    const categories = await getCategories();

    return (
        <nav className="navbar navbar-expand-lg navbar-main-menu navbar-dark bg-red">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCategories"
                        aria-controls="navbarCategories" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCategories">
                    <ul className="navbar-nav mr-auto">
                        {categories && categories.map(item => (
                            <li key={item.id} className="nav-item">
                                <Link href={`/category/${item.id}`} className="nav-link">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
