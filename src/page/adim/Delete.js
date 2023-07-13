import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Form, Formik} from "formik";

export default function Delete(){
    const {id}=useParams();
    const nav=useNavigate();
    const [product,setProduct]=useState({
        name: "",
        weight: "",
        price: "",
        shape: "",
        dateOfManufacture: ""
    });
    let comeBack=()=>{
        nav('/list')
    }
    useEffect(()=>{
        axios.get(`http://localhost:8080/product/${id}`).then(res => {
            setProduct(res.data)
            console.log(id);
        })
    }, []
    )
    return(
        <>
            <h3>Delete Product</h3>
           <Formik initialValues={product} onSubmit={(values)=>{
           axios.delete(`http://localhost:8080/product/${id}`, values).then(()=>{
               nav("/list")
           })}
           }>
               <Form>
                   <table>
                       <tr>
                           <td>Name:</td>
                           <td>{product.name}</td>
                       </tr>
                       <tr>
                           <td>Weight:</td>
                           <td>{product.weight}</td>
                       </tr>
                       <tr>
                           <td>Price:</td>
                           <td>{product.price}</td>
                       </tr>
                       <tr>
                           <td>Shape:</td>
                           <td>{product.shape}</td>
                       </tr>
                       <tr>
                           <td>DateOfManufacture:</td>
                           <td>{product.dateOfManufacture}</td>
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