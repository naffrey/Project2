import React, { useState, useEffect } from 'react';
import './RandomFishStyle.css';

function RandomFish(props) {
    const [fish, setFish] = useState([]);
    //const {Path} = useParams();
	const url =
		'https://cors-anywhere.herokuapp.com/https://www.fishwatch.gov/api/species';


		useEffect(() => {
			function getData() {fetch(url) 
				.then((res) => res.json())
				.then((json) => {
					console.log(json) 
					setFish(json)
					})
				.catch(console.error);}
				getData()
			},[]); 

		if (!fish.length) {
			return <p>Reeling...</p>;
		}
	

    return (
			<section className='singleFish'>
				{fish.map(fishs =>{

				return	<div className='randomCard'>
						<img className='mainFish' src={fishs['Species Illustration Photo'].src} alt={fishs['Species Illustration Photo'].alt} />
						<p>
							Maybe I could add a little image selector here for the fish that
							multiple photos. under the photo. SAME TO THE FISH CARDS.
						</p>
						<div className='basicInfo'>
							<h3>
								<u>Name</u>
							</h3>
							<h4>{fishs['Species Name']}</h4>
							<h3>
								<u>Location</u>
							</h3>
							<h4>{fishs.Location}</h4>

							<h3>
								<u>Physical Description</u>
							</h3>
							<h4>{fishs.Physical}</h4>
						</div>

						<div className='bio'>
							<h3>
								<u>Biology</u>
							</h3>
							<p>{fishs.Biology}</p>
						</div>
					</div>
				})}
			</section>
		);
					
}




export default RandomFish;