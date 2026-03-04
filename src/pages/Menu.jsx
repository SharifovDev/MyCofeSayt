import Header from "../components/Header";
import banner from "../../public/img/Imagem.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  let arrs = JSON.parse(localStorage.getItem("arrs"));
  const [shops, setShops] = useState([]);
  useEffect(() => {
    if (arrs == null) {
      setShops([]);
    } else {
      arrs.map((arr) => {
        arr["count"] = 0;
      });
      setShops([...arrs]);
    }
  }, []);

  const plus = (index) => {
    shops.map((shop, index2) => {
      if (index == index2) {
        shop.count = shop.count + 1;
      }
    });
    setShops([...shops]);
  };
  const minus = (index) => {
    shops.map((shop, index2) => {
      if (index == index2) {
        if (shop.count <= 0) {
          return;
        }
        shop.count = shop.count - 1;
      }
    });
    setShops([...shops]);
  };

  const order = (id) => {
    if (shops[id].count > 0) {
      let cards = JSON.parse(localStorage.getItem("cards"));
      if (cards === null) {
        cards = [];
      }
      cards.push(shops[id]);
      localStorage.setItem("cards", JSON.stringify(cards));
      navigate("/location");
    } else {
      alert("Maxsulot tanlang");
    }
    shops[id].count = 0;
    setShops([...shops]);
  };

  return (
    <div>
      <div className="mb-40">
        <Header />
      </div>
      <div className="lg:max-w-7xl md:max-w-2xl max-w-2xs mx-auto flex flex-wrap md:flex-nowrap justify-around mb-25 bg-{backdrop}">
        <div>
          <h1 className="lg:text-5xl md:text-2xl text-xl font-bold font-mono">
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <p className="lg:text-2xl hidden lg:block font-medium lg:my-6">
            Com o Coffee Delivery você recebe seu café onde estiver, a <br />{" "}
            qualquer hora
          </p>
          <div className="flex lg:mt-15">
            <div className="mr-4 hidden lg:block">
              <div className="flex gap-3 items-center mb-4">
                <button className="px-2.5 bg-[#C47F17] text-white rounded-full p-2">
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
                <h1 className="text-lg">Compra simples e segura</h1>
              </div>
              <div className="flex gap-3 items-center">
                <button className="px-2.5 bg-[#DBAC2C] text-white rounded-full p-2">
                  <i class="fa-solid fa-stopwatch"></i>
                </button>
                <h1 className="text-lg">Entrega rápida e rastreada</h1>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="flex gap-3 items-center mb-4">
                <button className="px-2.5 bg-[#574F4D] text-white rounded-full p-2">
                  <i class="fa-solid fa-box-open"></i>
                </button>
                <h1 className="md:text-lg">Embalagem mantém o café intacto</h1>
              </div>
              <div className="flex gap-3 items-center">
                <button className="px-2.5 bg-[#8047F8] text-white rounded-full p-2">
                  <i class="fa-solid fa-mug-hot"></i>
                </button>
                <h1 className="md:text-lg">O café chega fresquinho até você</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={banner} alt="" />
        </div>
      </div>

      <div className="lg:max-w-7xl md:max-w-2xl max-w-2xs mx-auto">
        <h1 className="text-4xl font-bold font-mono mb-8">Nossos cafés</h1>
        <div className="grid lg:grid-cols-4 gap-8 md:grid-cols-2 my-10">
          {shops.map((shop, index) => (
            <div
              key={index}
              className="cursor-pointer bg-gray-200 text-center px-4 pb-4 rounded-bl-4xl rounded-tr-4xl transition-all duration-700 hover:rounded-tr-[220px] hover:shadow-[16px_32px_50px_-4px_#000000]"
            >
              <div className="flex justify-center">
                <img className="rounded-full w-30 h-30" src={shop.image} />
              </div>
              <button className="p-1 font-bold rounded-xl my-4 bg-[#F1E9C9] text-[#C47F17]">
                Tradicional
              </button>
              <h1 className="text-2xl font-bold font-mono">{shop.name}</h1>
              <p className="text-[#8D8686] font-medium text-md mt-4">
                {shop.description}
              </p>
              <div className="flex gap-6 items-center justify-between mt-8">
                <h1 className="font-medium font-mono">
                  R$ <b className="text-xl">{shop.price}</b>
                </h1>
                <div className="font-bold text-xl flex gap-5 px-4 p-2 rounded-lg bg-gray-300">
                  <p onClick={() => minus(index)} className="text-[#8047F8]">
                    -
                  </p>
                  <p>{shop.count || 0}</p>
                  <p onClick={() => plus(index)} className="text-[#8047F8]">
                    +
                  </p>
                </div>
                <button
                  onClick={() => order(index)}
                  className="cursor-pointer rounded-lg p-2 bg-[#4B2995] text-white"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
