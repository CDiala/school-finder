const setElementStyle = (parentId, childId, className) => {
  let childList = document.getElementById(parentId).children;
  for (let child of childList) {
    child.classList.remove(className);
  }
  document.getElementById(childId).classList.add(className);
};

export const setElementsStyle = (parentId, oldColor, newColor) => {
  if (oldColor.length !== newColor.length) throw new Error("wrong!");
  let colorLength = oldColor.length;
  let childList = document.getElementById(parentId).children;
  for (let child of childList) {
    for (let i = 0; i < colorLength; i++) {
      child.classList.replace(oldColor[i], newColor[i]);
    }
  }
};

export default setElementStyle;
