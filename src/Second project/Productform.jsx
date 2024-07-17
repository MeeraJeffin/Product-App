import React, { createContext, useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Context } from '../App';
import Secondstart from './Secondstart';
import { SecurityScanOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer }  from "react-toastify"



const Productform = () => {
  const {setpass,data,setdata,product,setproduct} = useContext(Context)
  console.log(Context);
  // const [data, setdata] = useState({ brand:" ",category:" ",price:" ",stock:" "})
  const getData=(i)=>{
    console.log(i.target.value);
    setdata({...data,[i.target.name]:i.target.value})
  }
  const nav=useNavigate()
  const Submit=(i)=>{
      i.preventDefault();
      const add=[...product,data]
      setproduct(add)
      toast("Addedd successfully")
      setTimeout(() => {
        nav("/")
      },3000);
      console.log(add);
     
  }
  
  useEffect(() => {
     setpass(false)
  }, [])
     
  return (
    <div style={{marginTop:"30px"}}>
         <h1 className="text-center">PRODUCT DETAILS</h1>
         <Form className="w-50 m-auto" onSubmit={Submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder=""  onChange={getData} name="title"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> category</Form.Label>
        <Form.Control type="text" placeholder=""  onChange={getData} name="category"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>price</Form.Label>
        <Form.Control type="text" placeholder=""  onChange={getData} name="price"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>stock</Form.Label>
        <Form.Control type="text" placeholder="" onChange={getData} name="stock" />
        </Form.Group>
    
      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      <ToastContainer />
    </Form>
     
      
    </div>
  )
}

export default Productform
