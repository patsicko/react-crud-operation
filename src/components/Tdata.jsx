import React from 'react'

const Tdata = ({item}) => {
  return (<>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.qty}</td>
    <td>{item.price}</td>
    </>
  )
}

export default Tdata