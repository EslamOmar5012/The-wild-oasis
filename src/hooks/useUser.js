import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

export const useUser = () => {
  const { isPending: isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  console.log(user?.role === "authenticated");

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};
