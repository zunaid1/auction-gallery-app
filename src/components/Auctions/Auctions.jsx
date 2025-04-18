import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Auction from '../Auction/Auction';



const Auctions = ({ favorite, handleBid, handleRemoveFav }) => {
	const [auctions, setAuctions] = useState([])

	useEffect(() => {
		fetch("auctions.json")
			.then(res => res.json())
			.then(data => setAuctions(data))
	}, [])


	return (
		<div>


			<div className="overflow-x-auto bg-white rounded-xl shadow p-6">
        <table className="min-w-full text-sm text-left table-auto border-collapse border-1 border-gray-300 w-full">
          <thead className="text-xs text-gray-500  border-b-4 border-black">
            <tr className="">
              <th className="py-3 px-6 ">Items</th>
            <th className="py-3 px-6">Current Bid</th>
            <th className="py-3 px-6">Time Left</th>
            <th className="py-3 px-6 text-center">Bid Now</th>
          </tr>
        </thead>
        <tbody>
			{
				auctions.map(auction => 
					<Auction 
					key={auction.id} 
					auction={auction} 
					handleBid={handleBid}
            favorite={favorite}
            handleRemoveFav={handleRemoveFav}
					>
					</Auction>)

			}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auctions;

