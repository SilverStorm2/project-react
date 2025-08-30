// Porównuje dwa stringi bez względu na wielkość liter
const strContains = (str, substr) =>
  str.toLowerCase().includes(substr.toLowerCase());

export default strContains;
