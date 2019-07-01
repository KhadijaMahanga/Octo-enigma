import React from 'react';
import Title from './Title.js';

export default function Data () {
  return (
      <div className="container">
        <Title name="Data" />
        <ul className="nav nav-tabs list-a-pr-30">
          <li className="active"><a data-toggle="tab" href="#home">Weather</a></li>
          <li><a data-toggle="tab" href="#menu1">Dar-es-salaam Sock Exchange</a></li>
          <li><a data-toggle="tab" href="#menu2">Food Commodities</a></li>
        </ul>

        <div className="tab-content">
          <div id="home" className="tab-pane fade in active">
            <h3>HOME</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div id="menu1" className="tab-pane fade">
            <h3>Menu 1</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div id="menu2" className="tab-pane fade">
            <h3>Menu 2</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
        </div>
    </div>
  );
}
