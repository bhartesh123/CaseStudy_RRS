import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/resources/admin-settings-male.png";
import adminProfileIcon from "../../src/resources/user-check.svg";
import createTrainIcon from "../../src/resources/file-plus.svg";
import trainListIcon from "../../src/resources/book-open.svg";
import signOutIcon from "../../src/resources/log-out.svg";
import Logout from "./adminLogout";


export default class AdminNavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              width="63"
              height="62"
              className="d-inline-block align-top"
              alt="admin-logo"
            />
          </a>
          <a className="navbar-brand" href="/">
            <h2>Admin</h2>
          </a>
          {/* <Link to="/" className="navbar-brand">
            <h2 className="navbar-brand">Admin</h2>
          </Link> */}

          <div className={`collapse  navbar-collapse`}>
            <ul className="navbar-nav  mx-auto">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
              <li className="navbar-item">
                <Link to="/adminProfile" className="nav-link">
                  <img src={adminProfileIcon} alt="adminProfileIcon" />
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/trainlist" className="nav-link">
                  <img src={trainListIcon} alt="trainListIcon" />
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/addTrain" className="nav-link">
                  <img src={createTrainIcon} alt="createTrainIcon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse  navbar-collapse ">
            <ul className="navbar-nav  ml-auto">
              <li className="navbar-item">
                {/* <Link to="/" className="nav-link" onClick={Logout}>
                  <img src={signOutIcon} alt="signOutIcon" />
                </Link> */}
                <Link to="/" className="nav-link" onClick={Logout}><img src={signOutIcon}/></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}