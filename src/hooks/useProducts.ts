import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { type ProductProps } from "../interfaces/productProps";

// Hook para buscar os produtos da API
// Utiliza o React Query para gerenciar o estado da requisição
// Retorna os dados dos produtos
// e o estado da requisição (loading, error, etc.)
// O hook pode ser utilizado em qualquer componente que precise dos produtos

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await api.get<ProductProps[]>("/products");
      return response.data;
    }
  })
}
