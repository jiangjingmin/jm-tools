import isObject from "./isObject";

/**
 * sessionStorage
 */
export const getSessionItem = (key, isObj) => {
  const value = window.sessionStorage.getItem(key) || "";
  if (isObj) {
    return value ? JSON.parse(value) : null;
  }
  return value;
};
export const setSessionItem = (key, value) => {
  const data = isObject(value) ? JSON.stringify(value) : value;
  window.sessionStorage.setItem(key, data);
};

export const removeSessionItem = (key) => {
  window.sessionStorage.removeItem(key);
};

export const clearSessionItem = () => {
  window.sessionStorage.clear();
};
