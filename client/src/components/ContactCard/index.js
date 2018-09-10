import "./contact-card.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import OfficeProximity from "./officeProximity";

class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      transform: {
        x: 0,
        y: 0,
        scale: 1
      }
    };
  }

  componentDidMount() {
    this.setOrigin(this.container);
  }

  setOrigin = ({ offsetLeft, offsetWidth, offsetTop, offsetHeight }) => {
    this.setState({
      _x: offsetLeft + Math.floor(offsetWidth / 2),
      _y: offsetTop + Math.floor(offsetHeight / 2)
    });
  };

  handleEnter = event => {
    this.update(event);
  };

  handleLeave = () => {
    this.setState({ transform: { x: 0, y: 0, scale: 1 } });
  };

  handleMove = event => {
    this.update(event);
  };

  update = event => {
    const { x, y } = this.state;
    const { offsetWidth, offsetHeight } = this.inner;
    this.updatePosition(event);
    this.updateTransformStyle(
      (y / offsetHeight / 2).toFixed(2),
      (x / offsetWidth / 2).toFixed(2) - 0.4
    );
  };

  updatePosition = event => {
    const { _x, _y } = this.state;
    const { clientX, clientY } = event || window.event;
    this.setState({
      x: clientX - _x,
      y: (clientY - _y) * -1
    });
  };

  updateTransformStyle = (x, y) => {
    this.setState({ transform: { x: Number(x), y: Number(y), scale: 1.1 } });
  };

  render() {
    const { img, name, title, job, phone, email, website } = this.props;
    const { transform } = this.state;
    const { x, y, scale } = transform;
    return (
      <div
        className="contact-card"
        ref={e => (this.container = e)}
        onMouseEnter={this.handleEnter}
        onMouseMove={this.handleMove}
        onMouseLeave={this.handleLeave}
      >
        <div
          className="contact-card__container"
          ref={e => (this.inner = e)}
          style={{
            transform: `rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`
          }}
        >
          <div className="contact-card__image-container">
            <img className="contact-card__image" alt={name} src={img} />
          </div>
          <div className="contact-card__content">
            <p className="contact-card__meta contact-card__meta--name">
              {name}
            </p>
            <p className="contact-card__meta contact-card__meta--title">
              {title}
            </p>
            <p className="contact-card__meta">{job}</p>
            <a href={`tel:${phone}`} className="contact-card__meta">
              {phone}
            </a>
            <a href={`mailto:${email}`} className="contact-card__meta">
              {email}
            </a>
            <a href="https://wonderful.io" className="contact-card__meta">
              {website}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ContactCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

export default ContactCard;
