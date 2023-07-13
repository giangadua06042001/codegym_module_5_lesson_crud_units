import './App.css';
import ListProductPr from "./project_milk/product/ListProductPr";
import {Route, Routes} from "react-router-dom";
import EditProduct from "./project_milk/product/EditProduct";



function App() {

    return (
      <>
         <Routes>
             <Route path={'/'} element={<ListProductPr/>}></Route>
             <Route path={'/edit/:id'} element={<EditProduct/>}></Route>
         </Routes>
      </>
    );
}

export default App;
