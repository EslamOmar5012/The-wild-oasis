import styled from "styled-components";
import { useRecentBookings } from "../../hooks/useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "../../hooks/useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../../hooks/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const [isLoading, bookings] = useRecentBookings();

  const [isLoading2, staysConfirmed, numDays] = useRecentStays();

  const [isLoading3, cabins] = useCabins();

  if (isLoading || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={staysConfirmed}
        numDays={numDays}
        cabinCount={cabins.count}
      />
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales </div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
