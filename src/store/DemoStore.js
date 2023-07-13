import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import axios from "axios";
const setUp=(initialState,action)=>{
    if (action.type==="a"){
        return action.data
    }
    return{
        name:"Nguyen Thi Ha"
    }
}

const store=createStore(setUp,applyMiddleware(thunk))
export default store;
export const getData=()=>{
    return async dispatch=>{
        const res=await axios.get("http://localhost:8080/product")
        dispatch({
            type:"a",
            data :res.data
        })

    }
}