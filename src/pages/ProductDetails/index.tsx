import { useParams } from "react-router-dom";
import { useProductsById } from "../../hooks/useProductsById";
import { useNavigate } from "react-router-dom";

import { formatPrice } from "../../utils/formatPrice";

import { VscError } from "react-icons/vsc";
import { FaCartPlus } from "react-icons/fa6";
import toast from "react-hot-toast";

import { addToCart } from "../../cartStore";
import type { ProductProps } from "../../interfaces/productProps";

function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProductsById(id);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <section className="flex justify-center items-center h-full">
        <div className="w-20 h-20 border-4 border-zinc-400/80 border-b-zinc-950 rounded-full animate-spin"></div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex flex-col gap-3 justify-center items-center h-full">
        <div className="flex items-center gap-2">
          <VscError size={40} className="text-red-600" />
          <span className="font-medium">
            Erro ao carregar as informações do produto!
          </span>
        </div>
        <a
          href={`/produtos/${id}`}
          className=" bg-lime-900 text-white font-bold px-3 py-2 rounded-md hover:bg-lime-800 transition-colors"
        >
          Tentar novamente
        </a>
      </section>
    );
  }

  if (!product) {
    navigate("/");
    return null;
  }

  function handleAddToCart() {
    addToCart(product as ProductProps);
    toast.success("Produto adicionado ao carrinho!", {
      style: {
        background: "#121212",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "500",
        borderRadius: "6px",
      },
    });
    navigate("/meu-carrinho");
  }

  return (
    <section className="w-full max-w-7xl mx-auto mt-10 flex flex-col items-center">
      <h1 className="title text-xl md:text-2xl mt-2 mb-4 text-center">{product?.title}</h1>
      <div className=" px-4 flex flex-col lg:flex-row items-center">
        <img
          className="w-full max-w-xs md:max-w-md"
          src={product?.cover}
          alt={product?.title}
        />
        <div className="md:px-20">
          <p className="text-justify md:text-lg">{product?.description}</p>
          <div className="flex items-center gap-5 mt-4">
            <span className="font-medium text-lg">
              {formatPrice.format(product?.price ?? 0)}
            </span>
            <button onClick={handleAddToCart} className="cursor-pointer bg-amber-300 text-white p-2 rounded-full shadow-md hover:bg-amber-400 transition-colors z-10">
              <FaCartPlus size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
