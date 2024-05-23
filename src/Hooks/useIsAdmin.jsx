import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/admin/${user.email}`);
      return data?.isAdmin;
    },
  });
  return {isAdmin, isAdminLoading};
};

export default useIsAdmin;
