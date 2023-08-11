/**
 * 判断是否是JSON字符串
 */
const isJSONString = (str) => {
  if (str && typeof str == "string") {
    try {
      const obj = JSON.parse(str);
      return typeof obj == "object" && obj;
    } catch (e) {
      return false;
    }
  }
  return false;
};

export default isJSONString;
