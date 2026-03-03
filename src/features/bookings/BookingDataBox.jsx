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
import { useSettings } from "../settings/useSettings";

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
  padding: 2rem 2.4rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 2.8rem;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    padding: 2.8rem 3.2rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-700);
    flex-shrink: 0;
  }

  p {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-grey-800);
  }

  span {
    font-family: "Sono";
    color: var(--color-grey-600);
    font-weight: 500;
  }

  @media (min-width: 768px) {
    gap: 1.2rem;

    svg {
      width: 2.6rem;
      height: 2.6rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

const HeaderRight = styled.div`
  font-size: 1.3rem;
  color: var(--color-grey-500);
  text-align: left;
  line-height: 1.5;

  @media (min-width: 640px) {
    text-align: right;
    font-size: 1.4rem;
  }
`;

/* ---------- SECTION ---------- */

const Section = styled.section`
  padding: 2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 3.2rem;
    gap: 2.4rem;
  }
`;

/* ---------- GUEST ---------- */

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

  @media (max-width: 480px) {
    font-size: 1.3rem;
    gap: 0.8rem;

    /* Hide bullet separators on very small screens */
    span {
      display: none;
    }
  }
`;

/* ---------- PRICE ---------- */

const Price = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  padding: 2rem;
  border-radius: 1.2rem;
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-100);

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 2.4rem;
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
  align-self: flex-start;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};

  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  @media (min-width: 640px) {
    align-self: center;
    flex-shrink: 0;
  }
`;

/* ---------- FOOTER ---------- */

const Footer = styled.footer`
  padding: 1.4rem 2.4rem;
  border-top: 1px solid var(--color-grey-100);

  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: left;

  @media (min-width: 640px) {
    text-align: right;
    padding: 1.6rem 3.2rem;
  }
`;

/* =======================
   COMPONENT
======================= */

function BookingDataBox({ booking }) {
  const { settings: { breakfastPrice } = {} } = useSettings();
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guestId,
    cabinId,
  } = booking;

  const guestName = guestId?.fullName;
  const email = guestId?.email;
  const country = guestId?.country;
  const countryFlag = guestId?.countryFlag;
  const nationalID = guestId?.nationalID;
  const cabinName = cabinId?.name;
  const cabinPrice = cabinId?.regular_price;

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
                numGuests * breakfastPrice,
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
