import $ from 'jquery'
import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
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
		fetch('/wp-json/menus/v1/menus/nav-menu')
			.then(response => response.json())
			.then(data => {
				const menus = [];
				if(data.items.length > 0) {
					data.items.map(item => {
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
			var mnItm = $('.menu-item');
			srcBtn.on('click', function(){
				if($(".question").val()!=="")
				$(".question").val("")
				else{
					$(srcIcn).toggleClass('active');
					$(closeIcn).toggleClass('active');
					$(srcForm).toggleClass('active');
				}
			});

			$('[data-menu]').on('click', function(){
				var mainMenu = $(this).data('menu');
				$(mainMenu).toggleClass('visible-menu');
			});

			mnItm.on('click', function(){
				console.log("click");
			});
	}


	toggleMenu(){
		$('#main-menu').toggleClass('visible-menu');
	}

	handleSubmit(event) {
    	event.preventDefault();
    	if($(".question").val()!=="")
			this.props.history.push("/search/"+$(".question").val());
	}

	render() {
		const { menus, searchOpen } = this.state;

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
						<li menu-item="menu-item" className="menu-item" key={menu.order} onClick={this.toggleMenu}>
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

export default withRouter(Menu);
