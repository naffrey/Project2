import React from 'react';
import './App.css';
import FishCard from './components/FishCard/FishCard'
import Header from './components/Header/Header';
import Fish from './components/Fish/Fish';
import { Route } from 'react-router-dom';

function App({fishs, setFishs}) {
	
	return (
		<div className='App'>
			
				<Header />
		

			<Route path='/' exact component={FishCard} />
			<Route path="/profiles/:Path" component={Fish}/>
			
		</div>
	);
}

export default App;

// look at the path as it could be the issue.