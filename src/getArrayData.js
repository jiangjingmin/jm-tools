/**
 * 更新数组值为数字类型
 */
const updateArray2Number = (arr) => {
  if (!arr?.length) return [];
  return arr.map((item) => (isNaN(Number(item)) ? 0 : Number(item)));
};

/**
 * 获取数组中的最大、最小、平均、最后一个值
 */
const getArrayData = (arr) => {
  if (!arr?.length) return {};
  const values = updateArray2Number(arr);
  const total = values.reduce((pre, cur) => pre + cur, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const last = values[values.length - 1];
  let avg = total / arr.length;
  avg = String(avg).includes(".") ? avg.toFixed(2) : avg;
  return { min, max, last, avg };
};

export default getArrayData;
