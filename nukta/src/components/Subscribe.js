import React, { Component } from 'react';
import Title from './Title.js';
import axios from 'axios';

//https://script.google.com/a/nukta.co.tz/macros/s/AKfycbw4O1zOmc3CbWEO0TdvM7udi9oALACGIenWWnyT7clCcLoC1i4e/exec

class Subscribe extends Component {
	constructor(props) {
    	super(props);
			this.state = {
				value: ''
			};
			this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
    	event.preventDefault();
			const subscribeInput = this.state.value;

			const emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,6}\b$/i;
			const phonePattern = /^\0?([0-9]{9})\)$/;

    	if(emailPattern.test(subscribeInput) || phonePattern.test(subscribeInput)){
				const formData = new FormData();
				formData.append("contact", subscribeInput);

				axios.post('https://script.google.com/macros/s/AKfycbw4O1zOmc3CbWEO0TdvM7udi9oALACGIenWWnyT7clCcLoC1i4e/exec', formData, {
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					}
				  })
				  .then(function (response) {
				    alert(subscribeInput+" imeongezwa kikamilifu");
				  })
				  .catch(function (error) {
						console.log(error);
				    alert("Error:" + subscribeInput+" imeongezwa kikamilifu");
				  });
    	} else {
				alert("Tafadhali weka barua pepe au number ya simu iliyohakiki");
			}
	}

	render() {
		const { value } = this.state;
		return (
				<div className="mtb-50 mb-md-0">
					<Title name="JIUNGE KWA HABARI"/>
					<p className="mb-20">Jiunge nasi uweze kupata habari motomoto zinazokuhusu kwa wakati.</p>
					<form className="nwsltr-primary-1" onSubmit={this.handleSubmit}>
						<input type="text" className="subscriber-email" value={value} onChange={this.handleChange} placeholder="Barua pepe au Simu ya mkononi"/>
						<button type="submit"><i className="ion-ios-paperplane"></i></button>
					</form>
				</div>
	    );
  }
}

export default Subscribe;
