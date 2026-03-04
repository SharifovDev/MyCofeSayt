import Header from "../components/Header";
import conf from "../../public/img/illustration.svg";

function Confirm() {
  let orders = JSON.parse(localStorage.getItem("orders"));

  return (
    <div>
      <div className="mb-30">
        <Header />
      </div>
      <div className="lg:max-w-6xl mx-auto py-4 md:max-w-2xl mx-auto max-w-2xs">
        <div>
          <h1 className="font-mono text-3xl text-[#C47F17] font-bold">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-lg">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {orders.map((order, index) => (
            <div className="border-4 rounded-tr-4xl rounded-bl-4xl border-l-[#DBAC2C] border-b-[#DBAC2C] border-[#8047F8] p-6 my-6">
              <div className="p-2 flex items-center gap-4">
                <div className="rounded-full p-2 text-white bg-[#8047F8]">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <h1>
                  Entrega em <b>{order.buyurtmachi.Fullname}</b> <br />
                  Farrapos - Porto Alegre, R
                </h1>
              </div>
              <div className="p-2 flex items-center gap-4 my-4">
                <div className="rounded-full p-2 text-white bg-[#DBAC2C]">
                  <i class="fa-solid fa-alarm-clock"></i>
                </div>
                <h1>
                  <b>{order.buyurtmachi.Location}</b> <br />
                  20 min - 30 min
                </h1>
              </div>
              <div className="p-2 flex items-center gap-4 my-2">
                <div className="rounded-full p-2 text-white bg-[#C47F17]">
                  <i class="fa-solid fa-dollar-sign"></i>
                </div>
                <h1>
                  Pagamento na entrega
                  <b>Cartão de Crédito</b>
                </h1>
              </div>
            </div>
          ))}
          <div>
            <img src={conf} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
