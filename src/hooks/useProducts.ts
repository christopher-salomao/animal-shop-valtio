import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await api.get("/products");
      return response.data;
    }
  })
}
