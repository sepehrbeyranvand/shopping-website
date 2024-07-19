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
      <h1 className="text-3xl text-center p-3 mb-16">POPULAR IN WOMEN</h1>

      <div className="flex justify-center gap-3">
        {popularItems.map((e, i) => [
          <div key={i}>
            <div className="relative">
              <img width={280} height={280} src={e.image} alt={e.name} />
              <i className="fa fa-heart absolute p-2 text-xl text-red-400 hover:text-red-500 transition-all .4s ease-in-out duration-200 cursor-pointer left-1 text-[3.4rem] border border-1 border-red-400 top-1 rounded-full"></i>
            </div>
            <div>
              <p>{e.new_price}</p>
              <p className="line-through">{e.old_price}</p>
              <button onClick={console.log(e.image)}>CLG</button>
            </div>
          </div>,
        ])}
      </div>
    </div>
  );
}
