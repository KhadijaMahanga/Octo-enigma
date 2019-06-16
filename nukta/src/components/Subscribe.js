import $ from 'jquery'
import React, { Component } from 'react';
import Title from './Title.js';
import axios from 'axios';

class Subscribe extends Component {
	constructor(props) {
    	super(props);
    	this.handleClick = this.handleClick.bind(this);
  	}

	handleClick(event) {
    	event.preventDefault();
    	var email = $(".subscriber-email").val();
    	if(email!==""){
    		this.props.post('/api/?action=add-subscriber&email='+$(".subscriber-email").val(),function(result,obj){
				alert(email+" imeongezwa kikamilifu");
			},this)
    		$(".subscriber-email").val("");
    	}
	}

	render() {
	return (
			<div className="mtb-50 mb-md-0">
				<Title name="JIUNGE KWA HABARI"/>
				<p className="mb-20">Jiunge nasi uweze kupata habari motomoto zinazokuhusu kwa wakati.</p>
				<form className="nwsltr-primary-1">
					<input type="text" className="subscriber-email" placeholder="Barua pepe"/>
					<button type="button" onClick={this.handleClick}><i className="ion-ios-paperplane"></i></button>
				</form>
			</div>
    );
  }
}

export default Subscribe;
