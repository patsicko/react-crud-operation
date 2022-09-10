import React from 'react';
import Table from "react-bootstrap/Table";
import Tdata from './Tdata';
import Thead from './Thead';

const Table1 = ({data}) => {
  return (
    


<Table>
    <Thead/>

            <tbody>
                
                {data.map((item,index)=>(
               
                <tr key={index}>

               <Tdata item={item}/>

                </tr>
               
                ))}

            </tbody>
</Table>


  )
}

export default Table1