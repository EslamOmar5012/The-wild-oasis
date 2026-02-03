import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../services/apiBookings";
import { showToast } from "../utils/helpers";

const useDeleteBooking = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      queryClient.invalidateQueries(["bookings"]);
      showToast(`Booking has been deleted successfully`, "success");
    },
    onError: (error) => {
      showToast(error.message, "error");
    },
  });

  return [isDeleting, deleteBooking];
};

export { useDeleteBooking };
