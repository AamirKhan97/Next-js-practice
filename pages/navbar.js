import {React} from "react";
import Link from "next/link"

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-md">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                       <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item mx-2">
                       <Link href="/blogs" className="nav-link">Blogs</Link>
                    </li>
                    <li className="nav-item mx-2">
                       <Link href="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item mx-2">
                       <Link href="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
};
export default Navbar;