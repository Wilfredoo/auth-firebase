import './App.css';
import React, { useContext } from 'react';
import fire from './base';
import { AuthContext } from './Auth';

const Home = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="App">
			<p>Im home</p>
			<p>You are logged in with: {currentUser.email}</p>
			<button onClick={() => fire.auth().signOut()}>Sign Out</button>
		</div>
	);
};

export default Home;
