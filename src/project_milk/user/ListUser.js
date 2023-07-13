import {useEffect, useState} from "react";
import axios from "axios";
import {Link, Outlet} from "react-router-dom";

export default function ListUser() {
    const [listUser, setListUser] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/user").then(res => {
            console.log(res)
            setListUser(res.data)
        })
    }, [])
    return (
        <>
            <h1>List user</h1>
            <Link to={'/create'}>Creat new User</Link>
            <Outlet></Outlet>
            <tbody>

            <table border='1'>
                <tr>
                    <th>UserName</th>
                    <th>FullName</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Admin</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                {
                    listUser.map(item => {
                        return (
                            <tr>
                                <td>{item.userName}</td>
                                <td>{item.fullName}</td>
                                <td>{item.password}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.address}</td>
                                <td><Link to={`/detail/${item.admin.id}`}> {item.admin.userName}</Link></td>
                              <td><Link to={`/delete/${item.id}`}>
                                  Delete
                              </Link></td>
                                <td>
                                    <Link to={`/edit/${item.id}`}>
                                        Edit
                                    </Link>
                                </td>


                            </tr>
                        )
                    })
                }

            </table>
            </tbody>
        </>
    )

}