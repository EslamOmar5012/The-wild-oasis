import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log("Error: ", err.message);
      toast.error("email or password are wrong");
    },
  });

  return [isLoading, login];
};
