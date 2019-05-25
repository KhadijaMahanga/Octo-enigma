import React, { Component } from 'react';
import Title from './Title.js';
import Cardlow from './Cardlow.js';
import Card from './Card.js';
import Subscribe from './Subscribe.js'

class Privacy extends Component {
	componentDidMount(){
		document.title='Nukta | About us';
		setTimeout(function(){window.scrollTo(0,0)},500);
	}
	
	render() {
		const newsList = this.props.parentState.data.news?this.props.parentState.data.news.map((row,index,)=>{
																				if(index<6)
																					return(
																					   <Card key={index} cardClass="col-sm-4" cardInfo={row}/>
																					)
																				else return(<div key={index}></div>);
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
			<div className="brdr-ash-1 opacty-5"></div>
			  <div className="section pv-50 text-left">
			  
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<Title name="KUHUSU NUKTA"/>
							<div>
								<div style={{textAlign:'justify'}}>
								
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
						<a className="dplay-block btn-brdr-primary mt-20 mb-md-50" href=""><b>PATA HABARI ZAIDI TOKA NUKTA</b></a>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Privacy;