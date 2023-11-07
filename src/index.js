export default (value) => {
  const getValue = _.last([...value]);
  return getValue;
};
