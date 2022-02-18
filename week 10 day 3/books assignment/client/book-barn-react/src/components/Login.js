import React, { useState, useEffect } from "react"

function Login() {

    const [user, setUser] = useState()

    const handleTextChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = () => {
        fetch('http://localhost:8080/login')

    }

    return (
        <div>
            <input type="text" placeholder="Username" name='username' onChange={handleTextChange} />
            <input type="password" placeholder="Password" name='password' onChange={handleTextChange} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login
