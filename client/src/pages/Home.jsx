import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Home = () => {

    const {user} = useContext(UserContext);

    return (
        <div>
            {user ? (<h1> Welcome back {user.username} </h1>) : (<p>Welcome on our website, please log-in to discover stuff</p>)}
        </div>
    );
};

export default Home;