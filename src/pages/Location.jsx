import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

function Location() {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  let cards = JSON.parse(localStorage.getItem("cards"));
  const del = (id) => {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.splice(id, 1);
    localStorage.setItem("cards", JSON.stringify(cards));
    setUpdate(!update);
  };

  const [obj, setObj] = useState({
    Fullname: "",
    Location: "",
    Number: "",
  });

  const change = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setObj((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const confirm = () => {
    if (!obj.Fullname || !obj.Location || !obj.Number) {
      alert("Inputlarni to'ldiring");
      return;
    }
    let s = [
      {
        buyurtmachi: obj,
        orders: cards,
      },      
    ];
    console.log(s);
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(s);
    console.log('oldin', orders);
    localStorage.setItem('orders',JSON.stringify(orders))
    console.log('keyin',orders);
    navigate("/");
    setObj({
      Fullname: "",
      Location: "",
      Number: "",
    });
  };
  return (
    <div>
      <div className="mb-30">
        <Header />
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap md:gap-10 justify-around">
        <div>
          <h1 className="p-4 text-2xl font-bold font-mono">
            Complete seu pedido
          </h1>
          <div className="grid gap-6 rounded-xl p-10 bg-[#F3F2F2]">
            <div className="my-3">
              <h1 className="text-lg font-medium mb-1">
                📍 Endereço de Entrega
              </h1>
              <p className="text-lg">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
            <input
              className="border-2 rounded-lg p-2 font-bold"
              type="text"
              name="Fullname"
              value={obj.Fullname}
              placeholder="Fullname"
              onChange={change}
            />
            <input
              className="border-2 rounded-lg p-2 font-bold"
              type="text"
              name="Location"
              value={obj.Location}
              placeholder="Location"
              onChange={change}
            />
            <input
              className="border-2 rounded-lg p-2 font-bold"
              type="number"
              name="Number"
              value={obj.Number}
              placeholder="Number"
              onChange={change}
            />
          </div>
        </div>

        <div>
          <h1 className="p-4 text-2xl font-bold font-mono">
            Cafés selecionados
          </h1>

          <div className="p-8 rounded-bl-3xl rounded-tr-3xl bg-[#F3F2F2] mb-10">
            {cards.map((card, index) => (
              <div className="flex my-4 gap-4">
                <div>
                  <img
                    className="rounded-full md:w-20 md:h-20 w-15 h-15"
                    src={card.image}
                  />
                </div>
                <div>
                  <div className="flex justify-between text-lg mb-3">
                    <h1>{card.name}</h1>
                    <p className="font-bold">R$ {card.price}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-2">
                    <div className="font-bold text-xl flex gap-5 text-center p-2 md:pl-5 pl-14 rounded-lg bg-[#E6E5E5]">
                      <p className="text-[#8047F8]">-</p>
                      <p>{card.count}</p>
                      <p className="text-[#8047F8]">+</p>
                    </div>
                    <button
                      onClick={() => del(index)}
                      className="font-semibold text-lg text-center p-2 rounded-lg bg-[#E6E5E5]"
                    >
                      🗑 Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <hr />
            <div className="my-4">
              {cards.map((card, index) => (
                <div className="flex justify-between text-lg mb-2">
                  <h1>{card.name}</h1>
                  <p>R$ {card.price}</p>
                </div>
              ))}
              <div className="flex justify-between text-xl font-bold">
                <h1>Total</h1>
                <p>R$ 29,70</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={confirm}
                className="bg-[#DBAC2C] rounded-lg p-2 px-20 font-semibold text-lg text-white"
              >
                confirmar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
