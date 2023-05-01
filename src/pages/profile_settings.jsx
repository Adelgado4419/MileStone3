import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams,} from "react-router-dom"
import { Link } from 'react-router-dom'
import { UserContext } from "../contexts/CurrentUser"


function ProfileSettings() {

    const {currentUser, setCurrentUser} = useContext(UserContext)
	const navigate = useNavigate()
    const {id} = useParams()
	const [user, setUser] = useState({
        passwordDigest: currentUser.passwordDigest,
		first_name: '',
		last_name: '',
		username: '',
		gender: '',
		email: ''
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

	const handleDelete = async (e) => {
        e.preventDefault()
        // navigate('/')
            try {
                const response = await fetch(`http://localhost:4005/api/user/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                });
                return await response.json();
            } catch (error) {
                console.error(error);
            }
    }


	return (
	<div className="edit_profile">
		<main>

			<Link to='/dashboard/:username/' style={{textDecoration:'none'}}>
				<button
					className="main__back" >
					Go Back
				</button>
			</Link>


			<form className="main__form" onSubmit={handleSubmit}>
				<div className="main__row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName" style={{ display: "block", marginBottom: "5px" }}>First Name</label>
						<input
							required
							aria-errormessage="first name should be at least 4 characters long"
							placeholder="First Name"
							defaultValue={currentUser.first_name}
							onChange={e => setUser({ ...user, first_name: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
							style={{ marginBottom: "10px" }}
						/>
					</div>
				</div>
					<div className="main__row">
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName" style={{ display: "block", marginBottom: "5px" }}>Last Name</label>
						<input
							placeholder="Last Name"
							required
							defaultValue={currentUser.last_name}
							onChange={e => setUser({ ...user, last_name: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
							style={{ marginBottom: "10px" }}
						/>
					</div>
				</div>
				<div className="main__row">
					<div className="col-sm-6 form-group">
						<label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>User Name</label>
						<input
							placeholder="Username"
							pattern="^[A-Za-z0-9]{3,16}$"
							required
							defaultValue={currentUser.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
							className="form-control"
							id="username"
							name="username"
							style={{ marginBottom: "10px" }}
						/>
					</div>
				</div>
				<div className="main__row">
					<div className="col-sm-6 form-group">
						<label htmlFor="gender" style={{ display: "block", marginBottom: "5px" }} >Gender</label>
						<select
							placeholder="Gender"
							required
							defaultValue={currentUser.gender}
							onChange={e => setUser({ ...user, gender: e.target.value })}
							className="form-control"
							id="gender"
							name="gender"
							style={{ marginBottom: "10px" }}
						>
                            <option >{currentUser.gender}</option>
							<option value='man'>man</option>
							<option value='woman'>woman</option>
							<option value='non/binary'>non/binary</option>
							<option value='none'>prefer not to say</option>
						</select>

					</div>
                </div>
				<div className="main__row">
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
				<button
					className="main__submit">
					Change Profile
				</button>
				<button
					className="main__submit" onClick={handleDelete}>
					Delete Profile
				</button>
			</form>
		</main>
	</div>
	)
}

export default ProfileSettings