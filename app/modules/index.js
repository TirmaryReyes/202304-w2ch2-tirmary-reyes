export default strictEquals;

const strictEquals = (valueA, valueB) => {
  let result = Object.is(valueA, valueB);

  if (Number.isNaN(valueA, NaN) && Number.isNaN(valueB, NaN)) {
    return false;
  }

  if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    return true;
  }

  if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    return true;
  }
  return result;
};
