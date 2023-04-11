const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA, NaN) && Number.isNaN(valueB, NaN)) {
    return false;
  }
  if (Object.is(valueA, 0) && Object.is(valueB, -0)) {
    return true;
  }
  if (Object.is(valueA, -0) && Object.is(valueB, 0)) {
    return true;
  }
};
