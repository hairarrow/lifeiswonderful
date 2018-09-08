import uid from "../../utils/uniqueId";
import counter from "../../utils/counter";

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

/*
You can pass a map with coordinates to choose the display for a side
[{
  coords: { col, row, cube, side },
  style: {
    type: "transparent" || "color" || "img",
    content: "#000" || "imgUrl"
  }
  color: "#000",
  image: "url",
}]
*/

const createCube = (map = [], size = 4) => {
  const colCounter = counter();
  return [...new Array(size)].map(() => {
    const rowCounter = counter();
    const col = colCounter();
    return {
      id: uid(),
      col,
      rows: [...new Array(size)].map(() => {
        const cubeCounter = counter();
        const row = rowCounter();
        return {
          id: uid(),
          row,
          cubes: [...new Array(size)].map(() => {
            const sideCounter = counter();
            const cube = cubeCounter();
            return {
              id: uid(),
              cube,
              sides: [...new Array(3)].map(() => {
                const side = sideCounter();
                const position = cubePosition(side);
                return {
                  id: uid(),
                  side,
                  position,
                  style: false,
                  coords: { col, row, cube, side }
                };
              })
            };
          })
        };
      })
    };
  });
};

export default createCube;
