import headerImg from "../Assets/hero_image.png";
import Exclusive from "./exclusive";
import Footer from "./footer";
import GetOffer from "./getOffer";
import NewCollections from "./NewCollections";
import Popular from "./popular";
import SliderBrand from "./slider";
import ShoppingBasket from "../Assets/shoppingbasket.png";

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
        <Popular />
      </div>
      <div className="mt-[9rem]">
        <Exclusive />
      </div>
      <div>
        <NewCollections />
      </div>
      <div className="mt-[12rem]">
        <GetOffer />
      </div>
      <div className="mt-[12rem]">
        <h1 className="text-3xl Pptext text-center p-3 mb-16">Brands</h1>
        <SliderBrand />
      </div>
      <div className="mt-[12rem]">
        <Footer />
      </div>
      <div className="fixed z-20 rounded-full border border-1 border-rose-600 bottom-4 right-2 size-12 hover:scale-125 transition-all .5s ease-in-out cursor-pointer duration-500 flex justify-center items-center">
        <img
          width={35}
          className="object-contain bg-cover relative"
          height={30}
          src={ShoppingBasket}
          alt="Cart"
        />
      </div>
    </div>
  );
}
