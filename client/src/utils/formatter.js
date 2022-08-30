export const trimString = (str) => {
  return str.length > 30 ? String(str).substring(0, 31) + "..." : str;
};
