import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const Register = () => {
    //* utilisation des state pour réucperer les données de register
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false); //* premièrement créer un state redirect
    

    //* Fonction Submit qui dépend d'un event
    const submit = async (e) => {
        e.preventDefault();

        //* Effectue la requête sur le côté serveur (back)
        await fetch("http://localhost:8080/api/user/register", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        setRedirect(true); // une fois le register fait sur le site setRedirect sur ture
    }

    //* condition pour effectuer la redirection vers login après le register
    if(redirect) {
        return <Redirect to="/login" />;
    }
    

    return (
        <>
            <form onSubmit={submit}>
				<h1 className="h3 mb-3 fw-normal">Please Register</h1>

				<div className="form-floating">
					<input type="text" className="form-control" id="floatingInput" placeholder="pseudo" required value={username} 
                    onChange={e => setUsername(e.target.value)}/>
					<label htmlFor="email">pseudo</label>
				</div>

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

export default Register;