import {useEffect, useState} from "react";
import axios from "axios";
import {Link, Outlet} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export default function ListProductPr() {
    const [product, setProduct] = useState('')
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/product").then(res => {
            setListProduct(res.data);
        })
    }, []);
    const findAllByOrderByPriceDesc = () => {
        axios.get("http://localhost:8080/product/sort").then(res => {
            setListProduct(res.data)
        })
    }
    return (
        <>
            <h3>List Product</h3>
            <Link to={"/create-product"}>Create new Product</Link>
            <Outlet></Outlet>

            <table border='1'>
                <tbody>

                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>RightAway</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                {
                    listProduct.map(item => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.weight}</td>
                                <td>{item.p_unit}</td>
                                <td>{item.rightAway}</td>
                                <td><Link to={`/delete/${item.id}`}>Delete</Link></td>
                                <td><Link to={`/edit/${item.id}`}>Edit</Link></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Formik initialValues={{
                name: "",
                price: "",
                weight: "",
                p_unit: "",
                rightAway: ""
            }} onSubmit={(values) => {
                axios.get(`http://localhost:8080/product/search?name=${values.name}`).then((res) => {
                    setListProduct(res.data)
                })
            }}>
                <Form>
                    <label>search name</label>
                    <Field name={'name'}></Field>
                    <button>Search</button>
                </Form>
            </Formik>
            <button onClick={findAllByOrderByPriceDesc}>sort</button>
        </>
    )
}