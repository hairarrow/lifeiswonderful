import GIRL2 from "./img/guy5.png";

const smallCubeMap = [
  {
    coords: { col: 0 },
    style: { type: "transparent" }
  },
  {
    coords: { col: 1 },
    style: { type: "transparent" }
  },
  {
    coords: { col: 2 },
    style: { type: "transparent" }
  },
  {
    coords: { col: 1, row: 0, cube: 1, side: 2 },
    style: { type: "default" }
  },
  {
    coords: { col: 1, row: 1, cube: 2, side: 0 },
    style: { type: "default" }
  },
  {
    coords: { col: 2, row: 1, cube: 0, side: 0 },
    style: { type: "scale", content: "small" }
  },
  {
    coords: { col: 1, row: 0, cube: 1, side: 0 },
    style: { type: "img", content: GIRL2 }
  }
];

export default smallCubeMap;
