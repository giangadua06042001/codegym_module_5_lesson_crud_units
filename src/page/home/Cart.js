import {useNavigate} from "react-router-dom";

export default  function Cart(){
    const nav=useNavigate();
    return(
        <>
            <h1>Gio hang</h1>
            <button onClick={()=>{
            nav('/list',{
                state:{
                    name:"tom",age:22
                }
                })
            }
            }>List Product</button>
        </>
    )
}