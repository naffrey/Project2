import React from 'react';
import  "./FishcardStyle.css"

function FishCard(props) {
    return (
			<main className='homepageHolder'>
				<div className='card1'>
					<img
						className='commonImg'
						src='https://www.fishwatch.gov/sites/default/files/Hake_White_NB_W_0.png'
						alt=''
					/>
					<h2 className='fishName'>Bass</h2>
				</div>

				<div className='card2'>
					<img className='commonImg' src='' alt='' />
					<h2 className='fishName'>Catfish</h2>
				</div>

				<div className='card3'>
					<img className='commonImg' src='' alt='' />
					<h2 className='fishName'>Trout</h2>
				</div>

				<div className='card4'>
					<img className='commonImg' src='' alt='' />
					<h2 className='fishName'>Salmon</h2>
				</div>

				<div className='card5'>
					<img className='commonImg' src='' alt='' />
					<h2 className='fishName'>Wiper</h2>
				</div>

				<div className='card6'>
					<img className='commonImg' src='' alt='' />
					<h2 className='fishName'>Sunfish</h2>
				</div>
			</main>
		);
}

export default FishCard;