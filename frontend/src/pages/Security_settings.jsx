import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams} from "react-router-dom"
import { Link } from 'react-router-dom'
import { UserContext } from "../contexts/CurrentUser"

function SecuritySettings() {

	const navigate = useNavigate()
    const {id} = useParams()
    const {currentUser, setCurrentUser} = useContext(UserContext)
	const [user, setUser] = useState({
        password: '',
        email: '',
	})

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/` + id)
            const data = await response.json()
            console.log(data)
            setCurrentUser(data)
            setUser(data)
        }
        fetchData()
    }, [])
	
    const handleSubmit = async(e) => {
        e.preventDefault()
        navigate(`/dashboard/${currentUser.username}`)
            try{
                const response = await fetch(`http://localhost:4005/api/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                return await response.json();
            } catch (error) {
                console.error(error)
            }
    }


	return (
		<main>

			<Link to='/' style={{textDecoration:'none'}}>
				<button
					className="main__back" >
					Go Back
				</button>
			</Link>

			<h2>Security Settings</h2>
			<form onSubmit={handleSubmit}>
               
               <div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
						<input
							placeholder="Email"
							type="email"
							required
							defaultValue={currentUser.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							className="form-control"
							id="email"
							name="email"
							style={{ marginBottom: "10px" }}
						/>
					</div>
				</div>
                <div className="row">
                <div className="col-sm-6 form-group">
                    <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
                    <input
                        type="password"
                        placeholder="password"
                        pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$"
                        required
                        defaultValue={currentUser.password}
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        className="form-control"
                        id="password"
                        name="password"
                        style={{ marginBottom: "10px" }}
                    />
                </div>
            </div>
                <button
					className="main__submit">
					Profile Settings
				</button>
            </form>
		</main>
	)
}

export default SecuritySettings