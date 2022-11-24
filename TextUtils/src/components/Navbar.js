import React from "react";
import PropTypes from "prop-types";
// import { Outlet, Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            {props.title}
          </Link> */}
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/About">
                  {props.aboutInfo}
                </Link>
              </li> */}
            </ul>

            <input id="colorpicker" type="color" />

            <div
              class={`form-check form-switch text-${
                props.mode !== "light" ? "light" : "dark"
              }`}
            >
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={() => {
                  props.toggleFunc("#032744");
                }}
              />

              <label class="form-check-label" for="flexSwitchCheckDefault">
                Enable {props.mode !== "light" ? "light" : "dark"} Mode
              </label>
            </div>

            {/* <div
            class={`form-check form-switch text-${
              props.mode != "light" ? "light" : "dark"
            }`}
          >
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefaultBlue"
              onClick={() => {
                document.getElementById(
                  "flexSwitchCheckDefault"
                ).checked = false;
                document.getElementById(
                  "flexSwitchCheckDefaultRed"
                ).checked = false;
                console.log(props.mode);
                props.setLightBag();
                console.log(props.mode);
                props.toggleFunc("blue");
              }}
            />
            <label class="form-check-label" for="flexSwitchCheckDefaultBlue">
              Enable Blue Mode
            </label>
          </div> */}

            {/* <div
            class={`form-check form-switch text-${
              props.mode != "light" ? "light" : "dark"
            }`}
          >
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefaultRed"
              onClick={() => {
                document.getElementById(
                  "flexSwitchCheckDefault"
                ).checked = false;
                document.getElementById(
                  "flexSwitchCheckDefaultBlue"
                ).checked = false;
                console.log(props.mode);
                props.setLightBag();
                console.log(props.mode);
                props.toggleFunc("red");
              }}
            />
            <label class="form-check-label" for="flexSwitchCheckDefaultRed">
              Enable Red Mode
            </label>
          </div> */}
          </div>
        </div>
      </nav>

      {/* <Outlet /> */}
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutInfo: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title Text here",
  aboutInfo: "About Text here",
};
