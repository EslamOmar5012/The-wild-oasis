import styled from "styled-components";

import BookingDataBox from "./BookingDataBox.jsx";
import Row from "../../ui/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import Tag from "../../ui/Tag.jsx";
import ButtonGroup from "../../ui/ButtonGroup.jsx";
import Button from "../../ui/Button.jsx";
import ButtonText from "../../ui/ButtonText.jsx";

import { useMoveBack } from "../../hooks/useMoveBack.js";
import { useBooking } from "../../hooks/useBooking.js";
import Spinner from "../../ui/Spinner.jsx";
import ErrorHeader from "../../ui/ErrorHeader.jsx";
import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../../hooks/useCheckOut.js";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useDeleteBooking } from "../../hooks/useDeleteBooking.js";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const [isLoading, booking, error] = useBooking();

  const [isCheckingOut, checkOut] = useCheckOut();

  const [isDeleting, deleteBooking] = useDeleteBooking();

  const moveBack = useMoveBack();

  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (error) return <ErrorHeader>{error.message}</ErrorHeader>;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{booking.id}</Heading>
          <Tag type={booking.status}>{booking.status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {booking.status === "unconfirmed" && (
          <Button
            $variation="primary"
            $size="medium"
            onClick={() => navigate(`/checkin/${booking.id}`)}
          >
            Check In
          </Button>
        )}

        {booking.status === "checked-in" && (
          <Button
            $variation="secondry"
            $size="medium"
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkOut(booking.id)}
            disabled={isCheckingOut}
          >
            Check Out
          </Button>
        )}

        <Button
          $variation="danger"
          $size="medium"
          onClick={() => deleteBooking(booking.id)}
          disabled={isDeleting}
        >
          Delete
        </Button>

        <Button $variation="secondary" $size="medium" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
