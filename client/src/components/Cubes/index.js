import "./cubes.css";
import React from "react";

const Cube = () => (
  <div className="cube">
    <div className="face front" />
    <div className="face side" />
    <div className="face top" />
  </div>
);

const CubesRow = () => (
  <div className="cubes__row">
    <Cube />
    <Cube />
    <Cube />
    <Cube />
  </div>
);

const CubesColumn = () => (
  <div className="cubes__column">
    <CubesRow />
    <CubesRow />
    <CubesRow />
    <CubesRow />
  </div>
);

const Cubes = () => (
  <div className="cubes">
    <CubesColumn />
    <CubesColumn />
    <CubesColumn />
    <CubesColumn />
  </div>
);

export default Cubes;
