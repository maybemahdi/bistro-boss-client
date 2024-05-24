import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenu = () => {
    const {data: menu, isLoading: loading, refetch} = useQuery({
      queryKey: ["menu"],
      queryFn: async()=> {
       const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/menu`);
       return data;
      }
    })
    return {menu, loading, refetch}
};

export default useMenu;