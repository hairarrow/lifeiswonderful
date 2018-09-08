const cubePosition = n => {
  switch (n) {
    case 0:
      return "front";
    case 1:
      return "side";
    case 2:
      return "top";
    default:
      return false;
  }
};

export default cubePosition;
