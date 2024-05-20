import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const {
    data: cart = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/carts?email=${user.email}`
      );
      return data;
    },
  });
  return { cart, refetch, isLoading };
};

export default useCart;
