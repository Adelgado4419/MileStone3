import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import Aquaman from '../images/canvaPhotos/SelectFew/Aqua_man.png'
import Aang from '../images/canvaPhotos/SelectFew/aang.png'
import CaptainMarvel from '../images/canvaPhotos/SelectFew/captainmarvel.png'
import DarthVader from '../images/canvaPhotos/SelectFew/darthvader.png'
import Goku from '../images/canvaPhotos/SelectFew/goku.png'
import Mario from '../images/canvaPhotos/SelectFew/mario.png'
import Edna from '../images/canvaPhotos/SelectFew/edna.png'
import Robin from '../images/canvaPhotos/SelectFew/robin.png'
import Stitch from '../images/canvaPhotos/SelectFew/stitch.png'
import WarMachine from '../images/canvaPhotos/SelectFew/warmachine.png'
import '../css/components.css'

function SignUpForm() {

	const navigate = useNavigate()

	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		username: '',
		password: '',
		gender: '',
		dateOfBirth: '',
		src: '',
	})

	async function handleSubmit(e) {
        e.preventDefault()
        navigate('/')
        const response = await fetch('http://localhost:4005/api/Users', {
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
	<div className="sign_up">
		<main>

			<Link to='/' style={{textDecoration:'none'}}>
				<button
					className="main__back" >
					Go Back
				</button>
			</Link>

			<form className="main__form" onSubmit={handleSubmit}>
				<div className="main__row">
					<div className="form-text-title">
						<label htmlFor="Picture" style={{ display: "block", marginBottom: "5px" }}>Picture</label>
						<select
							required
							placeholder="picture"
							value={user.src}
							onChange={e => setUser({ ...user, src: e.target.value })}
							className="form-text-box"
							id="Picture"
							name="Picture"
							style={{ marginBottom: "10px" }}
						>
						<option value='none'></option>
						<option value={Aquaman}>Aquaman</option>
						<option value={Aang}>Aang</option>
						<option value={CaptainMarvel}>Captain Marvel</option>
						<option value={DarthVader}>Darth Vader</option>
						<option value={Goku}>Goku</option>
						<option value={Mario}>Mario</option>
						<option value={Edna}>Edna</option>
						<option value={Robin}>Robin</option>
						<option value={Stitch}>Stitch</option>
						<option value={WarMachine}>War Machine</option>
						</select>
					</div>
					<div className="form-text-title">
						<label htmlFor="firstName" style={{ display: "block", marginBottom: "5px" }}>First Name</label>
						<input
							required
							aria-errormessage="first name should be at least 4 characters long"
							placeholder="First Name"
							value={user.first_Name}
							onChange={e => setUser({ ...user, first_name: e.target.value })}
							className="form-text-box"
							id="firstName"
							name="firstName"
							style={{ marginBottom: "10px" }}
						/>
					</div>
					<div className="form-text-title">
						<label htmlFor="lastName" style={{ display: "block", marginBottom: "5px" }}>Last Name</label>
						<input
							placeholder="Last Name"
							required
							value={user.last_Name}
							onChange={e => setUser({ ...user, last_name: e.target.value })}
							className="form-text-box"
							id="lastName"
							name="lastName"
							style={{ marginBottom: "10px" }}
						/>
					</div>
					<div className="form-text-title">
						<label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
						<input
							placeholder="Email"
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							className="form-text-box"
							id="email"
							name="email"
							style={{ marginBottom: "10px" }}
						/>
					</div>
					<div className="form-text-title">
						<label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>User Name</label>
						<input
							placeholder="Username"
							pattern="^[A-Za-z0-9]{3,16}$"
							required
							value={user.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
							className="form-text-box"
							id="username"
							name="username"
							style={{ marginBottom: "10px" }}
						/>
					</div>
					<div className="form-text-title">
						<label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
						<input
							type="password"
							placeholder="password"
							pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}$"
							required
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							className="form-text-box"
							id="password"
							name="password"
							style={{ marginBottom: "10px" }}
						/>
					</div>
					<div className="form-text-title">
						<label htmlFor="gender" style={{ display: "block", marginBottom: "5px" }} >Gender</label>
						<select
							placeholder="Gender"
							required
							value={user.gender}
							onChange={e => setUser({ ...user, gender: e.target.value })}
							className="form-text-box"
							id="gender"
							name="gender"
							style={{ marginBottom: "10px" }}
						>
							<option value='none'></option>
							<option value='man'>man</option>
							<option value='woman'>woman</option>
							<option value='non/binary'>non/binary</option>
							<option value='none'>prefer not to say</option>
						</select>
					</div>
					<div className="form-text-title">
						<label htmlFor="dateOfBirth" style={{ display: "block", marginBottom: "5px" }}>Date of Birth</label>
						<input
							type="date"
							required
							value={user.dateOfBirth}
							onChange={e => setUser({ ...user, dateOfBirth: e.target.value })}
							className="form-text-box"
							id="dateOfBirth"
							name="dateOfBirth"
							style={{ marginBottom: "10px" }}
						/>
					</div>
				</div>
                <input className="btn btn-primary" type="submit" value="Signup" />
			</form>
		</main>
		</div>
	)
}

export default SignUpForm