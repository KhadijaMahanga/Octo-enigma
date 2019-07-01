import $ from 'jquery'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/logos/logo.svg';

class Menu extends Component {
	constructor(props){
		super(props);

		this.state = {
				menus: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		fetch('https://api.nukta.co.tz/wp-json/menus/v1/menus/nav-menu')
			.then(response => response.json())
			.then(data => {
				const menus = [];
				if(data.items.length > 0) {
					data.items.forEach(item => {
						menus.push({
							"name": item.title,
							"slug": item.slug,
							"order": item.menu_order
						});
					});
				}
				this.setState({
					menus: menus
				});
			});
			var srcBtn = $('.src-btn');
			var srcIcn = $('.src-icn');
			var closeIcn = $('.close-icn');
			var srcForm = $('.src-form');
			srcBtn.on('click', function(){
				if($(".question").val()!=="")
				$(".question").val("")
				else{
					$(srcIcn).toggleClass('active');
					$(closeIcn).toggleClass('active');
					$(srcForm).toggleClass('active');
				}
			});
	}


	toggleMenu(){
		$('#main-menu').toggleClass('visible-menu');
	}

	handleSubmit(event) {
    	event.preventDefault();
    	if($(".question").val()!=="") {
				window.location =`/search?q=${$(".question").val()}`;
			}
	}

	render() {
		const { menus } = this.state;

  	return (
  		<div className="container">
				<Link to="/" className="logo"><img src={logo} alt="Logo"/></Link>

				<a className="right-area src-btn" onClick={this.handleSearchClick}>
					<i className="close-icn ion-close"></i>
					<i className="active src-icn ion-search"></i>
				</a>

				<div className="src-form">
					<form onSubmit={this.handleSubmit}>
						<input type="text" className="question" placeholder="Search here"/>
						<button type="submit"><i className="ion-search"></i></button>
					</form>
				</div>

				<a className="menu-nav-icon" data-menu="#main-menu"><i className="ion-navicon"></i></a>
				<ul className="main-menu" id="main-menu">
					{menus.map(menu => (
						<li menu-item="menu-item" className="menu-item" key={menu.order}>
							<Link to={`/${menu.slug}`}>{menu.name}</Link>
						</li>
					))}
					<li menu-item="menu-item" className="menu-item">
						<Link to="/data">Data</Link>
					</li>
				</ul>
				<div className="clearfix"></div>
			</div>
  	);
  }
}

export default Menu;
