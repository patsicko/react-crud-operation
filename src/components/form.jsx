import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';
import Table1 from './Table1';



const Form1 = () => {

const[tableData,setTableData]=useState([{
    id:'',
    name:'',
    qty:'',
    price:''

}])  

const[formData,setFormData]=useState({
    id:'',
    name:'',
    qty:'',
    price:''

})

const handleFormData=(e)=>{
    
    setFormData({...formData,[e.target.name]:e.target.value})
}


const handleSubmit=(e)=>{
    e.preventDefault();
const newData={
    id:formData.id,
    name:formData.name,
    qty:formData.name,
    price:formData.price
}

const data=[...tableData,newData];
setTableData(data);


  
}

return(

    <>
    
              
{JSON.stringify(formData) } 
            

<Form onSubmit={(e)=>handleSubmit(e)}>
    <form-group><label htmlFor="">Id</label><Form.Control  onChange={handleFormData} type="text" name="id" id="" /></form-group>
    <form-group><label htmlFor="">Name</label><Form.Control  onChange={handleFormData}type="text" name="name" id="" /></form-group>
    <form-group><label htmlFor="">Quantity</label><Form.Control  onChange={handleFormData} type="text" name="qty" id="" /></form-group>
    <form-group><label htmlFor="">Price</label><Form.Control  onChange={handleFormData} type="text" name="price" id="" /></form-group>
<br />
    <Button type='submit'  >Add product</Button>
    <Button type='reset'  >reset</Button>

</Form>



{
    
<Table1 data={tableData}/>

        
   }
                
</>
  )
    

}

export default Form1