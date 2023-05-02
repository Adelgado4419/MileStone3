import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/CurrentUser"
import fanterlogo from "../assets/fanterlogo.png"
import '../css/components.css'
function LoginForm() {
    const navigate = useNavigate()

    const { setCurrentUser } = useContext(UserContext)

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
            navigate(`/dashboard/${data.user.id}`)
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
            <form className="main__login" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-text-title">
                        <label htmlFor="email"  style={{ display: "block", marginBottom: "5px" }} >Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            className="form-text-box"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="form-text-title">
                        <label htmlFor="password"  style={{ display: "block", marginBottom: "5px", }}>Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-text-box"
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