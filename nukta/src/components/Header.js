import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="bg-191">
			<div className="container">
				<div className="oflow-hidden color-ash font-9 text-sm-center ptb-sm-5">
					<ul className="float-left float-sm-none list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-10">
						<li><Link to="/about" className="pl-0 pl-sm-10 font-75">Kuhusu sisi</Link></li>
						<li><Link to="/contact" className="font-75">Wasiliana nasi</Link></li>
					</ul>
					<ul className="float-right float-sm-none list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-5">
						<li><a className="pl-0 pl-sm-10" href=""><i className="ion-social-facebook"></i></a></li>
						<li><a href=""><i className="ion-social-twitter"></i></a></li>
						<li><a href=""><i className="ion-social-google"></i></a></li>
						<li><a href=""><i className="ion-social-instagram"></i></a></li>
					</ul>

				</div>
			</div>
		</div>
    );
  }
}

export default Header;
