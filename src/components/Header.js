import Browsing from "../assets/browsing.png"
import Jayant from "../assets/jayant.png";
export default function Navbar() {
    return (
      <div className="bg-gradient-to-r from-pink-500 to-yellow-400 p-4 flex justify-between items-center ">
        <img src={Browsing} alt="Browsing Icon" className="h-12 w-12"></img>
        <h1 className="text-lg font-bold font-serif item-center">DSA Visualization</h1>
        <img src={Jayant} alt="Profile" className="bg-gray-300 rounded-full w-12 h-12"></img>
      </div>
    );
  }
