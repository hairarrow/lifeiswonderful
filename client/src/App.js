import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import Splash from "./components/Splash";
import Homepage from "./components/Homepage";
import Infopage from "./components/Infopage";

const Container = ({ location }) => (
  <Wrapper>
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={"fade"}
      >
        <section className="route-section">
          <Switch location={location}>
            <Route
              exact
              path="/"
              component={() => (
                <div>
                  <Splash />
                  <Homepage />
                </div>
              )}
            />
            <Route
              path="/info"
              component={() => (
                <div>
                  <Infopage />
                </div>
              )}
            />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  </Wrapper>
);

const SwitchContainer = withRouter(Container);

class App extends Component {
  render() {
    return <SwitchContainer />;
  }
}

const Wrapper = styled.div`
  .transition-group {
    position: relative;
  }

  .route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export default App;
