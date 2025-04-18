import React from 'react';
import BrandLogo from '../BrandLogo/BrandLogo';

const Navbar = () => {
	return (
		<div className='w-11/12 mx-auto border-none'>

			<div className="navbar">
				<div className="navbar-start">
					<BrandLogo></BrandLogo>

				</div>
				<div className="navbar-center">
					<ul className='flex gap-4'>
						<li className='font-semibold'><a href="#">Home</a></li>
						<li className='font-semibold'><a href="#">Auction</a></li>
						<li className='font-semibold'><a href="#">Categories</a></li>
						<li className='font-semibold'><a href="#">How to works</a></li>
					</ul>
				</div>


				<div className="navbar-end flex items-center justify-end gap-3">



					<button className="btn btn-ghost btn-circle">
						<div className="indicator">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
							<span className="badge badge-xs badge-primary indicator-item rounded-full">9</span>
						</div>
					</button>


					<div className="avatar avatar-online">
						<div className="w-8 rounded-full">
							<img src="https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-1/457441194_911974264075148_7976939439815075705_n.jpg?stp=c9.3.894.894a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGvZk6wUsGdo1rL1PrlAqCRR7cH0jgUQE5HtwfSOBRATh_GmIFpZI1CJoUiQB6jI68hDbiOgQwhsGDHYwsTNUsw&_nc_ohc=jhefmg2XOM8Q7kNvwG0PkRP&_nc_oc=AdnHV6IwVdeOoj6lnDlzcOIIPJKAcfv-jRWRMkct6TaZPTruBGSoeTVuNpQCujE-U1D0g8KCck07-cpTFsWgbEHc&_nc_zt=24&_nc_ht=scontent.fdac3-2.fna&_nc_gid=QZIHNNQCLIc6M-_9bHSpJw&oh=00_AfHu9M_n6RbxkmpTYPGsL_rrsN1dPgjEh1XcZ2KI0KhJaw&oe=67FB834E" />
						</div>
					</div>



				</div>
			</div>

		</div>
	);
};

export default Navbar;