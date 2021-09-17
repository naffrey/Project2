import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './RandomFishStyle.css';

const RandomFish = (props) => {
    const [fish, setFish] = useState(null);
    //const {path} = useParams();
	const url = `https://www.fishwatch.gov/api/species`;

		useEffect(() => {
			fetch(url)
				.then((res) => res.json())
				.then((json) => {setFish(json)
					})
				.catch(console.error);
			},[]);

		if (!fish) {
			return <p>Reeling...</p>;
		}
	

    return (
			<div className='randomCard'>
				<img className='mainFish' src='' alt='' />
				<p>
					Maybe I could add a little image selector here for the fish that
					multiple photos. under the photo. SAME TO THE FISH CARDS.
				</p>
				<div className='basicInfo'>
					<h3>
						<u>Name</u>
					</h3>
					<h4>{fish["species name"]}</h4>
					<h3>
						<u>Location</u>
					</h3>
					<h4>{fish.Habitat}</h4>

					<h3>
						<u>Physical Description</u>
					</h3>
					<h4>{fish.Physical}</h4>
				</div>

				<div className='bio'>
					<h3>
						<u>Biology</u>
					</h3>
					<p>{fish.biology}</p>
				</div>
			</div>
		);
}

export default RandomFish;