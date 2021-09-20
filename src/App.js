import React from 'react';
import './App.css';
// import FishCard from './components/FishCard/FishCard';
import Header from './components/Header/Header';
import RandomFish from './components/RandomFish/RandomFish';

function App() {
	return (
		<div className='App'>
			<Header />
			{/* <FishCard/> */}
			<RandomFish />
		</div>
	);
}

export default App;
