import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

function SignUpForm() {

	const navigate = useNavigate()

	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		username: '',
		password: '',
		gender: '',
		dateOfBirth: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()
		navigate('/')
		const response = await fetch(`/api/Users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		console.log(response)
		return await response.json

	}

	return (
		<main>

			<Link to='/' style={{textDecoration:'none'}}>
				<button
					className="main__back" >
					Go Back
				</button>
			</Link>

			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName" style={{ display: "block", marginBottom: "5px" }}>First Name</label>
						<input
							required
							aria-errormessage="first name should be at least 4 characters long"
							placeholder="First Name"
							value={user.firstName}
							onChange={e => setUser({ ...user, first_name: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
							style={{ marginBottom: "10px" }}
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName" style={{ display: "block", marginBottom: "5px" }}>Last Name</label>
						<input
							placeholder="Last Name"
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, last_name: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
							style={{ marginBottom: "10px" }}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
						<input
							placeholder="Email"
							type="email"
							required
							value={user.email}
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
						<label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>User Name</label>
						<input
							placeholder="Username"
							pattern="^[A-Za-z0-9]{3,16}$"
							required
							value={user.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
							className="form-control"
							id="username"
							name="username"
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
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							className="form-control"
							id="password"
							name="password"
							style={{ marginBottom: "10px" }}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="gender" style={{ display: "block", marginBottom: "5px" }} >Gender</label>
						<select
							placeholder="Gender"
							required
							value={user.gender}
							onChange={e => setUser({ ...user, gender: e.target.value })}
							className="form-control"
							id="gender"
							name="gender"
							style={{ marginBottom: "10px" }}
						>
							<option value='man'>man</option>
							<option value='woman'>woman</option>
							<option value='non/binary'>non/binary</option>
							<option value='none'>prefer not to say</option>
						</select>

					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="dateOfBirth" style={{ display: "block", marginBottom: "5px" }}>Date of Birth</label>
						<input
							type="date"
							required
							value={user.dateOfBirth}
							onChange={e => setUser({ ...user, dateOfBirth: e.target.value })}
							className="form-control"
							id="dateOfBirth"
							name="dateOfBirth"
							style={{ marginBottom: "10px" }}
						/>
					</div>
				</div>
				<button
					className="main__submit">
					Sign Up
				</button>
			</form>
		</main>
	)
}

export default SignUpForm