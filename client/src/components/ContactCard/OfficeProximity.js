import "./office-proximity.css";
import React, { Component } from "react";
import QRCode from "qrcode.react";

class OfficeProximity extends Component {
  constructor(props) {
    super(props);

    this.substractBy = 0.01;
    this.updateInterval = 500;

    this.state = {
      distance: 0.15,
      showQr: false,
      qrExpanded: false
    };
  }

  componentDidMount() {
    let intervalId = setInterval(this.updateDistance, this.updateInterval);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { intervalId, leaveTimeout } = this.state;
    clearInterval(intervalId);
    clearInterval(leaveTimeout);
  }

  updateDistance = () => {
    this.setState(
      ({ distance }) => ({
        distance: (distance - this.substractBy).toFixed(2)
      }),
      this.checkDistance
    );
  };

  checkDistance = () => {
    const { distance, intervalId } = this.state;
    if (Number(distance) === 0) {
      clearInterval(intervalId);
      this.setState({ showQr: true });
    }
  };

  toggleQrExpand = () => {
    this.setState(({ qrExpanded }) => ({ qrExpanded: !qrExpanded }));
  };

  startLeave = () => {
    let leaveTimeout = setTimeout(this.toggleQrExpand, 600);
    this.setState({ leaveTimeout });
  };

  abortLeave = () => {
    const { leaveTimeout } = this.state;
    clearTimeout(leaveTimeout);
  };

  render() {
    const { distance, showQr, qrExpanded } = this.state;
    return (
      <div
        onMouseLeave={qrExpanded ? this.startLeave : undefined}
        onMouseEnter={qrExpanded ? this.abortLeave : undefined}
        className={`office-proximity 
          ${qrExpanded ? "office-proximity--qr-expanded" : ""}
          ${showQr && !qrExpanded ? "office-proximity--qr-show" : ""}
        `}
      >
        {showQr ? (
          <button
            type="button"
            className="office-proximity__enter-button"
            onClick={this.toggleQrExpand}
          >
            Enter the office
          </button>
        ) : (
          <div className="office-proximity__button">
            <span className="office-proximity__distance">{distance} mi</span>{" "}
            <span className="office-proximity__distance-label">
              from the office
            </span>
          </div>
        )}
        <div className="office-proximity__qr-container">
          <QRCode
            className="office-proximity__qr"
            value="https://wonderful.io"
            fgColor="#e83267"
            size={200}
            onClick={this.toggleQrExpand}
          />
        </div>
      </div>
    );
  }
}

export default OfficeProximity;
