import React from 'react';
import ItemUser from './ItemUser';

const ViewUser = ({user}) => {  

  const displayusers = user?.map(users => {
    return <ItemUser key = {users.id} id = {users.id} username = {users.username} email ={users.email} role = {users.role}/>
  })

  return (
     <div>
        <div className="page overflow-x-auto shadow-md sm:rounded-lg users">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        <th scope="col" className="px-6 py-3">
            ID
            </th>
            <th scope="col" className="px-6 py-3">
            Username
            </th>
            <th scope="col" className="px-6 py-3">
            Email
            </th>
            <th scope="col" className="px-6 py-3">
            Role
            </th>
            <th scope="col" className="px-6 py-3">
            Update
            </th>
            <th scope="col" className="px-6 py-3">
            Delete
            </th>
        </tr>
        </thead>
        <tbody>
            {displayusers}
        </tbody>
    </table>
    </div>

     </div> 
    
    
  )
}

export default ViewUser;