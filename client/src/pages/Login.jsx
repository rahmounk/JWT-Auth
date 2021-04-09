import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Login = () => {
	
	const {user, setUser } = useContext(UserContext);

	// state email et password
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

	 const submit = async (e) => {
        e.preventDefault();

        // Effectue la requête sur le côté serveur (back) à l'adresse login cette fois
        await fetch("http://localhost:8080/api/user/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
			credentials: "include", // Récupère les cookies
            body: JSON.stringify({
                email,
                password
            })
        });

		const response = await fetch("http://localhost:8080/api/user/" , {
            headers: {"Content-Type": "application/json"},
            credentials: "include"
        })

        const content = await response.json();

		if(content._id) {
			setUser(content);
		}

		setRedirect(true);
    }

	// si il y a un user redirect vers page d'accueil
	if(user) {
        return <Redirect to="/" />;
    }

	// condition pour effectuer la redirection vers la page d'accueil après le login
    if(redirect) {
        return <Redirect to="/user" />;
    }

	return (
		<>
			<form onSubmit={submit}>
				<h1 className="h3 mb-3 fw-normal">Please Register</h1>

				<div className="form-floating">
					<input type="text" className="form-control" id="floatingInput"  placeholder="email" required value={email}
                    onChange={e => setEmail (e.target.value)}/>
					<label htmlFor="email">email</label>
				</div>

				<div className="form-floating">
					<input type="password" className="form-control" id="floatingPassword"  placeholder="password" required value={password}
                    onChange={e => setPassword (e.target.value)}/> 
					<label htmlFor="password">password</label>
				</div>

				<div className="checkbox mb-3">
					<input type="checkbox" value="remember-me"/> Remember me
				</div>

				<button className="w-100 btn btn-lg btn-primary" type="submit">
					Sign in
				</button>
			</form>
		</>
	);
};

export default Login;
