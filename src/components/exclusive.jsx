import exclusiveImg from "../Assets/exclusive_image.png";
export default function Exclusive() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center p-9 w-[75%] exclusive h-[25vw] rounded-md ">
        <div className="flex justify-between items-center w-full">
          <div className="basis-1/2 ms-14">
            <h1 className="text-[3rem] w-[80%] font-extrabold">Exclusive</h1>
            <h1 className="text-[3rem] w-[90%] font-bold">Offers For You</h1>
            <p className="text-zinc-600 font-light ">
              ONLY ON BEST SELLERS PRODUCTS
            </p>
            <button className="w-[30%] hover:animate-pulse rounded-full p-[.6rem] text-white bg-[#fc3505] hover:bg-[#fc1505] transition-all .4s ease-in-out duration-200 mt-7">
              Check Now
            </button>
          </div>
          <div className="basis-1/2 flex justify-end">
            <img width={230} height={230} src={exclusiveImg} alt="Exclusive" />
          </div>
        </div>
      </div>
    </div>
  );
}
