import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Title from './Title.js';
import Layout from './Layout.js';
import axios from 'axios';


export default function Data () {
  return (
    <Layout>
      <div className="container">
        <Title name="Data" />
        <ul class="nav nav-tabs list-a-pr-30">
          <li class="active"><a data-toggle="tab" href="#home">Weather</a></li>
          <li><a data-toggle="tab" href="#menu1">Dar-es-salaam Sock Exchange</a></li>
          <li><a data-toggle="tab" href="#menu2">Food Commodities</a></li>
          <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
        </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </div>
    </div>
    </Layout>
  )
}
