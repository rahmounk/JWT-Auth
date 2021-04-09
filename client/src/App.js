import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, {  useEffect } from 'react';

import "./App.css";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Register from './pages/Register';
import Home from './pages/Home';
import User from './pages/User';
import { useMemo, useState } from "react";
import { UserContext } from './UserContext';


function App() {

	const [user, setUser] = useState(null);

	const value = useMemo(() => ({user, setUser}), [user, setUser]);

	//* useEffect pour récuperer des données, en l'occurence le pseudo de l'utilisateur 
    useEffect(() => {
        ( 
            async () => {
                const response = await fetch("http://localhost:8080/api/user/" , {
                    headers: {"Content-Type": "application/json"},
                    credentials: "include"
                })
                const content = await response.json();

                if(content._id) {
                    setUser(content);
                }
        }) () 
		
    }, []); // les crochets pour arrêter la fonction

	return (
		<>
			<BrowserRouter>
			<UserContext.Provider value={value}>
				<Nav/>
				<main className="form-signin">
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/register" component={Register}/>
						<Route path="/login" component={Login}/>
						<Route path="/user" component={User}/>
					</Switch>
				</main>
			</UserContext.Provider>
			</BrowserRouter>
		</>
	);
}
// d
export default App;
