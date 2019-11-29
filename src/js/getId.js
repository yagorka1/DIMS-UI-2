const getId = () => {
  return String(Math.round(Math.random() * (100000000 + 10000000) - 10000000));
};

export default getId;
