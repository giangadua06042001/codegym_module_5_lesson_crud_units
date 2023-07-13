import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function AddProduct() {
    return (
        <>

            <h1>Add New Product</h1>
            <Formik initialValues={{
                name: "",
                weight: "",
                price: "",
                shape: "",
                dateOfManufacture: ""
            }} onSubmit={(values,{resetForm}) => {
                axios.post("http://localhost:8080/product", values).then(() => {

                })
                resetForm();

            }}>
                <Form>
                    <label>Name</label>
                    <Field name={'name'}></Field>
                    <br/>
                    <label>weight</label>
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
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}