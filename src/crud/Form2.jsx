import React,{useState} from 'react';
import  Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

const Form2 = (props) => {
const[formData,setFormData]=useState({
    code:'',
    product:'',
    qty:'',
    price:''

});

const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
    
}

const handleSubmit=(e)=>{
e.preventDefault();

props.addFormData(formData)
}


  return (
<>

<div>
    {JSON.stringify(formData)}
<Form onSubmit={(e)=>handleSubmit(e)}>
    <form-group><label htmlFor="">code</label><Form.Control onChange={(e)=>handleChange(e)} type="text" name="code" id="" /></form-group>
    <form-group><label htmlFor="">product</label><Form.Control onChange={(e)=>handleChange(e)} type="text" name="product" id="" /></form-group>
    <form-group><label htmlFor="">  Quantity</label><Form.Control onChange={(e)=>handleChange(e)} type="text" name="qty" id="" /></form-group>
    <form-group><label htmlFor="">Price</label><Form.Control onChange={(e)=>handleChange(e)} type="text" name="price" id="" /></form-group>
    <br />

    <Button type='submit'>submit</Button>
</Form>

</div>
</>



  
  )
}

export default Form2