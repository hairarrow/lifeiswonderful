import "./infopage.css";
import React from "react";
import Header from "../Header";
import Cubes from "./Cubes";

import I0 from "./info0.png";
import I1 from "./info1.png";
import I2 from "./info2.png";
import PHONE from "./phone.png";

const DATA = [
  {
    key: 1,
    image: I0,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nullam"
  },
  {
    key: 2,
    image: I1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nullam efficitur lectus eros"
  },
  {
    key: 3,
    image: I2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, nullam "
  }
];

const Infopage = () => (
  <div className="page page--info">
    <Cubes />
    <div className="page-container">
      <Header light />
      <div className="info">
        <div className="info__content">
          <h2 className="info__title">Lorem ipsum</h2>
          {DATA.map(({ key, image, content }) => (
            <div className="info-content" key={key}>
              <div className="info-content__image-container">
                <img
                  className="info-content__image"
                  src={image}
                  alt={content}
                />
              </div>
              <div className="info-content__text-container">
                <span className="info-content__content-number">{key}</span>
                <p className="info-content__text">{content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="info__media">
          <img src={PHONE} alt="phone" />
        </div>
      </div>
    </div>
  </div>
);

export default Infopage;
