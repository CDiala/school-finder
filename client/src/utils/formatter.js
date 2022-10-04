export const trimString = (str, num) => {
  // truncate string if longer than normal
  // remove (not truncate) the last word that forms 300th chars, and add "..."
  let newStr = str.substring(0, num);
  let strArray = newStr.split(" ");
  let lastWord = strArray[strArray.length - 1];
  let wordIndex = newStr.lastIndexOf(lastWord);

  return str.length > num
    ? newStr.substring(0, wordIndex).trim() + "..."
    : newStr;
};

export const appendReadMoreLink = (str) => {
  let strResult = str;
  return strResult.includes("...");
};
