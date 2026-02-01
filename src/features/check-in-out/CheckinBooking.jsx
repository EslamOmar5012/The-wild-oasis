import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import CheckBox from "../../ui/Checkbox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner.jsx";
import ErrorHeader from "../../ui/ErrorHeader.jsx";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../../hooks/useBooking";
import { useCheckIn } from "../../hooks/useCheckIn.js";
import { useEffect, useState } from "react";

import { formatCurrency } from "../../utils/helpers.js";
import { useSettings } from "../../hooks/useSettings.js";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);

  const [addBreakFast, setAddBreakFast] = useState(false);

  const [isLoading, booking, error] = useBooking();

  const [isCheckingIn, checkIn] = useCheckIn();
  const [isLoadingSettings, settingsData] = useSettings();

  const moveBack = useMoveBack();

  useEffect(() => {
    function handleConfirm() {
      setConfirmPaid(booking?.isPaid ?? false);
    }

    handleConfirm();
  }, [booking, setConfirmPaid]);

  const optionalBreakfastPrice =
    settingsData?.breakfastPrice *
    booking?.numberOfNights *
    booking?.numberGuests;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakFast) {
      checkIn({
        bookingId: booking.id,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: booking.totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkIn({ bookingId: booking.id, breakfast: {} });
    }
  }

  if (isLoading || isLoadingSettings) return <Spinner />;

  if (error) return <ErrorHeader>{error.message}</ErrorHeader>;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{booking.id}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!booking.hasBreakfast && (
        <Box>
          <CheckBox
            checked={addBreakFast}
            onChange={() => {
              setAddBreakFast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}
          </CheckBox>
        </Box>
      )}

      <Box>
        <CheckBox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that {booking.guests.fullName} has paid the total amount of
          {!addBreakFast
            ? formatCurrency(booking.totalPrice)
            : ` ${formatCurrency(booking.totalPrice + optionalBreakfastPrice)} (${formatCurrency(booking.totalPrice)} + ${formatCurrency(optionalBreakfastPrice)})`}
        </CheckBox>
      </Box>

      <ButtonGroup>
        <Button
          $variation="primary"
          $size="medium"
          onClick={handleCheckin}
          disabled={isCheckingIn}
        >
          Check in booking #{booking.id}
        </Button>
        <Button $variation="secondary" $size="medium" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
