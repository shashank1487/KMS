import React from "react";
import { Link } from "react-router-dom";
import { Search, Notifications, Person } from "styled-icons/material";
import HeaderWrapper from "./style";
import * as CONSTANTS from "../../utils/constants";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          {CONSTANTS.KMS}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav links">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                {CONSTANTS.PROOF_OF_CONCEPTS}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {CONSTANTS.KB_ARTICLES}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {CONSTANTS.CODE_SNIPPETS}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {CONSTANTS.QUE_ANS}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#submit"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {CONSTANTS.SUBMIT}
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/">
                  {CONSTANTS.PROOF_OF_CONCEPTS_SUBMIT}
                </Link>
                <Link className="dropdown-item" to="/">
                  {CONSTANTS.KB_ARTICLES_SUBMIT}
                </Link>
                <Link className="dropdown-item" to="/">
                  {CONSTANTS.CODE_SNIPPETS_SUBMIT}
                </Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav settings">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <Search size="20" />
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <Notifications size="20" />
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <Person size="20" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderWrapper(Header);
