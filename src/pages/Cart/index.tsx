import { useSnapshot } from "valtio";
import { cartState, addToCart } from "../../cartStore";
import { formatPrice } from "../../utils/formatPrice";

import { FaRegTrashAlt } from "react-icons/fa";

function Cart() {
  const snap = useSnapshot(cartState);

  if (snap.cart.length === 0) {
    return (
      <section className="mx-auto w-full max-w-7xl px-4 pb-7 flex flex-col items-center">
        <h1 className="title text-3xl text-center mt-7 mb-3">
          Seu carrinho está vazio
        </h1>
        <p className="text-center font-medium text-gray-600 mb-8">
          Adicione produtos ao seu carrinho para continuar.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-7 flex flex-col items-center">
      <h1 className="title text-3xl text-center mt-7 mb-8">Resumo do pedido</h1>

      <div className="w-full flex flex-col">
        {snap.cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:justify-between md:items-center py-2 border-b-2 border-b-lime-900 mb-2"
          >
            <div className="flex items-center">
              <img
                src={item.cover}
                alt={item.title}
                className="max-h-20 object-cover rounded-md mr-4"
              />
              <div>
                <h2 className="font-medium">{item.title}</h2>
                <p className="text-gray-600">
                  {formatPrice.format(item.price)}
                </p>
                <button
                  /* onClick={() => removeFromCart(item.id)} */ className="text-red-700 hover:text-red-800 font-bold flex items-center gap-1 mt-1 cursor-pointer"
                >
                  <FaRegTrashAlt size={20} />
                  Remover
                </button>
              </div>
            </div>

            <div className="flex flex-col md:w-1/2">
              <div className="flex items-center justify-between mt-3 px-2">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-gray-600">Qtd.</span>
                  <div>
                    <button
                      disabled={item.amount === 1}
                      className="bg-amber-300 hover:bg-amber-400 transition-colors text-white px-1.5 text-lg font-black rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.amount}</span>
                    <button onClick={() => addToCart(item)} className="bg-amber-300 hover:bg-amber-400 transition-colors  text-white px-1 text-lg font-black rounded cursor-pointer">
                      +
                    </button>
                  </div>
                </div>
                <span className="text-zinc-900 font-bold ">
                  Total: {formatPrice.format(item.total)}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-zinc-900 mt-4">
              Total do carrinho: R$ 1110,99
            </h2>
            <button className="flex items-center gap-1 text-red-700 hover:text-red-800 font-bold cursor-pointer">
              <FaRegTrashAlt size={24} />
              Remover todos os itens
            </button>
          </div>
          <button className="bg-lime-800 hover:bg-lime-900 transition-colors text-white px-4 py-2 mt-3 rounded cursor-pointer">
            Finalizar compra
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
