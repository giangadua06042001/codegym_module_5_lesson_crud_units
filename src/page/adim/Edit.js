import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function Edit() {
    const {id} = useParams()
    const nav = useNavigate();
    const [sate, setSate] = useState({
        name: "",
        weight: "",
        price: "",
        shape: "",
        dateOfManufacture: ""
    })


    useEffect(() => {
        axios.get(`http://localhost:8080/product/${id}`).then(res => {
            setSate(res.data)
            console.log(id);
        })
    }, [])

    return (
        <>
            <h3>Edit Product</h3>
            <Formik initialValues={sate} onSubmit={(values) => {
                axios.put(`http://localhost:8080/product/${id}`, values).then(() => {
                    nav("/list")
                })
            }
            }
                    enableReinitialize={true}
            >

                <Form>
                    <label>Name</label>
                    <Field name={'name'}></Field>
                    <br/>
                    <label>Weight</label>
                    <Field name={'weight'}></Field>
                    <br/>
                    <label>Price</label>
                    <Field name={'price'}></Field>
                    <br/>
                    <label>Shape</label>
                    <Field name={'shape'}></Field>
                    <br/>
                    <label>DateOfManufacture</label>
                    <Field name={'dateOfManufacture'}></Field>
                    <button>Submit</button>
                </Form>

            </Formik>


        </>

    )
}