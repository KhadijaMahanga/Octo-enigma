import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Title from './Title.js';
import Cardlow from './Cardlow.js';
import Card from './Card.js';
import Subscribe from './Subscribe.js'

class Article extends Component {
	constructor(props) {
    	super(props);
    	this.getNews = this.getNews.bind(this);
  	}
	
	state = {
		data:{}
		}
		
	setData=(info)=>{
			this.setState({
				data:info
			})
		}
	
	componentDidUpdate(prevProps){
		if(prevProps.title!==this.props.title){
			this.getNews();
		}
	}
	
	componentDidMount(){
		this.getNews();
	}
	
	getNews(){
		this.props.post(this.props.url()+'api/?action=article&title='+this.props.title,function(result,obj){
				obj.setData(result);
				document.title='Nukta | '+result.title;
				setTimeout(function(){window.scrollTo(0,0)},500);
			},this)
	}
	
	getMarkup() { return {__html:this.state.data.contents}; };
	
	render() {
		const popularList = this.props.parentState.data.popular?this.props.parentState.data.popular.map((row,index,)=>{
																				if(index<5)
																					return(
																					   <Cardlow key={index} cardclassName="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={row}/>
																					)
																				else return(<div key={index}></div>);
																			}):null;
		const alsoRead= this.state.data.alsoread?this.state.data.alsoread.map((row,index,)=>{
																				if(index<6)
																					return(
																						<Card key={index} cardClass="col-sm-4" cardInfo={row}/>
																					)
																				else return(<div key={index}></div>);
																			}):null;
		return (
			<div>
			<div className="brdr-ash-1 opacty-5"></div>
			  <div className="section pv-50 text-left">
			  
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<div className="rw60 bg-layer" style={{backgroundImage: 'url('+this.state.data.cover+')'}}></div>
							<h3 className="mt-30"><b>{this.state.data.title}</b></h3>
							<ul className="list-li-mr-20 mtb-15">
								<li>by <Link to="/author/"><b>{this.state.data.author}</b></Link>&nbsp;{this.state.data.date}</li>
								<li><i className="color-primary mr-5 font-12 ion-ios-bolt"></i>{this.state.data.views}</li>
								<li><i className="color-primary mr-5 font-12 ion-chatbubbles"></i>{this.state.data.comments}</li>
							</ul>
							<div className="article-contents" dangerouslySetInnerHTML={this.getMarkup()}/>
							<div className="float-left-right text-center mt-40 mt-sm-20">
								<ul className="mb-30 list-li-mt-10 list-li-mr-5 list-a-plr-15 list-a-ptb-7 list-a-bg-grey list-a-br-2 list-a-hvr-primary ">
									<li><Link to={this.state.data.category?'/category/'+this.state.data.category.toLowerCase():''}>{this.state.data.category}</Link></li>
								</ul>
								<ul className="mb-30 list-a-bg-grey list-a-hw-radial-35 list-a-hvr-primary list-li-ml-5">
									<li className="mr-10 ml-0">Share</li>
									<li><a href=""><i className="ion-social-facebook"></i></a></li>
									<li><a href=""><i className="ion-social-twitter"></i></a></li>
									<li><a href=""><i className="ion-social-google"></i></a></li>
									<li><a href=""><i className="ion-social-instagram"></i></a></li>
								</ul>
							</div>
							<div className="brdr-ash-1 opacty-5"></div>
							<Title titleClass="mt-50" name="UNAWEZA PIA SOMA"/>
							<div className="row">{alsoRead}</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="pl-20 pl-md-0">
								<div className="mb-50">
									<Title name="ZILIZOSOMWA ZAIDI"/>
									{popularList}									
								</div>
								<Subscribe post={this.props.post} url={this.props.url} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Article;