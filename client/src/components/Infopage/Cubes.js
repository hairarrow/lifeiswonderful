import React from "react";
import Cubes from "../Cubes";
import smallCubeMap from "../Cubes/info/smallCubeMap";
import smallestCubeMap from "../Cubes/info/smallestCubeMap";
import bigCubeMap from "../Cubes/info/bigCubeMap";

import GIRL2 from "../Cubes/info/img/girl4.png";

const CubeBackground = () => (
  <div>
    <Cubes className="cubes--info-big-cube" cubeMap={bigCubeMap} />
    <Cubes
      className="cubes--info-smallest-cube"
      size={2}
      cubeMap={smallestCubeMap}
    />
    <Cubes className="cubes--info-small-cube" size={3} cubeMap={smallCubeMap} />
    <Cubes className="cubes--info-bg-cube-right" size={2} />
    <Cubes
      className="cubes--info-bg-cube-right-bottom"
      size={2}
      cubeMap={[
        {
          coords: { col: 0 },
          style: { type: "transparent" }
        },
        {
          coords: { col: 1 },
          style: { type: "transparent" }
        },
        {
          coords: { col: 1, row: 0, cube: 1, side: 1 },
          style: { type: "color", content: "#041d29" }
        },
        {
          coords: { col: 1, row: 1, cube: 0, side: 2 },
          style: { type: "img", content: GIRL2 }
        }
      ]}
    />
  </div>
);

export default CubeBackground;
