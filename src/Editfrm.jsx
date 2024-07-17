import React, { useContext, useState } from 'react'
import { Button, Form, } from 'react-bootstrap'
import { test } from './App'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Editfrm = () => {
    const {product,setproduct,editItem,seteditItem}=useContext(test)
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
        const newArray=[...product]
        if(editItem){
          const index=product.findIndex(item=>item.id===editItem.id);
          if(index!==-1)
            {
              newArray[index]={...editItem,...input};
            }
            else{
              newArray.push(input)
            }
        }
        toast("Edited Successfully");
        setproduct(newArray)
        console.log(newArray);
       
        setTimeout(() => {
          navigate('/') 
        },3000);
       }
       
  return (
    
    <div><h2>Edit Form</h2>
    {editItem && (
    
    <Form  className='w-50 m-auto' onSubmit={submit}>
     
    <Form className='w-50 m-auto'>
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter Brand"name='brand' value={input.brand||editItem.brand} onChange={getInput}/>
       
      </Form.Group>
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Category" name='category' value={input.category||editItem.category} onChange={getInput} />
       
      </Form.Group>
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter price" name='price' value={input.price||editItem.price} onChange={getInput}/>
       
      </Form.Group>
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label>Availability</Form.Label>
        <Form.Control type="text" placeholder="Enter availability" name='availabilityStatus' value={input.availabilityStatus||editItem.availabilityStatus} onChange={getInput}/>
        </Form.Group>
      </Form>

       <Button  variant="primary" type="submit">
       Edit
      </Button>
      <ToastContainer />
    </Form>
    )}
    </div>
  )
}

export default Editfrm