import { getToday } from "../utils/helpers";
import { PAGE_SIZE } from "../utils/constants";
import axios from "axios";

const MAIN_API = import.meta.env.VITE_GRAND_CREST_API_URL;
const API_URL = `${MAIN_API}/bookings`;

export async function getAllBookings({ filter, sortBy, page }) {
  const params = {
    page,
    limit: PAGE_SIZE,
  };

  if (filter) params.filter = JSON.stringify(filter);
  if (sortBy) params.sortBy = JSON.stringify(sortBy);

  const { data } = await axios.get(API_URL, { params });

  return {
    bookings: data.data.bookings,
    count: data.count,
  };
}

export async function getBooking(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);

    return response.data.data.booking;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getBookingsAfterDate(date) {
  try {
    const { data } = await axios.get(API_URL, {
      params: {
        startDate: date,
        endDate: getToday({ end: true }),
      },
    });

    return data.data.bookings.map((booking) => ({
      created_at: booking.created_at,
      totalPrice: booking.totalPrice,
      extraPrice: booking.extraPrice ?? 0,
    }));
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getStaysAfterDate(date) {
  try {
    const { data } = await axios.get(API_URL, {
      params: {
        startDate: date,
        endDate: getToday(),
      },
    });

    return data.data.bookings;
  } catch (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }
}

export async function getStaysTodayActivity() {
  const todayStart = getToday({ start: true });
  const todayEnd = getToday({ end: true });

  try {
    const [checkIns, checkOuts] = await Promise.all([
      axios.get(API_URL, {
        params: {
          filter: JSON.stringify({
            field: "status",
            value: "unconfirmed",
          }),
          startDate: todayStart,
          endDate: todayEnd,
          sortBy: JSON.stringify({
            field: "created_at",
            direction: "asc",
          }),
        },
        withCredentials: true,
      }),

      axios.get(API_URL, {
        params: {
          filter: JSON.stringify({
            field: "status",
            value: "checked-in",
          }),
          startDate: todayStart,
          endDate: todayEnd,
          sortBy: JSON.stringify({
            field: "created_at",
            direction: "asc",
          }),
        },
        withCredentials: true,
      }),
    ]);

    return [...checkIns.data.data.bookings, ...checkOuts.data.data.bookings];
  } catch (error) {
    console.log(error);
    throw new Error("Today's activities could not be loaded");
  }
}

export async function updateBooking(id, obj) {
  try {
    const data = await axios.patch(`${API_URL}/${id}`, obj, {
      withCredentials: true,
    });
    return data.data.updatedBooking;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function deleteBooking(id) {
  try {
    const data = await axios.delete(`${API_URL}/${id}`, {
      withCredentials: true,
    });
    return data.data.updatedBooking;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
