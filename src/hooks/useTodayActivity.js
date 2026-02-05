import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../services/apiBookings";

export const useTodayActivity = () => {
  const { isPending: isLoading, data: stays } = useQuery({
    queryKey: ["today-activity"],
    queryFn: getStaysTodayActivity,
  });

  return [isLoading, stays];
};
