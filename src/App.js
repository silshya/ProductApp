import logo from './logo.svg';
import './App.css';
import Main from './Main';
import 'react-toastify/dist/ReactToastify.css';

import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Openfrm from './Openfrm';
import axios from 'axios';
import Editfrm from './Editfrm';
import Item from 'antd/es/list/Item';

const test=createContext()
function App() {
  const api="https://dummyjson.com/products";
  useEffect(() => {
    axios.get(api).then((res)=>setproduct(res.data.products));
    }, [])
    const [editItem, seteditItem] = useState("")
  const [product, setproduct] = useState([])
  const [show, setshow] = useState(true)
 
  
  return (
    <div className="App">
      <test.Provider value={{show,setshow,product,setproduct,api,editItem,seteditItem}}>
     
     <BrowserRouter >
     <Routes>
     <Route path='/' element={ <Main />} />
     <Route path='/form' element={<Openfrm />} />
     <Route path='/edit' element={<Editfrm />}></Route>
     </Routes>
     </BrowserRouter>
     </test.Provider>
    </div>
  );
}

export default App;
export {test}
