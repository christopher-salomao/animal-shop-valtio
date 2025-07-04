import { Link } from "react-router-dom";
import { VscError } from "react-icons/vsc";

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-full relative text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-lg mb-8">
        A página que você está procurando não existe.
      </p>
      <Link
        to="/"
        className=" bg-lime-900 text-white font-bold px-3 py-2 rounded-md hover:bg-lime-800 transition-colors"
      >
        Voltar para a página inicial
      </Link>
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <VscError size={250} className="text-red-600/20" />
      </div>
    </section>
  );
}

export default NotFound;
