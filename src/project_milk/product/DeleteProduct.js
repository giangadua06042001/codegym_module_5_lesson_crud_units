import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Form, Formik} from "formik";

export default function DeleteProduct(){
    const {id}=useParams();
    const nav=useNavigate();
    const [products,setProduct]=useState({
        name: "",
        price: "",
        weight: "",
        p_unit: "",
        rightAway: ""
    });
    let comeBack=()=>{
        nav('/list-product')
    }
    useEffect(()=>{
            axios.get(`http://localhost:8080/product/${id}`).then(res => {
                setProduct(res.data)
            })
        }, []
    )
    return(
        <>
            <h3>Delete Product</h3>
            <Formik initialValues={products} onSubmit={(values)=>{
                axios.delete(`http://localhost:8080/product/${id}`, values).then(()=>{
                    nav("/list-product")
                })}
            }>
                <Form>
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>{products.name}</td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td>{products.price}</td>
                        </tr>
                        <tr>
                            <td>Weight:</td>
                            <td>{products.weight}</td>
                        </tr>
                        <tr>
                            <td>Unit:</td>
                            <td>{products.p_unit}</td>
                        </tr>
                        <tr>
                            <td>RightAway:</td>
                            <td>{products.rightAway}</td>
                        </tr>
                    </table>
                    <p>Are you sure you can delete it?</p>
                    <button>Yes</button>
                    <button onClick={comeBack}>No</button>
                </Form>
            </Formik>
        </>
    )
}