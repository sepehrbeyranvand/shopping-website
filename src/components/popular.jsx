import { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";

export default function Popular() {
  const [url] = useState("http://localhost:3000/popular");
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPopularItems(json));
  }, [url]);
  return (
    <div>
      <h1 className="text-3xl Pptext text-center p-3 mb-16">POPULAR IN WOMEN</h1>

      <div className="flex justify-center gap-3">
        {popularItems.map((e, i) => [
          <div className="flex flex-col" key={i}>
            <div className="relative hover:scale-105 transition-all .6s ease-in-out duration-300">
              <img
                className="rounded-t-md"
                width={280}
                height={280}
                src={e.image}
                alt={e.name}
              />
              <i className="fa fa-heart absolute p-2 text-xl text-red-400 hover:text-red-500 transition-all .4s ease-in-out duration-300 cursor-pointer left-1 text-[3.4rem] border border-1 border-red-400 top-1 rounded-full"></i>
              <i className="fa fa-shopping-cart absolute p-2 text-xl top-14 text-slate-600 hover:text-slate-500 transition-all .4s ease-in-out duration-300 cursor-pointer left-1 text-[3.4rem] border border-1 border-slate-400 rounded-full"></i>
            </div>
            <div className="w-full leading-7 border border-1 border-e-slate-400 border-s-slate-400 border-b-slate-400 p-1 rounded-b-lg">
              <h3 className="text-xl font-semibold">{e.name}</h3>
              <div className="flex justify-between mb-1 mt-1">
                <p className="font-semibold text-lg">
                  <i className="fa fa-dollar"></i>
                  {e.new_price}
                </p>
                <p className="line-through font-light text-zinc-500">
                  <i className="fa fa-dollar font-light m-[2px]"></i>
                  {e.old_price}
                </p>
              </div>
              <p>
                {e.rate} <i className="fa fa-star text-yellow-500"></i>
              </p>
            </div>
          </div>,
        ])}
      </div>
    </div>
  );
}
