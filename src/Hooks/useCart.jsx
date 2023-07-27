import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, isLoading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("res from axios", res.data);
      return res.data;
    },
  });
  return [cart, refetch];
};
export default useCart;
