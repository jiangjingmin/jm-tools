/**
 * 将数字转换为点分十进制，例：176865280 => 10.138.192.0
 */
const int2ip = (ipInt) =>
  `${ipInt >>> 24}.${(ipInt >> 16) & 255}.${(ipInt >> 8) & 255}.${ipInt & 255}`;

export default int2ip;
