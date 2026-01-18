import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  //FILTER
  const status = searchParams.get("status");
  const filter =
    !status || status === "all"
      ? null
      : { field: "status", value: status, method: "eq" };

  //SORTING
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");

  //PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const sortBy = { field, direction };

  const {
    isPending: isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  console.log(bookings);

  return [isLoading, bookings, error];
};
