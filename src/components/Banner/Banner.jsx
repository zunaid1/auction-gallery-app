import React from 'react';

const Banner = () => {
	return (
		<div className='mx-auto'>
			<div className="bg-[url('./assets/Banner-min.jpg')] bg-cover bg-center h-120 w-full flex items-center space-y-5">
			
			<div className="text-content text-white mx-20">
			<h1 className='text-5xl font-bold'>Bid on Unique Items from <br /> Around the World</h1>
			<p className='my-5'>Discover rare collectibles, luxury goods, and vintage 
			<br />
			treasures in our curated auctions</p>

			<button className='bg-white text-black px-[32px] py-[16px] rounded-4xl font-bold'>Explore Auctions</button>
			</div>

			</div>
			
		</div>
	);
};

export default Banner;