/**
 * 根据 value 获取 label
 */
const getListLabel = (value, list) => {
  const index = list.findIndex((item) => item.value === value);
  return index > -1 ? list[index]?.label : value;
};

export default getListLabel;
