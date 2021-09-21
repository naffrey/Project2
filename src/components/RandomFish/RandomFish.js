import React, { useState, useEffect } from 'react';
import './RandomFishStyle.css';

function RandomFish(props) {
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

				<p class='loading'>Reeling in your results <img class="dots"
					src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif'
					alt='loading screen dots'/></p>
				
			</div>
		);
	}

	return (
		<section className='singleFish'>
			{fish.map((fishs) => {
				return (
					<div className='randomCard'>
						<img
							className='mainFish'
							src={fishs['Species Illustration Photo'].src}
							alt={fishs['Species Illustration Photo'].alt}
						/>

						<div className='basicInfo'>
							<h3>
								<u>Name</u>
							</h3>
							<div>{fishs['Species Name']}</div>

							<h3>
								<u>Location</u>
							</h3>
							<div dangerouslySetInnerHTML={{ __html: fishs.Location }} />

						</div>

						<div className='bio'>
							<u>Physical Description</u>

							<div
								dangerouslySetInnerHTML={{
									__html: fishs['Physical Description'],
								}}
							/>
							<h3>
								<u>Biology</u>
							</h3>
							<div dangerouslySetInnerHTML={{ __html: fishs.Biology }} />
						</div>
					</div>
				);
			})}
		</section>
	);
}

export default RandomFish;
