import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCart = () => {
  const {
    data: cart=[],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/carts`);
      return data;
    },
  });
  return { cart, refetch, isLoading };
};

export default useCart;
