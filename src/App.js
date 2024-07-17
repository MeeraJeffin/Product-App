import logo from './logo.svg';
import './App.css';
import Secondstart from './Second project/Secondstart';
import Productform from './Second project/Productform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Editform from './Second project/Editform';

const Context = createContext();
function App() {
  const api="https://dummyjson.com/products";
  useEffect(() => {
      axios.get(api).then((res) => setproduct(res.data.products))
      
  }, []);
  const [product, setproduct] = useState([])
  const [data, setdata] = useState({title:"",category:"",price:"",stock:""})
  const [pass, setpass] = useState(true)
  const [editRowId, setEditRowId] = useState("");
  return (
    <div >
      
      <Context.Provider value={{pass,setpass,data,setdata,api,product,setproduct,editRowId,setEditRowId}}>
      <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Secondstart />} />
      <Route path="/form" element={<Productform />} />
      <Route path="/edit" element={<Editform />} />
      </Routes>
      
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
export {Context};