import {Link, Outlet} from "react-router-dom";

export default function Login(){

    return(
        <>
            <Link to={'cart'}>Cart</Link>
            <Link to={'add'}>Add new Product</Link>
            <Link to={'edit/:id'}>edit</Link>
            <Outlet></Outlet>

        </>
    )

}