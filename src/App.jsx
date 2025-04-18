import { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import { IoClose } from "react-icons/io5";

import Navbar from './components/Navbar/Navbar';
import Auctions from './components/Auctions/Auctions';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [favorite, setFavorite] = useState([]);

  const handleBid = (auction) => {
    console.log("🚀 Auction Object:", auction);

    const alreadyExists = favorite.find(item => item.id === auction.id);
    if (alreadyExists) {
      toast.info("Already in favorites ❤️", { position: "top-right" });
      return;
    }

    setFavorite([...favorite, auction]);

    toast.success(`${auction.title} added to favorites ❤️`, {
      position: "top-right",
      className: "min-h-[800px] flex items-center text-lg",
    });
  };

  const handleRemoveFav = (fav) => {
    console.log("Removing:", fav);
    const remaining = favorite.filter(item => item.id !== fav.id);
    setFavorite(remaining);
    toast.warn(`${fav.title} removed from favorites 🗑️`, { position: "top-right" });
  };

  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>

      <main className='bg-[#EBF0F5] mx-auto pb-20'>
        <div className="main-content-wrapper w-11/12 mx-auto">
          <h1 className='pt-20 mb-3 text-xl font-bold'>Active Auction</h1>
          <p className='mb-6'>Discover and bid on extraordinary items</p>

          <div className='auctions w-full flex gap-4'>
            {/* Left Section */}
            <div className="active-auction w-[70%] bg-white rounded-2xl">
              <Auctions
                handleBid={handleBid}
                favorite={favorite}
                handleRemoveFav={handleRemoveFav}
              />
            </div>

            {/* Right Section */}
            <div className="fav-auction w-[30%] rounded-2xl p-3">
              <div className='bg-white p-2 rounded-2xl'>

                {/* Header */}
                <div className="right-sec-caption flex items-center justify-center gap-3 py-3 px-6 mt-3 border-b border-gray-500">
                  <FaRegHeart size={18} className="text-gray-500" />
                  <h1 className='text-xl font-bold'>Favorite Items: {favorite.length}</h1>
                </div>

                {/* Content */}
                {favorite.length === 0 ? (
                  <div className='flex items-center justify-center flex-col text-center p-6'>
                    <h1 className="text-gray-500 text-lg font-semibold mb-2">No favorites yet</h1>
                    <p>Click the heart icon on any item to add it to your favorites</p>
                  </div>
                ) : (
                  favorite.map((fav) => (
                    <div className='flex items-center justify-between bg-blue-50 rounded border-gray-400 m-2 p-4 border-b' key={fav.id}>
                      <img className='w-12 h-12 rounded' src={fav.image || 'https://via.placeholder.com/50'} alt={fav.title || 'Image'} />
                      <div className='flex-1 px-2'>
                        <h1 className='font-bold'>{fav.title}</h1>
                        <div className='flex justify-between text-sm text-gray-600'>
                          <p>${fav.currentBidPrice}</p>
                          <p>Bids: <span>{fav.bidsCount}</span></p>
                        </div>
                      </div>
                      <button onClick={() => handleRemoveFav(fav)} className="text-red-500 hover:text-red-700 cursor-pointer">
                        <IoClose size={20} />
                      </button>
                    </div>
                  ))
                )}

                {/* Footer */}
                <div className="fav-footer flex justify-between text-xl font-bold border-t-2 border-b-2 border-gray-500 mt-3 p-4">
                  <h1>Total bids Amount</h1>
                  <h1>
                    &nbsp;$
                    <span id='fav-sum'>
                      {favorite.reduce((total, item) => total + (item.currentBidPrice || 0), 0)}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
    </>
  );
}

export default App;
