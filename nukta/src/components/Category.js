import React, { Component } from 'react';
import Title from './Title.js';
import Cardlow from './Cardlow.js';
import Card from './Card.js';
import Subscribe from './Subscribe.js'

class Category extends Component {
	constructor(props) {
    	super(props);
    	this.moreNews = this.moreNews.bind(this);
  	}
	
	state = {
		title:'',
		data:{ids:[],news:[]}
		}
		
	setData=(title,info)=>{
			this.setState({
				title:title,
				data:info
			})
		}
	
	componentDidUpdate(prevProps){
		if(prevProps.title!==this.props.title){
			this.setData(this.props.title,this.state.data);
			this.moreNews();
		}
	}
	
	componentDidMount(){
		this.setData(this.props.title,this.state.data);
		this.moreNews();
	}
	
	moreNews(e){
		if(e)
			e.preventDefault();
		var ids = this.state.data.ids[this.props.title]?this.state.data.ids[this.props.title].join():'';
		if(this)
		this.props.post(this.props.url()+'api/?action=category&title='+this.props.title+'&ids='+ids,function(result,obj){
				obj.state.data.news[obj.props.title]=obj.state.data.news[obj.props.title]?obj.state.data.news[obj.props.title].concat(result.news):result.news;
				obj.state.data.news[result.title]=result.news;
				obj.state.data.ids[result.title]=result.ids;	
				obj.setData(obj.state.title,obj.state.data);
				document.title='Nukta | '+result.title;
				setTimeout(function(){window.scrollTo(0,0)},500);
			},this)
	}
	
	render() {
		const newsList = this.state.data.news[this.props.title.toLowerCase()]?this.state.data.news[this.props.title.toLowerCase()].map((row,index,)=>{
																				return(
																					   <Card key={index} cardClass="col-sm-6" cardInfo={row}/>
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
				<div className="brdr-ash-1 opacty-5"></div>
			  <div className="section pv-25 text-left">
				<div className="container">  
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<Title name={this.state.title}/>
							<div className="row category-news">
								{newsList}
							</div>
							<a className="dplay-block btn-brdr-primary mt-20 mb-md-50" onClick={this.moreNews} href=""><b>{'PATA '+this.state.title+' ZAIDI'}</b></a>
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

export default Category;