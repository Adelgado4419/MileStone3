import { useContext, useState } from "react"
import { useHistory } from "react-router"
import React from 'react'

const LoginForm = ({ isShowLogin }) => {

    // const history = useHistory()

    // const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    // const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className={`${!isShowLogin ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">



                    <form onSubmit={handleSubmit}>
                        <h1 className="login-text">Sign In</h1>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={credentials.email}
                                    onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                                    className="login-box"
                                    id="email"
                                    name="email" />
                                    <br/><br/>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={credentials.password}
                                    onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                                    className="login-box"
                                    id="password"
                                    name="password"
                                />
                        <input className="login-btn" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
