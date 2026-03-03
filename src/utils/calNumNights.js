export function calNumNights(booking) {
  const start = new Date(booking.startDate);
  const end = new Date(booking.endDate);

  return Math.round((end - start) / (1000 * 60 * 60 * 24));
}
