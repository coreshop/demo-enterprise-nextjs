export default function Footer() {
    return (
        <footer>
            <div className="copyright">
                <div className="container">

                    <p className="pull-left">
                        &copy; CoreShop GmbH (GPLv3 and CoreShop Commercial License) | <a href="https://www.coreshop.org">https://www.coreshop.org</a>
                    </p>

                    <ul className="pull-right list-inline">
                        <li className="list-inline-item">
                            <a href="https://www.github.com/coreshop/CoreShop"><i className="fa fa-github text-white"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.coreshop.org"><i className="fa fa-globe text-white"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.facebook.com/coreshop.onlineshop"><i className="fa fa-facebook text-white"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}