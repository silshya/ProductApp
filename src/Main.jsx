import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table  } from 'react-bootstrap';
import { BsEyeFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import {Button, Modal} from 'antd'
import { useContext } from 'react';
import { test } from './App';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';



const Main = () => {
    // const [product, setproduct] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false)
    const [first, setfirst] = useState([]);
    const [rows, setrows] = useState({})
    const [searchtest, setsearchtest] = useState("")
    const [filteredData, setfilteredData] = useState([])
    
    
   
    const {setshow,setinput,product,setproduct,api,editItem,seteditItem}=useContext(test)
    console.log(test);
    console.log(setproduct);
    useEffect(() => {
     setshow(true)
     setfilteredData(product)
    }, [product])
    
    console.log(product);
    // const handleSearch=(e)=>{
    //      }
    const showDelete=(item)=>{
      setrows(item)
      setdeleteModal(true)

    }
    console.log(rows);
    const showModal=(item)=>{
        setIsModalOpen(true);
        setfirst(item)
    }
    const handleOk=()=>{
        setIsModalOpen(false);
        
    }
    const handledelete=(index)=>{
     const test=product.filter((row)=>row.id != rows?.id)
    
     setproduct(test)
      setdeleteModal(false)
      toast("Deleted")
    }
    
    const handleCancel=()=>{
        setIsModalOpen(false); 
        setdeleteModal(false)
    }
    const navigate=useNavigate()
    const NavigateToForm=()=>{
      navigate('/form')
    }
    const showEdit=(item)=>{
      seteditItem(item);
      navigate('/edit')
    }
    useEffect(() => {
      
    console.log(setinput);
     
    }, [setinput])
    const handleSearch=()=>{
    const searchdata = product.filter(item =>
      (item.brand && item.brand.toLowerCase().includes(searchtest?.toLowerCase() ?? ''))||
      (item.category && item.category.toLowerCase().includes(searchtest?.toLowerCase() ?? ''))||
      (item.price && item.price.toString().includes(searchtest?.toString() ?? ''))||
      (item.availabilityStatus && item.availabilityStatus.toLowerCase().includes(searchtest?.toLowerCase() ?? ''))

  );
setfilteredData(searchdata)}
    
  return (
    <div>
      
          
     Search <input
      type="text"
      
      value={searchtest}
      onChange={(e) => setsearchtest(e.target.value)}
/>
        <button onClick={handleSearch} >search</button>
        <div>
          
                 <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Availability</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {filteredData.map((item)=>{
          return(
        <tr>
          <td>{item.brand}</td>
          <td>{item.category}</td>
          <td>{item.price}</td>
          <td>{item.availabilityStatus}</td>
          <td><BsEyeFill onClick={()=>showModal(item)}/>&nbsp;&nbsp;
          <BsPencilSquare onClick={()=>showEdit(item)} />&nbsp;&nbsp;
          <BsFillTrashFill onClick={()=>showDelete(item)}/></td>
          
    
 

         
        </tr>
          )})}
      </tbody>
    </Table>
    <button onClick={NavigateToForm}>Create Product</button>
    
    <Modal title="View" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <body> 
         <img src={first.images} alt="" height={"120vh"} /> <br />
         <h4> <b>Brand:</b>{first.brand} <br />
        <b>Category:</b>  {first.category} <br />
        <b>Price:</b>{first.price} <br />
        <b>Availability:</b>{first.availabilityStatus}
        </h4>
       </body>
      </Modal>
      <Modal title="Delete" open={deleteModal}  footer={[
                <Button key="cancel" onClick={handleCancel}>Cancel</Button>,
                <Button key="delete" type="primary" danger onClick={handledelete}>Delete</Button>
               

        ]}>
        
        
        <body> 
         
         <h4> Are You Sure You Want To Delete..?
        </h4>
       </body>
      </Modal>
      <ToastContainer /> 
    </div>
    </div>
  )
}

export default Main