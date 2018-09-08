/*
  usage:
    const count = counter();
    counter() // returns 1
    counter() // returns 2
    counter() // returns 3
    counter() // returns 4
*/

const counter = (i = 0) => () => i++;

export default counter;
