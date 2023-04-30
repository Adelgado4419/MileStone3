import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CurrentUser } from "../contexts/CurrentUser"
import fanterlogo from "../assets/fanterlogo.png"

function LoginForm() {
    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`http://localhost:4005/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            setCurrentUser(data.user)
            navigate(`/dashboard/${data.user.username}`)
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
    <div className="bg">
\        <main>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form className="login" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email"  style={{ display: "block", marginBottom: "5px" }} >Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password"  style={{ display: "block", marginBottom: "5px", }}>Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
            <div className="logo-container">
            <img className="nav__logo" src={fanterlogo} alt="logo"/>
            </div>
        </main>
    </div>
    )
}

export default LoginForm