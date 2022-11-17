export const toggleCard = (value) => {
  let obj = {
    explore: false,
    compare: false,
    find: false,
  };

  Object.keys(obj).forEach((key) => {
    if (key === value) {
      obj[key] = true;
    }
  });

  return obj;
};
