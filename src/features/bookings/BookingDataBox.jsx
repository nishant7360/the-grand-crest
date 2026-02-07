import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";
import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";

/* =======================
   STYLES
======================= */

const StyledBookingDataBox = styled.section`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: 1.4rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

/* ---------- HEADER ---------- */

const Header = styled.header`
  padding: 2.8rem 3.2rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  svg {
    width: 2.6rem;
    height: 2.6rem;
    color: var(--color-grey-700);
  }

  p {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-grey-800);
  }

  span {
    font-family: "Sono";
    color: var(--color-grey-600);
    font-weight: 500;
  }
`;

const HeaderRight = styled.div`
  text-align: right;
  font-size: 1.4rem;
  color: var(--color-grey-500);

  @media (max-width: 768px) {
    text-align: left;
  }
`;

/* ---------- SECTION ---------- */

const Section = styled.section`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

/* ---------- GUEST ---------- */

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  font-size: 1.4rem;
  color: var(--color-grey-600);

  & p:first-of-type {
    font-weight: 600;
    color: var(--color-grey-800);
  }

  span {
    opacity: 0.35;
  }
`;

/* ---------- PRICE ---------- */

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  padding: 2.4rem;
  border-radius: 1.2rem;

  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

/* ---------- STATUS PILL ---------- */

const StatusPill = styled.span`
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};

  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};
`;

/* ---------- FOOTER ---------- */

const Footer = styled.footer`
  padding: 1.6rem 3.2rem;
  border-top: 1px solid var(--color-grey-100);

  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

/* =======================
   COMPONENT
======================= */

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    Guests: { fullName: guestName, email, country, countryFlag, nationalID },
    Cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <HeaderLeft>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights <span>Cabin {cabinName}</span>
          </p>
        </HeaderLeft>

        <HeaderRight>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </HeaderRight>
      </Header>

      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <Price>
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
            {formatCurrency(totalPrice)}
            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice,
              )} breakfast)`}
          </DataItem>

          <StatusPill isPaid={isPaid}>{isPaid ? "Paid" : "Pending"}</StatusPill>
        </Price>
      </Section>

      <Footer>
        Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
