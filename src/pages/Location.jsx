import Header from "../components/Header";

function Location() {
    
  return (
    <div>
      <div className="mb-30">
        <Header />
      </div>
      <div className="max-w-7xl mx-auto flex justify-around">
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
              placeholder="Full name"
            />
            <input
              className="border-2 rounded-lg p-2 font-bold"
              type="text"
              placeholder="Location"
            />
            <input
              className="border-2 rounded-lg p-2 font-bold"
              type="number"
              placeholder="Number"
            />
          </div>
        </div>

        <div>
          <h1 className="p-4 text-2xl font-bold font-mono">
            Cafés selecionados
          </h1>
          <div className="p-8 rounded-bl-3xl rounded-tr-3xl bg-[#F3F2F2]">
            <div className="flex my-4">
              <div>
                <img src=""/>
              </div>
              <div>
                <div className="flex justify-between text-lg mb-3" >
                  <h1>Expresso Tradicional</h1>
                  <p className="font-bold">R$ 9,90</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-bold text-xl flex gap-5 text-center p-2 pl-5 rounded-lg bg-[#E6E5E5]">
                    <p className="text-[#8047F8]">-</p>
                    <p>0</p>
                    <p className="text-[#8047F8]">+</p>
                  </div> 
                  <button className="font-semibold text-lg text-center p-2 rounded-lg bg-[#E6E5E5]">🗑 Remover</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="my-4">
              <div className="flex justify-between text-lg mb-2">
                <h1>Total de itens</h1>
                <p>R$ 29,70</p>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <h1>Total</h1>
                <p>R$ 29,70</p>
              </div>
            </div>
            <button className="bg-[#DBAC2C] rounded-lg p-2 font-semibold text-lg text-white px-10 mx-18 mt-4">
              confirmar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
