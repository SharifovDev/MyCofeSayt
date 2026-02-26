import rasm from "../../public/img/Logo.svg"

function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur shadow-lg/10">
        <nav className="flex justify-between lg:max-w-7xl md:max-w-2xl max-w-xs mx-auto items-center py-6 ">
        <img src={rasm} alt="" />
        <div>
          <button className="md:mr-8 mr-2 font-semibold p-2 text-[#4B2995] bg-[#EBE5F9] rounded-lg">
            <i class="fa-solid fa-location-dot"></i>
            Porto Alegre, RS
          </button>
          <button className="p-2 text-[#C47F17] bg-[#F1E9C9] rounded-lg">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header