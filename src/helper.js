// export function randomFutureDate(days) {
//   new Date(Date.now() + Math.random() * days * 86400000);
// }

export function randomFutureDate(maxDays) {
  return new Date(Date.now() + Math.random() * maxDays * 86400000);
}
