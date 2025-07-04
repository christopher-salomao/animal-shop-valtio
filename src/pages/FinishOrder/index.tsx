import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";

function FinishOrder() {
  return (
    <section className="flex flex-col justify-center items-center h-full">
      <div className="flex items-center gap-2">
        <GiConfirmed size={40} className="text-green-600" />
        <span className="font-medium text-xl">Pedido concluído com sucesso!</span>
      </div>
      <p className="text-center">Agradecemos pela sua compra!</p>
      <Link
        to="/"
        className="mt-4 bg-lime-900 text-white font-bold px-3 py-2 rounded-md hover:bg-lime-800 transition-colors"
      >
        Voltar para a loja
      </Link>
    </section>
  );
}

export default FinishOrder;
