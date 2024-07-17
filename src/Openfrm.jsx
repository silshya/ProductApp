import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { test } from './App';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';



const Openfrm = () => {
  

    const {setshow,product,setproduct,editItem}=useContext(test)
    console.log(test);
 useEffect(() => {
  setshow(false)
 }, [])
 const [input, setinput] = useState({
  brand:editItem.brand,
  category:editItem.category,
  price:editItem.price,
  availabilityStatus:editItem.availabilityStatus

});
 const getInput=(item)=>{
  console.log(item.target.value);
  setinput({...input,[item.target.name]:item.target.value})
 }
 const navigate=useNavigate()
 const submit=(item)=>{
  item.preventDefault();
  const added=[...product,input]
  setproduct(added)
  console.log(added);
  toast("Addedd Successfully")
  setTimeout(() => {
    navigate('/') 
  },3000);
  
 }
 
 
 
  return (
    <div>
      <h2 > <center><u>Add Product</u></center></h2>
    <Form  className='w-50 m-auto' onSubmit={submit}>
    <Form className='w-50 m-auto'>
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label>Product Brand</Form.Label>
        <Form.Control type="text" placeholder="Enter Brand"name='brand' onChange={getInput}/>
       
      </Form.Group>
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Category" name='category' onChange={getInput} />
       
      </Form.Group>
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" name='price' onChange={getInput}/>
       
      </Form.Group>
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label>Availability</Form.Label>
        <Form.Control type="text" placeholder="Enter availability" name='availabilityStatus' onChange={getInput}/>
        </Form.Group>
      </Form>

       <Button  variant="primary" type="submit">
        Add
      </Button>
      <ToastContainer />
    </Form>
    
    </div>
  )
}

export default Openfrm