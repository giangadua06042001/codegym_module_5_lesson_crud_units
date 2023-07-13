
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {Link} from "react-router-dom";

export default function CreateProduct(){
  return(
      <>
          <h2>Create new Product</h2>
          <Link to={'/list-product'}>Go to list</Link>
          <Formik initialValues={{
              name:"",
              price:"",
              weight:"",
              p_unit:"",
              rightAway:""
          }} onSubmit={(values,{resetForm})=>{
          axios.post("http://localhost:8080/product",values).then(()=>{

          })
              resetForm();
          }}>
              <Form>
                  <table>
                      <tr>
                          <td>Name</td>
                          <td><Field name={'name'}></Field></td>
                      </tr>
                      <tr>
                          <td>Price</td>
                          <td><Field name={'price'}></Field></td>
                      </tr>
                      <tr>
                          <td>Weight</td>
                          <td><Field name={'weight'}></Field></td>
                      </tr>
                      <tr>
                          <td>Unit</td>
                          <td><Field name={'p_unit'}></Field></td>
                      </tr>
                      <tr>
                          <td>RightAway</td>
                          <td><Field name={'rightAway'}></Field></td>
                      </tr>
                      <tr>
                          <td></td>
                          <td><button>Save</button></td>
                      </tr>
                  </table>

              </Form>
          </Formik>
      </>
  )
}