/**
 * 控制并发请求
 */
const limitPromise = (max) => {
  const limit = max || 3;
  const queue = [];
  let current = 0;

  // 创建一个promise，缓存超过max的请求
  const startBlocking = () => {
    const res = Promise.resolve();
    queue.push(res);
    return res;
  };

  const next = async () => {
    try {
      ++current;
      const fn = queue.shift();
      const p = await fn;
      return p;
    } catch (error) {
      return Promise.reject();
    } finally {
      --current;
      if (queue.length > 0) {
        next();
      }
    }
  };
  return async (reqFn) => {
    queue.push(reqFn);
    if (current >= limit) {
      await startBlocking;
    }
    return next();
  };
};

export default limitPromise;
