import uid from "../../utils/uniqueId";
import counter from "../../utils/counter";
import cubePosition from "./cubePosition";

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

const createCube = (cubeMap = [], size = 4) => {
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
                const coords = { col, row, cube, side };
                const style = applyStyles(
                  coords,
                  cubeMap.filter(
                    entry =>
                      col === entry.coords.col ||
                      row === entry.coords.row ||
                      cube === entry.coords.cube ||
                      side === entry.coords.side
                  )
                );
                return {
                  id: uid(),
                  side,
                  position,
                  coords,
                  style
                };
              })
            };
          })
        };
      })
    };
  });
};

const applyStyles = (sideCoords, cmap) => {
  let sideStyle = false;
  if (cmap.length) {
    cmap.map(({ coords, style }) => {
      if (
        Object.keys(coords).every(
          coord =>
            coords[coord].length
              ? coords[coord].includes(sideCoords[coord])
              : coords[coord] === sideCoords[coord]
        )
      )
        sideStyle = style;
      return sideStyle;
    });
  }
  return sideStyle;
};

export default createCube;
