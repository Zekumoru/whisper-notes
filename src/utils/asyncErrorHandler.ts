const asyncErrorHandler = async <E extends unknown, T>(
  promise: Promise<T>
): Promise<[E, T | undefined]> => {
  try {
    const data = await promise;
    return [null as E, data];
  } catch (error) {
    return [error as E, undefined];
  }
};

export default asyncErrorHandler;
