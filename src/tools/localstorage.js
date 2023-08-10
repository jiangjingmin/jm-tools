import isObject from "./isObject";

/**
 * localStorage
 */
export const getLocalItem = (key, isObj) => {
  const value = window.localStorage.getItem(key) || "";
  if (isObj) {
    return value ? JSON.parse(value) : null;
  }
  return value;
};
export const setLocalItem = (key, value) => {
  const data = isObject(value) ? JSON.stringify(value) : value;
  window.localStorage.setItem(key, data);
};

export const removeLocalItem = (key) => {
  window.localStorage.removeItem(key);
};

export const clearLocalItem = () => {
  window.localStorage.clear();
};

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
