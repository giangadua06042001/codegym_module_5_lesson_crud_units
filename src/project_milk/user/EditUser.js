import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditUser() {
    const {id} = useParams();
    const nav = useNavigate();
    const [user, setUser] = useState({
        userName: "",
        fullName: "",
        password: "",
        phone: "",
        email: "",
        address: ""
    })
    useEffect(() => {
        axios.get(`http://localhost:8080/user/${id}`).then(res => {
            setUser(res.data);
            console.log(id);
        })
    }, [])
    return (
        <>
            <h1>Edit user</h1>
            <Formik initialValues={user} onSubmit={values => {
                axios.put(`http://localhost:8080/user/${id}`, values).then(() => {
                    nav("/")
                })
            }

            }
                    enableReinitialize={true}
            >
                <Form>
                    <tbody>
                    <table>
                        <tr>
                            <td>UserName</td>
                            <td>
                                <Field name={"userName"}></Field>
                            </td>
                        </tr>
                          <tr>
                            <td>FullName</td>
                            <td>
                                <Field name={"fullName"}></Field>
                            </td>
                        </tr>
                          <tr>
                            <td>Password</td>
                            <td>
                                <Field name={"password"}></Field>
                            </td>
                        </tr>
                          <tr>
                            <td>Phone</td>
                            <td>
                                <Field name={"phone"}></Field>
                            </td>
                        </tr>
                          <tr>
                            <td>Email</td>
                            <td>
                                <Field name={"email"}></Field>
                            </td>
                        </tr>
                         <tr>
                            <td>Address</td>
                            <td>
                                <Field name={"address"}></Field>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button>Update</button>
                            </td>
                        </tr>

                    </table>
                    </tbody>
                </Form>

            </Formik>
        </>
    )

}