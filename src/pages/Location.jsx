import Header from "../components/Header";

function Location() {
  return (
    <div>
      <div className="mb-30">
        <Header />
      </div>
      <div className="max-w-7xl mx-auto flex justify-between">
        <div>
          <h1 className="p-4 text-2xl font-bold font-mono">
            Complete seu pedido
          </h1>
          <div className="grid gap-6 border-2 rounded-lg p-6">
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
              type="text"
              placeholder="Number"
            />
          </div>
        </div>

        <div>
          <h1 className="p-4 text-2xl font-bold font-mono">
            Cafés selecionados
          </h1>
          <div className="border-2 rounded-lg p-6">
            <div>
              <div className="flex justify-between">
                <h1>Total de itens</h1>
                <p>R$ 29,70</p>
              </div>
              <div className="flex justify-between">
                <h1>Total</h1>
                <p>R$ 29,70</p>
              </div>
            </div>
            <button className="bg-[#DBAC2C] rounded-lg p-2 font-semibold text-xl">
              confirmar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
