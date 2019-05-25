import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Cardlow extends Component {
	render() {
		const cardClass = this.props.cardClass;
		const cardInfo = this.props.cardInfo;
		var url='',title='',cover='',author='',date='';
		if(cardInfo!==null && cardInfo!==undefined){
			url=cardInfo.url;
			cover=cardInfo.cover;
			author=cardInfo.author;
			title=cardInfo.title;
			date=cardInfo.date;
		}
	return (			
			<Link to={'/article/'+url} className={cardClass+' pos-relative mb-5'}>
				<div className="wh-100x abs-tlr bg-map bg-grad-layer-6" style={{backgroundImage: 'url('+cover+')'}}></div>
				<div className="ml-120 min-h-100x">
					<h5><b>{title}</b></h5>
					<h6 className="color-lite-black pt-10">by <span className="color-black"><b>{author},</b></span> {date}</h6>
				</div>
			</Link>				
    );
  }
}

export default Cardlow;