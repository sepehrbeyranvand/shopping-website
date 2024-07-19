import headerImg from "../Assets/hero_image.png";
export default function Home() {
  return (
    <div>
      <header className="min-h-[48vw] bg-rose-50 w-full flex justify-between">
        <div className="basis-1/2 flex flex-col justify-center items-start ms-20">
          <p className="text-zinc-600 mt-7">New Arrivals Only</p>
          <h1 className="text-[4rem] w-[70%] font-bold mt-7">
            The Best Collections Fo the Bests
          </h1>

          <button className="w-[30%] rounded-full p-[.6rem] text-white bg-rose-800 mt-7">
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
    </div>
  );
}
