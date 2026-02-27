import Sidebar from "../components/Sidebar";
import img from "../../public/img/Image.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  if (!token) {
    navigate("/order");
  }
  const [obj, setObj] = useState({
    name: "",
    price: "",
  });
  let arrs = JSON.parse(localStorage.getItem("arrs"));
  if (arrs === null) {
    arrs = [];
  }
  const onChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setObj((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const save = () => {
    arrs.push(obj);
    localStorage.setItem("arrs", JSON.stringify(arrs));

    setObj({
      name: "",
      price: "",
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="border-2 p-2 m-4 rounded-lg">
        <div className="flex justify-between p-4 font-bold rounded-lg border-b-2">
          <h1>ID</h1>
          <h1>image</h1>
          <h1>Name</h1>
          <h1>Price</h1>
          <h1>Action</h1>
        </div>
        {arrs.map((arr, index) => {
          return (
            <div
              key={index}
              className="flex gap-20 border-b-2 p-4 font-bold rounded-lg items-center text-lg hover:bg-gray-100 hover:shadow-xl/20"
            >
              <h1>{index + 1}</h1>
              <img className="w-15" src={img} alt="" />
              <h1>{arr.name} </h1>
              <h1>${arr.price}</h1>
              <div>
                <button className="p-2 border-2 rounded-lg mr-3">🖋</button>
                <button className="p-2 border-2 rounded-lg">🗑</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-xs ml-auto border-3 rounded-l-lg mt-20 fixed right-0 text-center">
        <h1 className="text-4xl font-bold my-10">Add Poduct</h1>
        <input
          className="border-3 p-2 rounded-lg font-bold text-lg"
          type="text"
          placeholder="name"
          name="name"
          value={obj.name}
          onChange={onChange}
        />
        <input
          className="border-3 p-2 rounded-lg font-bold text-lg my-6"
          type="text"
          placeholder="description"
        />
        <input
          className="border-3 p-2 rounded-lg font-bold text-lg"
          type="number"
          placeholder="price"
          onChange={onChange}
          value={obj.price}
          name="price"
        />
        <input
          className="border-3 p-2 rounded-lg font-bold text-lg my-6"
          type="number"
          placeholder="images"
        />
        <br />
        <button
          onClick={save}
          className="border-3 p-2 rounded-lg font-black text-lg my-10 px-10"
        >
          Save ✔
        </button>
      </div>
    </div>
  );
}

export default Admin;
