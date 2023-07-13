import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export default function CreateUser() {
    const [admin, setListAdmin] = useState([])
    const [user, listUser] = useState({
        userName: "",
        fullName: "",
        password: "",
        phone: "",
        email: "",
        address: "",
        admin: {
            id: "",
            userName: "",
            fullName: "",
            password: "",
            phone: "",
            email: ""

        }
    })
    useEffect(() => {
        axios.get("http://localhost:8080/admin").then((response) => {
            console.log(response)
            setListAdmin(response.data)
        })
    }, [])
    const handleFormSubmit = value => {
        const updatedUser = {
            ...value, admin: {
                id: value.admin
            }
        };
        axios.post("http://localhost:8080/user", updatedUser).then(() => {
        })
    }
    return (
        <>
            <h1>Add New User</h1>
            <Link to={'/'}>Go to list User</Link>
            <Formik initialValues={user} onSubmit={handleFormSubmit}>
                <Form>
                    <tbody>
                    <table>
                       <tr>
                           <td>UserName</td>
                           <td>
                               <Field type={"text"} name={"userName"}></Field>
                           </td>
                       </tr>
                         <tr>
                           <td>FullName</td>
                           <td>
                               <Field type={"text"} name={"fullName"}></Field>
                           </td>
                       </tr>
                         <tr>
                           <td>Password</td>
                           <td>
                               <Field type={"text"} name={"password"}></Field>
                           </td>
                       </tr>
                         <tr>
                           <td>Phone</td>
                           <td>
                               <Field type={"text"} name={"phone"}></Field>
                           </td>
                       </tr>
                         <tr>
                           <td>Email</td>
                           <td>
                               <Field type={"text"} name={"email"}></Field>
                           </td>
                       </tr>
                        <tr>
                           <td>Address</td>
                           <td>
                               <Field type={"text"} name={"address"}></Field>
                           </td>
                       </tr>
                        <tr>
                            <td>
                                <Field as="select" name="admin">
                                    <option value=''>Select Category</option>
                                    {admin.map((admin) => (<option value={admin.id}>
                                        {admin.fullName}
                                    </option>))}
                                </Field>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type={'submit'}>Save</button>
                            </td>
                        </tr>

                    </table>
                    </tbody>
                </Form>
            </Formik>
        </>
    )
}