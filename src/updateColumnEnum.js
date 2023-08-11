/**
 * Antd 列表项 valueEnum
 * status: 'Success' | 'Error' | 'Processing' | 'Warning' | 'Default'
 */
const updateColumnEnum = (list) => {
  return list.reduce((obj, cur) => {
    const { value, label, status, ...rest } = cur || {};
    const text = label ? String(label) : value;
    obj[value] = { text, status, ...rest };
    return obj;
  }, {});
};

export default updateColumnEnum;
