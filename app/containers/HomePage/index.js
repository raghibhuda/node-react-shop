/* eslint-disable react/no-this-in-sfc */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Navbar from '../../components/Navbar';

// import { Link } from 'react-router-dom';



export default function HomePage() {
  return (
    <div>
      <Navbar/>
    </div >
  );
}
