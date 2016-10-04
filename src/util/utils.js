export function getCurrentDate() {
  return new Date().toISOString().slice(0, 10);
}
