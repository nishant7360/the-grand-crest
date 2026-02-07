import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: delBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success(`Booking has been deleted successfully`);
      queryClient.invalidateQueries();
    },
    onError: () => toast.error("Something went wrong while deleting booking."),
  });
  return { delBooking, isDeleting };
}
