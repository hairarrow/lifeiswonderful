import React from "react";
import Cubes from "../Cubes";
import smallCubeMap from "../Cubes/home/smallCubeMap";
import smallestCubeMap from "../Cubes/home/smallestCubeMap";
import bigCubeMap from "../Cubes/home/bigCubeMap";

const CubeBackground = () => (
  <div>
    <Cubes className="cubes--home-big-cube" cubeMap={bigCubeMap} />
    <Cubes
      className="cubes--home-smallest-cube"
      size={2}
      cubeMap={smallestCubeMap}
    />
    <Cubes className="cubes--home-small-cube" size={3} cubeMap={smallCubeMap} />
    <Cubes className="cubes--home-bg-cube-left" size={1} />
    <Cubes className="cubes--home-bg-cube-right" size={2} />
    <Cubes
      className="cubes--home-bg-cube-bottom-right"
      size={2}
      cubeMap={[
        {
          coords: {
            col: 0
          },
          style: { type: "transparent" }
        },
        {
          coords: {
            col: 1
          },
          style: { type: "transparent" }
        },
        {
          coords: {
            col: 1,
            row: 0,
            cube: 1,
            side: 0
          },
          style: { type: "default" }
        },
        {
          coords: {
            col: 1,
            row: 1,
            cube: 0,
            side: 2
          },
          style: { type: "default" }
        }
      ]}
    />
  </div>
);

export default CubeBackground;
