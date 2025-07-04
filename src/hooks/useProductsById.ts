import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { type ProductProps } from "../interfaces/productProps";

// Hook para buscar produtos por ID
// Utiliza o React Query para gerenciar o estado da requisição
// Retorna os dados do produto e o estado da requisição (loading, error, etc.)
// O hook pode ser utilizado em qualquer componente que precise de produtos por ID

export function useProductsById(productId: string | undefined) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const response = await api.get<ProductProps>(`/products/${productId}`);
      return response.data;
    }
  });
}
