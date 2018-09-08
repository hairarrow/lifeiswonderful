// returns a random string of characters

const uid = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

export default uid;
