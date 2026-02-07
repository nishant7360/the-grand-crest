import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns:
    9rem /* Status */
    3rem /* Flag */
    1fr /* Guest name */
    4rem /* Nights */
    9rem; /* Action */

  align-items: center;
  column-gap: 1.6rem;

  font-size: 1.4rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
  color: var(--color-grey-700);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Nights = styled.div`
  text-align: center;
  font-weight: 500;
  color: var(--color-grey-600);
`;

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TodayItem({ activity }) {
  const { id, status, Guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">ARRIVING</Tag>}
      {status === "checked-in" && <Tag type="blue">DEPARTING</Tag>}

      <Flag src={Guests.countryFlag} alt={`Flag of ${Guests.country}`} />

      <Guest title={Guests.fullName}>{Guests.fullName}</Guest>

      <Nights>{numNights}</Nights>

      <Action>
        {status === "unconfirmed" && (
          <Button
            size="small"
            variation="primary"
            as={Link}
            to={`/checkin/${id}`}
          >
            Check-in
          </Button>
        )}

        {status === "checked-in" && <CheckoutButton bookingId={id} />}
      </Action>
    </StyledTodayItem>
  );
}

export default TodayItem;
