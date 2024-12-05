import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext';

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPasword] = useState("");

    
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, password})
    }

  return (
    <div>
        <label htmlFor='name'>Username</label>
        <input id='name' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} autoComplete='false' />

        <label>Password</label>
        <input type='password' value={password} onChange={(e) => setPasword(e.target.value)}/>

        <button type='submit' onClick={handleSubmit}></button>
    </div>
  )
}

export default Login