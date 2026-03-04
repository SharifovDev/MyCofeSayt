import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useEffect } from "react";

function Admin() {
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  const [edit1, setEdit] = useState(null);
  const del = (id) => {
    let arrs = JSON.parse(localStorage.getItem("arrs")) || [];
    arrs.splice(id, 1);
    localStorage.setItem("arrs", JSON.stringify(arrs));
    setUpdate(!update);
  };
  const edit = (index) => {
    setObj(arrs[index]);
    setEdit(index);
  };
  const [obj, setObj] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
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
    if (!obj.name || !obj.description || !obj.price || !obj.image) {
      alert("Inputlarni to'ldiring");
      return;
    }
    let arrs = JSON.parse(localStorage.getItem("arrs")) || [];
    if (edit1 !== null) {
      arrs[edit1] = obj;
      setEdit(null);
    } else {
      arrs.push(obj);
    }
    localStorage.setItem("arrs", JSON.stringify(arrs));
    setUpdate(!update);
    setObj({
      name: "",
      price: "",
      image: "",
      description: "",
    });
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="border-2 p-2 m-4 rounded-lg max-w-4xl mx-auto">
        <div className="flex justify-between p-4 font-bold rounded-lg border-b-2 pr-10">
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
              <img className="w-12 h-12 rounded-full" src={arr.image} />
              <h1>{arr.name}</h1>
              <h1>${arr.price}</h1>
              <div>
                <button
                  onClick={() => edit(index)}
                  className="p-2 border-2 rounded-lg mr-3"
                >
                  🖋
                </button>
                <button
                  onClick={() => del(index)}
                  className="p-2 border-2 rounded-lg"
                >
                  🗑
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-xs ml-auto border-3 rounded-l-lg mt-20 fixed right-0 text-center">
        <h1 className="text-4xl font-bold my-10">Add Product</h1>
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
          name="description"
          value={obj.description}
          onChange={onChange}
        />
        <input
          className="border-3 p-2 rounded-lg font-bold text-lg"
          type="number"
          placeholder="price"
          name="price"
          value={obj.price}
          onChange={onChange}
        />
        <input
          className="border-3 p-2 rounded-lg font-bold text-lg my-6"
          type="url"
          placeholder="Image Url:"
          name="image"
          value={obj.image}
          onChange={onChange}
        />
        <br />
        <button
          onClick={save}
          className="border-3 p-2 rounded-lg font-black text-lg my-10 px-10"
        >
          Save ✔️
        </button>
      </div>
    </div>
  );
}

export default Admin;
