import { FaRegHeart, FaHeart } from "react-icons/fa";

const Auction = ({ favorite, auction, handleBid }) => {
  // Check if this auction is already in favorites
  const isFavorited = favorite.some(item => item.id === auction.id);

  return (
    <tr className="border-b-2 border-black" key={auction.id}>
      <td className="flex items-center gap-4 py-4 px-6">
        <img
          src={auction.image}
          alt={auction.title}
          className="w-14 h-14 object-cover rounded-md"
        />
        <span className="font-medium text-sm">{auction.title}</span>
      </td>

      <td className="py-4 px-6 font-semibold">
        ${auction.currentBidPrice.toLocaleString()}
      </td>

      <td className="py-4 px-6">{auction.timeLeft}</td>

      <td className="py-4 px-6 text-center">
        <button
          onClick={() => handleBid(auction)}
          className={`transition text-red-500 ${
            isFavorited ? "opacity-50 cursor-not-allowed" : "hover:text-red-600 cursor-pointer"
          }`}
          disabled={isFavorited}
        >
          {isFavorited ? <FaHeart /> : <FaRegHeart />}
        </button>
      </td>
    </tr>
  );
};

export default Auction;

