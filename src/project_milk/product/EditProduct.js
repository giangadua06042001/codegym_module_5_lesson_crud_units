import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditProduct(){
    const {id}=useParams();
    const nav=useNavigate();
    const [product,setProduct]=useState({
        name:"",
        price:"",
        weight:"",
        p_unit:"",
        rightAway:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:8080/product/${id}`).then(res=>{
            setProduct(res.data)
        })
    },[]);
    return(
        <>
            <h2>Edit Product</h2>
            <Formik initialValues={product} onSubmit={(values)=>{
                axios.put(`http://localhost:8080/product/${id}`,values).then(()=>{
                    nav('/')
                })
            }
            }

                    enableReinitialize={true}>
                <Form>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>
                                <Field name={'name'}></Field>
                            </td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>
                                <Field name={'price'}></Field>
                            </td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>
                                <Field name={'weight'}></Field>
                            </td>
                        </tr>
                        <tr>
                            <td>Unit</td>
                            <td>
                                <Field name={'p_unit'}></Field>
                            </td>
                        </tr>
                        <tr>
                            <td>RightAway</td>
                            <td>
                                <Field name={'rightAway'}></Field>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button>Save</button>
                            </td>
                        </tr>
                    </table>
                </Form>
            </Formik>
        </>
    )
}