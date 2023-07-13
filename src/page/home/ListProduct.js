import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
export default function ListProduct() {
    const {state} = useLocation()
    console.log(state)
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/product').then(res => {
            setList(res.data)
        })
    }, [])

    return (
        <>
            <h1>List Product</h1>
            <tbody>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Shape</th>
                    <th>DateOfManufacture</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>

                {list.map(item => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.weight}</td>
                            <td>{item.price}</td>
                            <td>{item.shape}</td>
                            <td>{item.dateOfManufacture}</td>
                            <td>  <Link to={'/edit/' + item.id}>
                                <button>Edit</button>
                            </Link></td>
                            <td>
                                <Link to={'/delete/' + item.id}>
                                    <button>Delete</button>
                                </Link>
                            </td>

                        </tr>

                    )
                })}
            </table>
            </tbody>

        </>


    )
}