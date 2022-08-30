export const trimString = (str, num) => {
  return str.length > num
    ? String(str)
        .substring(0, num + 1)
        .trim() + "..."
    : str;
};
