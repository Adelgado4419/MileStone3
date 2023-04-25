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
		await fetch(`http://localhost:4000/api/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
	}

	return (
		<main>
			<h1>Sign Up</h1>
			<Link to='/'>			
			<button id='ReturnButton' type='button'>Go Back</button>
			</Link>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							required
							aria-errormessage="first name should be at least 4 characters long"
							placeholder="First Name"
							value={user.firstName}
							onChange={e => setUser({ ...user, first_name: e.target.value })}
							className="form-control"
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="lastName">Last Name</label>
						<input
							placeholder="Last Name"
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, last_name: e.target.value })}
							className="form-control"
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email">Email</label>
						<input
							placeholder="Email"
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							className="form-control"
							id="email"
							name="email"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="username">UserName</label>
						<input
							placeholder="Username"
							pattern="^[A-Za-z0-9]{3,16}$"
							required
							value={user.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
							className="form-control"
							id="username"
							name="username"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="password">password</label>
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
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="gender">gender</label>
						<select 
							placeholder="Gender"
							required
							value={user.gender}
							onChange={e => setUser({ ...user, gender: e.target.value })}
							className="form-control"
							id="gender"
							name="gender"
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
						<label htmlFor="dateOfBirth">date of birth</label>
						<input
							type="date"
							required
							value={user.dateOfBirth}
							onChange={e => setUser({ ...user, dateOfBirth: e.target.value })}
							className="form-control"
							id="dateOfBirth"
							name="dateOfBirth"
						/>
					</div>
				</div>
			
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
	)
}

export default SignUpForm