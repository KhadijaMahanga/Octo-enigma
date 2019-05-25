import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Card extends Component {
	render() {
		const cardClass = this.props.cardClass;
		const cardInfo = this.props.cardInfo;
		var url='',title='',cover='',author='',date='',views='',comments='';
		if(cardInfo!==null && cardInfo!==undefined){
			url=cardInfo.url;
			cover=cardInfo.cover;
			author=cardInfo.author;
			title=cardInfo.title;
			date=cardInfo.date;
			views=cardInfo.views;
			comments=cardInfo.comments;
		}
	return (
			<div className={cardClass}>
				<div className="rw75 bg-layer" style={{backgroundImage: 'url('+cover+')'}}></div>
				<h4 className="pt-20"><Link to={'/article/'+url}><b>{title}</b></Link></h4>
				<ul className="list-li-mr-20 pt-10 mb-30">
					<li className="color-lite-black">by <a href={url} className="color-black"><b>{author},</b></a> {date}</li>
					<li><i className="color-primary mr-5 font-12 ion-ios-bolt"></i>{views}</li>
					<li><i className="color-primary mr-5 font-12 ion-chatbubbles"></i>{comments}</li>
				</ul>
			</div>
    );
  }
}

export default Card;