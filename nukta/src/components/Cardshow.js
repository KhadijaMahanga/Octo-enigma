import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Cardshow extends Component {
	render() {
		const cardClass = this.props.cardClass;
		const textSize = this.props.textSize;
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
				<Link className="pos-relative h-100 dplay-block text-left" to={'/article/'+url}>
					<div className="img-bg bg-1 bg-grad-layer-6" style={{backgroundImage: 'url('+cover+')'}}></div>
					<div className="bg-clr-black abs-blr color-white p-10 bg-sm-color-7 font-10">
						<h4 className="mb-0 font-11"><b>{title}</b></h4>
						<ul className="list-li-mr-20">
							<li>by <span className="color-primary"><b>{author}</b>&nbsp;</span>{date}</li>
							<li><i className="color-primary mr-5 font-9 ion-ios-bolt"></i>{views}</li>
							<li><i className="color-primary mr-5 font-9 ion-chatbubbles"></i>{comments}</li>
						</ul>
					</div>
				</Link>
			</div>
				
    );
  }
}

export default Cardshow;