import React from 'react';
import BrandLogo from '../BrandLogo/BrandLogo';

const Footer = () => {
	return (
		<div className='pt-20 pb-20 flex flex-col items-center justify-center space-y-4'>
			<BrandLogo></BrandLogo>

			<div className='flex gap-2'>
				<span>Bid.</span>
				<span>Win.</span>
				<span>Own.</span>
			</div>

			<div className="navbar-center">
					<ul className='flex gap-4'>
						<li className='font-semibold'><a href="#">Home</a></li>
						<li className='font-semibold'><a href="#">Auction</a></li>
						<li className='font-semibold'><a href="#">Categories</a></li>
						<li className='font-semibold'><a href="#">How to works</a></li>
					</ul>
				</div>

			<div className=''>
				<p>
					© {new Date().getFullYear()} AuctionHub. All rights reserved.</p>
			</div>
		</div>

		
	);
};

export default Footer;