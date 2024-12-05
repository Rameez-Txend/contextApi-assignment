import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

function Profile() {

    const {user} = useContext(UserContext);
    console.log(user);
    
  return (
    <h1>Welcome {user.userName}</h1>
  )
}

export default Profile