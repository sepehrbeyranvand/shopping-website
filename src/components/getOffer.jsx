export default function GetOffer() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center p-9 w-[75%] exclusive h-[25vw] rounded-lg ">
        <div className="flex flex-col w-full items-center justify-center">
            <h1 className="text-[3rem] font-bold mt-7">Get Exclusive Offers On Your Email</h1>
            <p className="text-zinc-600 mt-7">Subscribe To Our Newsletter And Stay Updated</p>
            <div className="relative w-full mt-7 me-[20rem]">
                <input className="outline-none float-end rounded-full bg-zinc-50 p-[.9rem] border border-1 border-zinc-400 w-[60%]" placeholder="Email" type="email" />
                <button className="rounded-full bg-black text-white text-sm p-[1.05rem] w-[16%] absolute top-0 right-0">Subscribe <i className="fa fa-caret-right text-white p-1"></i></button>
            </div>
        </div>
      </div>
    </div>
  );
}
