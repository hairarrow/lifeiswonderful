import "./homepage.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import ContactCard from "../ContactCard";
import Cubes from "./Cubes";
import GIRL3 from "./girl3.png";

const Homepage = () => (
  <div className="page">
    <Cubes />
    <div className="page-container">
      <Header />
      <section className="hero">
        <div className="hero__main-column">
          <h1 className="hero__title">
            Simple and secure digital solution for employee badges
          </h1>
          <h2 className="hero__subtitle">
            Deeply integrated with your business to protect your employees and
            provide you peace of mind
          </h2>
          <Link to="/info" className="hero__button">
            See How It Works
          </Link>
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
