// Página inicial do site, onde serão exibidos os produtos
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { VscError } from "react-icons/vsc";

import { useProducts } from "../../hooks/useProducts";
import { formatPrice } from "../../utils/formatPrice";

import { addToCart } from "../../cartStore";

import toast from "react-hot-toast";

import type { ProductProps } from "../../interfaces/productProps";

function Home() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="w-20 h-20 border-4 border-zinc-400/80 border-b-zinc-950 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-3 justify-center items-center h-full">
        <div className="flex items-center gap-2">
          <VscError size={40} className="text-red-600" />
          <span className="font-medium">Erro ao carregar produtos!</span>
        </div>
        <a
          href="/"
          className=" bg-lime-900 text-white font-bold px-3 py-2 rounded-md hover:bg-lime-800 transition-colors"
        >
          Tentar novamente
        </a>
      </div>
    );
  }

  function handleAddToCart(product: ProductProps) {
    addToCart(product);
    toast.success("Produto adicionado ao carrinho!", {
        style: {
          background: "#121212",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "500",
          borderRadius: "6px",
        }
      });
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-7 flex flex-col items-center">
      <h1 className="title text-3xl text-center font-bold mt-7 mb-3">
        Tudo para o seu pet você encontra aqui!
      </h1>
      <p className="text-center font-medium text-gray-600 mb-8">
        Encontre uma variedade de produtos para cuidar do seu animal de
        estimação com amor e carinho.
      </p>

      <h2 className="title text-2xl font-bold mb-7 self-start">Confira nossos produtos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products?.map((product) => (
          <div
            key={product.id}
            className="relative hover:scale-103 transition-transform duration-300"
          >
            <Link to={"/"}>
              <img
                src={product.cover}
                alt={product.title}
                className="w-full max-h-48 object-contain rounded-lg shadow-md"
              />
              <p className="font-medium mt-2">{product.title}</p>
              <p className="text-lime-800 font-bold text-lg">
                {formatPrice.format(product.price)}
              </p>
            </Link>
            <button onClick={() => handleAddToCart(product)} className="absolute cursor-pointer bottom-24 right-2 bg-amber-300 text-white p-2 rounded-full shadow-md hover:bg-amber-400 transition-colors z-10">
              <FaCartPlus size={24} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
