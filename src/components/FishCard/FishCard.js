import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  "./FishcardStyle.css"

function FishCard(props) {

	const [fish, setFish] = useState([]);
	const url =
		'https://seir-cors-anywhere.herokuapp.com/https://www.fishwatch.gov/api/species';

	useEffect(() => {
		function getData() {
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					setFish(res);
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
				{fish.map((fishs) => (
					<Link to={fishs.Path} key={fishs.Path}>
							<div className='card1'>
								<div>
									<img
										className='commonImg'
										src={fishs['Species Illustration Photo'].src}
										alt={fishs['Species Illustration Photo'].alt}
									/>
								</div>
								<h2 className='fishName'>{fishs['Species Name']}</h2>
							</div>
						</Link>
					))}
			</section>
)
}
export default FishCard;