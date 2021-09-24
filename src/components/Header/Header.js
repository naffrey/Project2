import React from 'react';
import './HeaderStyle.css'

function Header(props) {
    return (
			<div>
				<header>
					<div className='logo'>
						<a href='/'><h1>Water Creatures</h1></a>
					</div>
					<button className='random'>Random Fish!</button>
				</header>

				<br />
			</div>
		);
}

export default Header;