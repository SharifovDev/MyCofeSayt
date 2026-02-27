import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="max-w-2xs mr-auto border-2 bg-gray-300 h-screen py-30 p-6">
        <h1 className="text-center text-3xl font-bold mb-20">Admin Panel 👨‍💻</h1>
        <div className="grid gap-5 text-center">
            <Link to={'/order'} className="border-3 rounded-lg p-2 bg-white focus:bg-gray-600 text-xl font-bold">Orders</Link>
            <Link to={'/admin'} className="border-3 rounded-lg p-2 bg-white focus:bg-gray-600 text-xl font-bold">Admin Panel</Link>
            <Link to={'/'} className="border-3 rounded-lg p-2 bg-white focus:bg-gray-600 text-xl font-bold">Menu</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
