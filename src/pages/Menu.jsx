import React from "react";
import rasm from "../../public/img/Logo.svg"

function Menu() {
  return (
    <div>
      <nav className="flex justify-between max-w-7xl mx-auto items-center my-6">
        <img src={rasm} alt="" />
        <div>
          <button className="mr-8 font-semibold p-2 text-[#4B2995] bg-[#EBE5F9] rounded-lg">
            <i class="fa-solid fa-location-dot"></i>
            Porto Alegre, RS
          </button>
          <button className="p-2 text-[#C47F17] bg-[#F1E9C9] rounded-lg">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto">
        <div>
            <h1 className="font-mono">Encontre o café perfeito <br /> para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</p>
            <div className="flex">
                <div className="mr-4">
                    <div className="flex gap-3 items-center mb-4">
                        <button className="bg-[#C47F17] text-white rounded-full p-2"><i class="fa-solid fa-cart-shopping"></i></button>
                        <h1>Compra simples e segura</h1>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="bg-[#DBAC2C] text-white rounded-full p-2"><i class="fa-solid fa-stopwatch"></i></button>
                        <h1>Entrega rápida e rastreada</h1>
                    </div>
                </div>
                <div>
                    <div className="flex gap-3 items-center mb-4">
                        <button className="bg-[#574F4D] text-white rounded-full p-2"><i class="fa-solid fa-box-open"></i></button>
                        <h1>Embalagem mantém o café intacto</h1>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="bg-[#8047F8] text-white rounded-full p-2"><i class="fa-solid fa-mug-hot"></i></button>
                        <h1>O café chega fresquinho até você</h1>
                    </div>
                </div>
            </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Menu;
