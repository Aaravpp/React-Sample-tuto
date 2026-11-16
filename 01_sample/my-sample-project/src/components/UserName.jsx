import React from 'react'
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

function UserName() {
    
    const user = useContext(UserContext);

  return (
    <div>
        <h2>Hello {user.name}</h2>
        <p>Email : {user.email}</p>
    </div>
  )
}

export default UserName