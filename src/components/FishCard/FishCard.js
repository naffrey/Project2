import React, { useState, useEffect } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import  "./FishcardStyle.css"

function FishCard(props) {

	const [fish, setFish] = useState([]);
	//const {Path} = useParams();
	const url =
		'https://cors-anywhere.herokuapp.com/https://www.fishwatch.gov/api/species';

	useEffect(() => {
		function getData() {
			fetch(url)
				.then((res) => res.json())
				.then((json) => {
					console.log(json);
					setFish(json);
				})
				.catch(console.error);
		}
		getData();
	}, []);

	if (!fish.length) {
		return (
			<div>
				<img
					class='gif'
					src='https://media.giphy.com/media/oVptPWVH26gSvClKX5/giphy.gif?cid=ecf05e4732e0hqpysutqqcktcpsylg01bh8bcv4mx22hp6v4&rid=giphy.gif&ct=g'
					alt=' animated fishing man reeling'
				/>

				<p class='loading'>
					Reeling in your results{' '}
					<img
						class='dots'
						src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif'
						alt='loading screen dots'
					/>
				</p>
			</div>
		);
	}

    return (
			<section className='homepageHolder'>
				{fish.map((fishs) => {
					return (
						<div className="card1">
							<img
								className='commonImg'
								src={fishs['Species Illustration Photo'].src}
								alt={fishs['Species Illustration Photo'].alt}/>
							<h2 className='fishName'>{fishs['Species Name']}</h2>
						</div>
					);
				})}
			</section>
		);
}

export default FishCard;