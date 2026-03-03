import Header from "../components/Header";

function Confirm() {
  return (
    <div>
      <div className="mb-30">
        <Header />
      </div>
      <div className="max-w-7xl mx-auto">
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="border-2 p-2">
          <div className="border-2 p-2 flex items-center gap-2">
            <div className="border-2 rounded-full p-2 text-white bg-[#8047F8]">
                <i class="fa-solid fa-location-dot"></i>
            </div>
            <h1>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> <br />
              Farrapos - Porto Alegre, R
            </h1>
          </div>
          <div className="border-2 p-2 flex items-center gap-2">
            <div className="border-2 rounded-full p-2 text-white bg-[#DBAC2C]">
                <i class="fa-solid fa-alarm-clock"></i>
            </div>
            <h1>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
