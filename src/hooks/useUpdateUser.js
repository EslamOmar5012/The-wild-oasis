import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser as updateUserApi } from "../services/apiAuth";
import { showToast } from "../utils/helpers";

const useUpdateUser = () => {
  const queryClinet = useQueryClient();

  const { isPending: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: ({ user }) => {
      showToast("user updated successfully", "success");
      queryClinet.setQueryData("user", user);
      queryClinet.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      showToast(error.message, "error");
    },
  });

  return [isUpdating, updateUser];
};

export { useUpdateUser };
