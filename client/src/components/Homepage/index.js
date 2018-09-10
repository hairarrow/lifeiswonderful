import "./homepage.css";
import React from "react";
import ContactCard from "../ContactCard";
import Cubes from "./Cubes";
import GIRL3 from "./girl3.png";

const Homepage = () => (
  <div className="page">
    <Cubes />
    <div className="page-container">
      <nav className="topbar" style={{ height: 66 }}>
        <h4 className="topbar__brand">METACARD</h4>
      </nav>
      <section className="hero">
        <div className="hero__main-column">
          <h1 className="hero__title">
            Simple and secure digital solution for employee badges.
          </h1>
          <h2 className="hero__subtitle">
            Deeply integrated with your business to provide you security and
            peace of mind
          </h2>
          <button type="button" className="hero__button">
            See How It Works
          </button>
        </div>
        <div className="hero__content-column">
          <ContactCard
            img={GIRL3}
            name="Johanna Greene"
            title="Product Designer"
            job="Wonderful"
            phone="(808) 909-0011"
            email="JGreene@gmail.com"
            website="http://www.Greenelikethecolor.com"
          />
        </div>
      </section>
    </div>
  </div>
);

export default Homepage;
