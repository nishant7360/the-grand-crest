import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Guest #${data.id} checked out successfully`);
      queryClient.invalidateQueries();
    },
    onError: () => toast.error("Something went wrong while checkingout"),
  });

  return { checkout, isCheckingOut };
}
