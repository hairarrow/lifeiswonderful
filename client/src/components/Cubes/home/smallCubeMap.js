import GUY3 from "./img/guy3.png";
import GIRL2 from "./img/girl2.png";

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
  },
  {
    coords: { col: 1, row: 1, cube: 1, side: 1 },
    style: { type: "img", content: GUY3 }
  }
];

export default smallCubeMap;
