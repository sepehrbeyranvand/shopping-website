import headerImg from "../Assets/hero_image.png";
import Exclusive from "./exclusive";
import GetOffer from "./getOffer";
import NewCollections from "./NewCollections";
import Popular from "./popular";
export default function Home() {
  return (
    <div>
      <header className="min-h-[48vw] bg_gradient w-full flex items-center justify-between">
        <div className="basis-1/2 flex flex-col justify-center items-start ms-20">
          <p className="text-zinc-600 mt-7">New Arrivals Only</p>
          <h1 className="text-[4rem] w-[70%] font-bold mt-7">
            The Best Collections For the Bests
          </h1>

          <button className="w-[30%] rounded-full p-[.6rem] text-white bg-[#fc3505] hover:bg-[#fc1505] transition-all .4s ease-in-out duration-200 mt-7">
            Latest Collections
          </button>
        </div>
        <div>
          <img
            width={500}
            height={500}
            className="basis-1/2"
            src={headerImg}
            alt="Hero"
          />
        </div>
      </header>
      <div>
        <Popular/>
      </div>
      <div className="mt-[9rem]">
        <Exclusive/>
      </div>
      <div>
        <NewCollections/>
      </div>
      <div className="mt-[12rem]">
        <GetOffer/>
      </div>
    </div>
  );
}
