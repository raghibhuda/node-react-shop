/* eslint-disable react/no-this-in-sfc */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

// import { Link } from 'react-router-dom';

import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import HowToReg from '@material-ui/icons/HowToReg';

export default function HomePage() {
  return (
    <div>
      <nav>
        <div className="container">
          <ul className="nav__left">
            <li>
              <a href="#/"><DashboardIcon/>Home</a></li>
          </ul>
          <ul className="nav__right">
            <li>
              <a href="#"><AccountCircle/>Sign In</a>
            </li>
            <li>
              <a href="#"><HowToReg/> Register </a>
            </li>
            <li>
              <a href="#/cart"> Cart (0)</a>
            </li>
          </ul>
        </div>
      </nav>
    </div >
  );
}
