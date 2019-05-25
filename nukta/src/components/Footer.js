import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/images/logos/logo_w.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-191 color-ccc">

		<div className="container">
			<div className="pt-50 pb-20 pos-relative">
				<div className="abs-tblr pt-50 z--1 text-center">
					<div className="h-80 pos-relative"><img className="opacty-1 h-100 w-auto" alt=""/></div>
				</div>
				<div className="row text-left">

					<div className="col-sm-4">
						<div className="mb-30">
							<Link to="/"><img src={logo}  alt=""/></Link>
							<p className="mtb-20 color-ccc">Nukta inakuletea habari mbalimbali zilizofanyiwa uchunguzi wa kina</p>
							<p className="color-ash">Hakimiliki &copy;<script>document.write(new Date().getFullYear());</script> Nukta Africa </p>
						</div>
					</div>

					<div className="col-sm-4">

					</div>

					<div className="col-sm-4 ">
						<h4>MAWASILIANO</h4>
						<div className="brdr-ash-1 opacty-2"></div>
							<p>S. L. P. 71719</p>
							<p>Dar es salaam, Tanzania</p>
							<p>Simu: (+255) 716 731 383, (+255) 712 212 638</p>
							<p>maoni@nukta.co.tz</p>
					</div>

				</div>
			</div>

			<div className="brdr-ash-1 opacty-2"></div>

			<div className="oflow-hidden color-ash font-9 text-sm-center ptb-sm-5">

				<ul className="float-left float-sm-none list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-10">
					<li><Link to="/terms" className="pl-0 pl-sm-10">Vigezo &amp; Masharti</Link></li>
					<li><Link to="/privacy">Sera ya faragha</Link></li>
					<li><Link to="/contact">Wasiliana nasi</Link></li>
				</ul>
				<ul className="float-right float-sm-none list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-5">
					<li><a className="pl-0 pl-sm-10" href=""><i className="ion-social-facebook"></i></a></li>
					<li><a href=""><i className="ion-social-twitter"></i></a></li>
					<li><a href=""><i className="ion-social-google"></i></a></li>
					<li><a href=""><i className="ion-social-instagram"></i></a></li>
				</ul>

			</div>
		</div>
	</footer>
    );
  }
}

export default Footer;
