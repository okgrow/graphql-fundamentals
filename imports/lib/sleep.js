// This is a utility function that might be useful for testing optimistic UI
// usage: (must be inside an function that's declared with the async keyword)
// await sleep(2000) // sleeps 2 seconds

export default function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
