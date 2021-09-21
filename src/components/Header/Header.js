import React from 'react';
import './HeaderStyle.css'

function Header(props) {
    return (
			<div>
				<header>
					<div className='logo'>
						<h1>Logo will go here</h1>
					</div>
					
					<button className='random'>Random Fish!</button>
				</header>
				<br />
			</div>
		);
}

export default Header;