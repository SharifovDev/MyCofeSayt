import Header from "../components/Header";
import conf from "../../public/img/illustration.svg";

function Confirm() {
  return (
    <div>
      <div className="mb-30">
        <Header />
      </div>
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="font-mono text-3xl text-[#C47F17] font-bold">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-lg">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="flex justify-between py-4">
          <div className="border-2 rounded-tr-4xl rounded-bl-4xl border-l-[#DBAC2C] border-b-[#DBAC2C] border-[#8047F8] p-6 my-6">
            <div className="p-2 flex items-center gap-4">
              <div className="rounded-full p-2 text-white bg-[#8047F8]">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <h1>
                Entrega em <b>Rua João Daniel Martinelli, 102</b> <br />
                Farrapos - Porto Alegre, R
              </h1>
            </div>
            <div className="p-2 flex items-center gap-4 my-4">
              <div className="rounded-full p-2 text-white bg-[#DBAC2C]">
                <i class="fa-solid fa-alarm-clock"></i>
              </div>
              <h1>
                Previsão de entrega <br />
                <b>20 min - 30 min</b>
              </h1>
            </div>
            <div className="p-2 flex items-center gap-4 my-2">
              <div className="rounded-full p-2 text-white bg-[#C47F17]">
                <i class="fa-solid fa-dollar-sign"></i>
              </div>
              <h1>
                Previsão de entrega <br />
                <b>20 min - 30 min</b>
              </h1>
            </div>
          </div>
          <div>
            <img src={conf} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
