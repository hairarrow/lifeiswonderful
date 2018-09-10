import GUY2 from "./img/guy4.png";

const smallestCubeMap = [
  {
    coords: { col: 0 },
    style: { type: "transparent" }
  },
  {
    coords: { col: 1 },
    style: { type: "transparent" }
  },
  {
    coords: { col: 0, row: 0, cube: 1, side: 1 },
    style: { type: "img", content: GUY2 }
  },
  {
    coords: { col: 0, row: 1, cube: 1, side: 0 },
    style: { type: "scale", content: "small" }
  }
];

export default smallestCubeMap;
