import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ItemUser = ({id, username, email, role}) => {    
    const navigate = useNavigate()
    function handleDelete(){
        fetch(`/users/${id}`,{
          method:"DELETE",
          headers:{"Content-Type":"application/json"}
        })
        .then((response) => {
          if (response.status === 200){
            response.json()
          }
        })
        .then((data) => console.log(data))
  
      }
    return (
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
            {id}
            </th>
            
            <td className="px-6 py-4">
            {username}
            </td>
            <td className="px-6 py-4">
            {email}
            </td>
            <td className="px-6 py-4">
            {role}
            </td>
            
            <td className="px-6 py-4">
            <Link to={`/updateuser/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</Link>
            </td>
            <td className="px-6 py-4">
            <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={handleDelete}>Delete</button>
            </td>
        </tr>
        


    )

}

export default ItemUser