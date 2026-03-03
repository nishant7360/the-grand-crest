import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const status = searchParams.get("status");

  const filter =
    !status || status === "all"
      ? null
      : {
          field: "status",
          value: status,
          method: "eq",
        };

  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [sortField, sortDirection] = sortByRaw.split("-");

  const sortBy = {
    field: sortField,
    direction: sortDirection,
  };

  const page = Number(searchParams.get("page")) || 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () =>
      getAllBookings({
        filter,
        sortBy,
        page,
      }),
    keepPreviousData: true,
  });

  const bookings = data?.bookings ?? [];
  const count = data?.count ?? 0;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () =>
        getAllBookings({
          filter,
          sortBy,
          page: page + 1,
        }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () =>
        getAllBookings({
          filter,
          sortBy,
          page: page - 1,
        }),
    });
  }

  return { isLoading, bookings, count, error };
}
