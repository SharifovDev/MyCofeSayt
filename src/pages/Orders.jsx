import Sidebar from "../components/Sidebar";

function Orders() {
  JSON.parse(localStorage.getItem)
  return (
    <div>
      <Sidebar />
      <div className="max-w-5xl ml-auto pr-10 py-10">
        <div className="border-2 rounded-lg p-2">

          <div className="border-2 p-2 rounded-lg flex justify-around mb-2">
           <h1 className="text-xl font-bold">User Info</h1>
           <h1 className="text-xl font-bold">Orders</h1>
          </div>

          <div className="flex justify-between">
            <div className="border-2 rounded-xl p-2">
              <h1 className="font-bold text-lg">Fullname:</h1>
              <h1 className="font-bold text-lg">Location:</h1>
              <h1 className="font-bold text-lg">Number:</h1>
            </div>
            <div className="border-2 rounded-xl p-2">
              <h1>img</h1>
              <h1>name</h1>
              <h1>price</h1>
              <h1>count</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
