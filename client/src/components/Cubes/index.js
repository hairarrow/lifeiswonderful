import "./cubes.css";
import PropTypes from "prop-types";
import React from "react";
import createCube from "./createCube";

const Cubes = ({ size, cubeMap, className, ...props }) => {
  const theCube = createCube(cubeMap, size);
  return (
    <div className={`cubes ${className ? className : ""}`} {...props}>
      {theCube.map(({ col, rows, ...column }) => (
        <div key={column.id} className={`cubes__column cubes__col-${col}`}>
          {rows.map(({ row, cubes, ...Row }) => (
            <div
              key={Row.id}
              className={`cubes__row cubes__col-${col}-row-${row}`}
            >
              {cubes.map(({ cube, sides, ...Cube }) => (
                <div
                  key={Cube.id}
                  className={`cube cube__col-${col}-row-${row}-cube-${cube}`}
                >
                  {sides.map(({ side, position, style, ...Side }) => (
                    <div
                      key={Side.id}
                      className={`
face ${position} cube__col-${col}-row-${row}-cube-${cube}-side-${side}
${style.type === "transparent" ? "face--transparent" : ""}
${style.type === "img" ? "face--img" : ""}
                      `}
                      style={{
                        background: style.type === "color" ? style.content : ""
                      }}
                    >
                      {style.type === "img" && (
                        <div className="face__image-container">
                          <img className="face__image" src={style.content} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Cubes.defaultProps = {
  size: 4,
  cubeMap: []
};

Cubes.propTypes = {
  size: PropTypes.number,
  cubeMap: PropTypes.arrayOf(
    PropTypes.shape({
      coords: PropTypes.shape({
        col: PropTypes.number.isRequired,
        row: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.arrayOf(PropTypes.number)
        ]),
        cube: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.arrayOf(PropTypes.number)
        ]),
        side: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.arrayOf(PropTypes.number)
        ])
      }).isRequired,
      style: PropTypes.shape({
        type: PropTypes.oneOf(["transparent", "color", "img", "default"]),
        content: PropTypes.string
      }).isRequired
    })
  )
};

export default Cubes;
