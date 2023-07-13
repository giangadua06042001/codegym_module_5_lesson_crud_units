import {Link, Outlet} from "react-router-dom";
import Nav from "../../compinet/Nav";

export default function Home() {
    return (
        <>
            <Nav></Nav>
                < Link to={'cart'}>Cart</Link>
                <Link to={'list'}>ListProduct</Link>
                <Outlet></Outlet>


        </>
    )
}