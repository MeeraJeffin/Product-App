import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Table, Toast } from 'react-bootstrap';
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';
import { toast, ToastContainer } from "react-toastify"



const Secondstart = () => {
  
   const {setpass,product,setproduct,setdata,api,editRowId,setEditRowId} =useContext(Context)
  
   console.log(Context);
   console.log(setproduct);
   
    const nav=useNavigate();
    const Navigate=()=>{
      nav("/form");
     
    }
    const Edit=(i)=>{
      setEditRowId(i)
      nav("/edit");
    }
    console.log(editRowId);
    // const [product, setproduct] = useState([])
    const [modal, setmodal] = useState(false)
    const [select, setselect] = useState([])
    const [deletemodal, setdeletemodal] = useState(false)
    const [deleterow, setdeleterow] = useState({})
    const [searchdata, setsearchdata] = useState("")
    const [filterdata, setfilterdata] = useState([])
    
    const handleClose = () => setmodal(false);

    const handleShow = (i) =>{
      setmodal(true);
      setselect(i)
      console.log(setselect);
    }
    // const api="https://dummyjson.com/products";
    useEffect(() => {
        // axios.get(api).then((res) => setproduct(res.data.products))
        setpass(true)
        setfilterdata(product)
    }, []);
     useEffect(() => {
      console.log(setdata);
     }, [setdata])
     
     const Delete = (i) =>{
      setdeletemodal(true);
      setdeleterow(i)
       }
       const handledelete = (index) => {
        const Context=product.filter((i)=>i.id !== deleterow?.id)
        console.log(Context);
        setproduct(Context)
      setdeletemodal(false);
      toast("Deleted")
       }
      
       const handleCancel=()=>{
        setmodal(false)
        setdeletemodal(false)
       }
       const handlesearch=()=>{
        setsearchdata(product)
        const data=product.filter(i=>(i.title && i.title.toLowerCase().includes(searchdata?.toLowerCase()??''))||(i.category && i.category.toLowerCase().includes(searchdata?.toLowerCase()??''))||(i.price && i.price .toString().includes(searchdata?.toString()??''))||(i.stock && i.stock.toString().includes(searchdata?.toString()??''))
       )
        setfilterdata(data)
       }
       console.log(searchdata);
  return (
    <div>
      Search<input type="text" value={searchdata} onChange={(e)=>setsearchdata(e.target.value)} />
      <button onClick={handlesearch}>Search</button>
    <div>
                <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>category</th>
          <th>title</th>
          <th>price</th>
          <th>stock</th>
          <th>icons</th>
        </tr>
      </thead>
      <tbody>
         {filterdata.map((i)=>{
        return(
              <tr>
          <td>{i.id}</td>
          <td>{i.category}</td>
          <td>{i.title}</td>
          <td>{i.price}</td>
          <td>{i.stock}</td>
          {<EyeOutlined onClick={()=>handleShow(i)} />}
        
          {<EditOutlined  onClick={()=>Edit(i)} />}
          {<DeleteOutlined  onClick={()=>Delete(i)} />}

        </tr>
            )
        })}
         
        
      </tbody>
      
      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body  >
          {select &&(
            <>
           <h4>id:{select.id}</h4>
           <h4>category:{select.category}</h4>
           <h4>title:{select.title}</h4>
           <h4>price:{select.price}</h4>
           <h4>stock:{select.stock}</h4>
           </>
          )}
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
     
         <Modal show={deletemodal} onHide={handledelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are You Sure Want To Delete..?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="primary"  onClick={handledelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
      </Table>
      <button style={{marginLeft:"auto"}} onClick={Navigate} >Create Product</button>    
    
    <ToastContainer />
    </div>
    </div>
  )
}

export default Secondstart