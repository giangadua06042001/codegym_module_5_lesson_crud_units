import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DetailUser(){
    const {id}=useParams();
    const [admin,setAdmin]=useState({
        userName:"",
        fullName:"",
        password:"",
        phone:"",
        email:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:8080/admin/${id}`).then(res=>{
            setAdmin(res.data);
        })
    },[])
    return(
        <>
            <h1>List Admin</h1>
            <Link to={'/'}>Back List</Link>
            <tbody>
            <table>
                <tr>
                    <td>UserName:</td>
                    <td>{admin.userName}</td>
                </tr>
                <tr>
                    <td>FullName:</td>
                    <td>{admin.fullName}</td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>{admin.password}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>{admin.phone}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{admin.email}</td>
                </tr>

            </table>
            </tbody>
        </>
    )
}