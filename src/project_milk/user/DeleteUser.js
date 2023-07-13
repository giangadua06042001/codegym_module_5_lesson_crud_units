import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Form, Formik} from "formik";

export default function DeleteUser(){
    const {id}=useParams();
    const nav=useNavigate();
    const [user,setUser]=useState({
        userName: "",
        fullName: "",
        password: "",
        phone: "",
        email: "",
        address: ""
    })
    const comeback=()=>{
        nav('/')
    }
    useEffect(()=>{
        axios.get(`http://localhost:8080/user/${id}`).then(res=>{
            setUser(res.data)
        })
    },[])
    return(
        <>
            <h1>Page Delete</h1>
            <Formik initialValues={user} onSubmit={(values) => {
                axios.delete(`http://localhost:8080/user/${id}`,values).then(()=>{
                    nav('/')
                })
            }
            }>
                <Form>
                    <p>{user.userName}</p>
                    <br/>
                    <p>{user.fullName}</p>
                    <br/>
                    <p>{user.phone}</p>
                    <br/>
                    <p>{user.email}</p>
                    <br/>
                    <p>{user.password}</p>
                    <br/>
                    <p>{user.address}</p>
                    <p>Are you sure you can delete it?</p>
                    <button>yes</button>
                    <button onClick={comeback}>No</button>
                </Form>
            </Formik>
        </>
    )
}