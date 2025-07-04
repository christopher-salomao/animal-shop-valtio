import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-7 flex flex-col items-center">
      <h1 className="title text-3xl text-center font-bold mt-7 mb-3">
        Detalhes do Produto
      </h1>
      <p className="text-center font-medium text-gray-600 mb-8">
        ID do produto: {id}
      </p>

    </section>
  );
}

export default ProductDetails;
