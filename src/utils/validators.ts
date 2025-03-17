export const isValidIP = (ip: string): boolean =>
  /^((25[0-5]|2[0-4][0-9]|[01]?\d\d?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?\d\d?)$/.test(ip);

export const isReservedIP = (ip: string): boolean => {
  const reservedPatterns = [
    /^0\./,
    /^10\./,
    /^127\./,
    /^169\.254\./,
    /^172\.(1[6-9]|2\d|3[0-1])\./,
    /^192\.0\.2\./,
    /^192\.168\./,
    /^255\.255\.255\.255$/,
  ];
  return reservedPatterns.some((pattern) => pattern.test(ip));
};
