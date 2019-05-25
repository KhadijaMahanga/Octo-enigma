import React, { Component } from 'react';
import Homeshow from './Homeshow.js';
import Title from './Title.js';
import Cardlow from './Cardlow.js';
import Card from './Card.js';
import Subscribe from './Subscribe.js'

class Home extends Component {
	constructor(props) {
    	super(props);
    	// This binding is necessary to make `this` work in the callback
    	this.moreNews = this.moreNews.bind(this);
  	}
	moreNews(e){
		e.preventDefault();
		if(this)
		this.props.post(this.props.url()+'api/?action=more-home-news&ids='+this.props.parentState.data.ids.join(),function(result,obj){
				console.log('home post');
				console.log(obj);
				console.log(result);
				obj.state.data.news=obj.state.data.news.concat(result.news);
				obj.state.data.ids=result.ids;		
				obj.setState({data:obj.state.data});
			},this.props.parent)
	}
	
	render() {
		const newsList = this.props.parentState.data.news?this.props.parentState.data.news.map((row,index,)=>{
																				return(
																					   <Card key={index} cardClass="col-sm-4" cardInfo={row}/>
																					)
																				}):null;
		const popularList = this.props.parentState.data.popular?this.props.parentState.data.popular.map((row,index,)=>{
																				if(index<5)
																					return(
																					   <Cardlow key={index} cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={row}/>
																					)
																				else return(<div key={index}></div>);
																			}):null;
		return (
			<div>
			  <Homeshow data={this.props.parentState.data.recent}/>
			  <div className="section pv-50 text-left">
				<div className="container">  
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<Title name="HABARI MPYA"/>
							<div className="row">
								<div className="col-sm-6">
									<Card cardClass="oflow-hidden pos-relative dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[6]:null}/>
									<Cardlow cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[7]:null}/>
									<Cardlow cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[8]:null}/>
									<Cardlow cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[9]:null}/>
									<Cardlow cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[10]:null}/>
								</div>
								<div className="col-sm-6">
									<Cardlow cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[11]:null}/>
									<Cardlow cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[12]:null}/>
									<Cardlow cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[13]:null}/>
									<Cardlow cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[14]:null}/>
									<Card cardClass="oflow-hidden pos-relative dplay-block" cardInfo={this.props.parentState.data.recent?this.props.parentState.data.recent[15]:null}/>
								</div>
							</div>
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
					<div className="">
						<Title titleClass="mt-30" name="HABARI ZA NUKTA"/>
						<div className="row more-news">{newsList}</div>
						<a className="dplay-block btn-brdr-primary mt-20 mb-md-50" onClick={this.moreNews} href=""><b>PATA HABARI ZAIDI TOKA NUKTA</b></a>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Home;