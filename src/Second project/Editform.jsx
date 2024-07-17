import React, { useContext, useState } from 'react'
import { Button, Form,  ToastBody, } from 'react-bootstrap';
import { Context } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer }  from "react-toastify"

const Editform = () => {
  
    const {setpass,editRowId,setEditRowId,product,setproduct} = useContext(Context)
    const [data, setdata] = useState({ title:editRowId.title,category:editRowId.category,price:editRowId.price,stock:editRowId.stock})
    const editData=(i)=>{
        console.log(i.target.value);
        
        setdata({...data,[i.target.name]:i.target.value})
      }
      const nav=useNavigate()
      const Submit=(i)=>{
        i.preventDefault();
       console.log(data);
      const newArray=[...product]
      if(editRowId){
        const index=product.findIndex(i=>i.id===editRowId.id);
        if(index!==-1)
          {
          newArray[index]={...editRowId,...data}
        }
      
      else{
         newArray.push(data)
      }
    }
      toast("Edited successfully")
        setproduct(newArray)
        console.log(newArray);
        setTimeout(() => {
          nav("/")
        }, 3000);
      
    }
    console.log(editRowId);

  return (

    <div style={{marginTop:"30px"}}>
    <h1 className="text-center"> EDIT FORM </h1>
    {editRowId &&(
      
    <Form className="w-50 m-auto" onSubmit={Submit}>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>title</Form.Label>
   <Form.Control type="text" placeholder=""  onChange={editData} name="title" defaultValue={editRowId.title}/>
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label> category</Form.Label>
   <Form.Control type="text" placeholder=""  onChange={editData} name="category" defaultValue={editRowId.category}/>
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>price</Form.Label>
   <Form.Control type="text" placeholder=""  onChange={editData} name="price" defaultValue={editRowId.price}/>
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>stock</Form.Label>
   <Form.Control type="text" placeholder="" onChange={editData} name="stock" defaultValue={editRowId.stock}/>
   </Form.Group>

 
 <Button variant="primary" type="submit" >
   Edit
 </Button>
 <ToastContainer />
</Form>

)}
 
</div>
  )
}

export default Editform