export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}`
    : 'http://localhost:3002/api'
