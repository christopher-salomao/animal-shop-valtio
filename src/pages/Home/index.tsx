// Página inicial do site, onde serão exibidos os produtos
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4">
      <h1 className="title text-3xl text-center font-bold mt-7 mb-3">
        Tudo para o seu pet você encontra aqui!
      </h1>
      <p className="text-center font-medium text-gray-600 mb-8">
        Encontre uma variedade de produtos para cuidar do seu animal de
        estimação com amor e carinho.
      </p>

      <h2 className="title text-2xl font-bold mb-7">Confira nossos produtos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          <div className="relative hover:scale-103 transition-transform duration-300">
            <Link to={"/"}>
              <img
                src="https://sujeitoprogramador.com/wp-content/uploads/2023/06/racao1.png"
                alt=""
                className="w-full max-h-48 object-contain rounded-lg shadow-md"
              />
            <p className="font-medium mt-2">Ração Premier Fórmula para Cães Sênior</p>
            <p className="text-lime-800 font-bold text-lg">R$ 199,90</p>
            </Link>
            <button className="absolute cursor-pointer bottom-24 right-2 bg-amber-300 text-white p-2 rounded-full shadow-md hover:bg-amber-400 transition-colors z-10">
              <FaCartPlus size={24} />
            </button>
          </div>

      </div>
    </section>
  );
}

export default Home;
