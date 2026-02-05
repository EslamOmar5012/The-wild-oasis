import Button from "../../ui/Button";
import { useCheckOut } from "../../hooks/useCheckOut";

function CheckoutButton({ bookingId }) {
  const [isLoading, checkout] = useCheckOut();
  return (
    <Button
      $variation="primary"
      $size="small"
      onClick={() => checkout(bookingId)}
      disabled={isLoading}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
