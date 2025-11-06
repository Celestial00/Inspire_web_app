import Quote from "./Components/Quote";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto h-screen">
        <Navbar />
        <div className=" h-screen  flex items-center ">
          <Quote />
        </div>
      </div>
    </div>
  );
}
