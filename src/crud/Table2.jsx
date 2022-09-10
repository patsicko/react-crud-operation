import React,{useState} from 'react';
import Form2 from './Form2';
import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap';


const Table2 = () => {

    const[tableData,setTableData]=useState([])

    const handleData=(formData)=>{
        
    setTableData([...tableData,formData])
    }
 console.log(tableData)

const handleDelete=(item)=>{
    const update=tableData.filter(product=>product.code!==item.code);
    setTableData(update)
}
  return (
   <>
   <Form2 addFormData={handleData}/>

    <Table>
        <thead>
            
            <tr>
                <td>Code</td>
                <td>Product</td>
                <td>Quantity</td>
                <td>Price</td>
                <td></td>
            </tr>
        </thead>
        <tbody>

            {tableData.map((item,index)=>(

                <tr key={index}>
                <td>{item.code}</td>
                <td>{item.product}</td>
                <td>{item.qty}</td>
                <td> {item.price}</td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(item)}}> Delete</button>    </td>
                </tr>
            ))}
           
        </tbody>
    </Table>
   
   </>
  )
}

export default Table2