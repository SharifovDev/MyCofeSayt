import Sidebar from "../components/Sidebar";

function Orders() {
  let orders = JSON.parse(localStorage.getItem("orders"));
  return (
    <div>
      <Sidebar />
      <div className="max-w-6xl ml-auto pr-20 py-10">
        <div className="border-2 rounded-lg p-2">
          <div className="border-b-2 p-2 rounded-2xl flex justify-around mb-2">
            <h1 className="text-xl font-bold">User Info</h1>
            <h1 className="text-xl font-bold">Orders</h1>
          </div>

          {orders.map((order, index) => (
            <div key={index} className="flex justify-between mb-2 border-b-2 rounded-2xl p-2 ">
              <div className="rounded-xl p-2 bg-gray-200">
                <h1 className="font-bold text-lg">
                  Fullname:{order.buyurtmachi.Fullname}
                </h1>
                <h1 className="font-bold text-lg">
                  Location:{order.buyurtmachi.Location}
                </h1>
                <h1 className="font-bold text-lg">
                  Number:{order.buyurtmachi.Number}
                </h1>
              </div>
              {order.orders.map((item, index) => (
                <div key={index} className="p-2 rounded-xl bg-gray-200">
                  <div>
                    <h1 className="font-semibold text-lg">{item.name}</h1>
                  </div>
                  <div className="text-center flex gap-4">
                    <div>
                      <img className="w-15 h-15 rounded-full" src={item.image} />
                    </div>
                    <div>
                      <h1 className="font-semibold text-lg">${item.price}</h1>
                    <h1 className="font-semibold text-lg rounded-full bg-gray-100">{item.count}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
