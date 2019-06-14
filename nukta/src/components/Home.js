import React, { Component } from 'react';
import Homeshow from './Homeshow.js';
import Title from './Title.js';
import Cardlow from './Cardlow.js';
import Card from './Card.js';
import Subscribe from './Subscribe.js';
import Layout from './Layout.js';

class Home extends Component {
	constructor(props) {
  	super(props);
  	this.state = {
			articles: [],
			isLoaded: false
		}
  	}

	componentDidMount() {
		fetch('/wp-json/wp/v2/posts')
      	.then(res => res.json())
      	.then(res => {
			this.setState({
				articles: res,
				isLoaded: true
			})
		}).catch(err => console.log(err));
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
		// const newsList = this.props.parentState.data.news?this.props.parentState.data.news.map((row,index,)=>{
		// 																		return(
		// 																			   <Card key={index} cardClass="col-sm-4" cardInfo={row}/>
		// 																			)
		// 																		}):null;
		// const popularList = this.props.parentState.data.popular?this.props.parentState.data.popular.map((row,index,)=>{
		// 																		if(index<5)
		// 																			return(
		// 																			   <Cardlow key={index} cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={row}/>
		// 																			)
		// 																		else return(<div key={index}></div>);
		// 																	}):null;
		const { articles, isLoaded } = this.state;
		if (isLoaded) {
			const recentArticles = articles.slice(0,6);
			const otherArticles = articles.slice(6);
			console.log(this.state.articles);
			return (
				<Layout>
					<div>
						{recentArticles.length > 5? (<Homeshow slides={recentArticles} />) : null }
						<div className="section pv-50 text-left">
							<div className="container">
								<div className="row">
									<div className="col-md-12 col-lg-8">
										<Title name="HABARI MPYA"/>
										<div className="row">
											{otherArticles.length > 3 && (
												<div className="col-sm-6">
													<Card cardClass="oflow-hidden pos-relative dplay-block" cardInfo={otherArticles[0]}/>
													{otherArticles.slice(1,5).map(article => (
														<Cardlow key={article.id}
																cardClass="oflow-hidden pos-relative mb-20 dplay-block"
																cardInfo={article}
																/>
													))}
												</div>
											)}
											{otherArticles.length > 6 && (
												<div className="col-sm-6">
													{otherArticles.slice(5,9).map(article => (
														<Cardlow key={article.id}
																cardClass="oflow-hidden pos-relative mb-20 dplay-block"
																cardInfo={article}
																/>
													))}
													<Card cardClass="oflow-hidden pos-relative dplay-block" cardInfo={otherArticles[9]}/>
												</div>
											)}
										</div>
									</div>
									{/* <div className="col-md-6 col-lg-4">
										<div className="pl-20 pl-md-0">
											<div className="mb-50">
												<Title name="ZILIZOSOMWA ZAIDI"/>
												{popularList}
											</div>
											<Subscribe post={this.props.post} url={this.props.url} />
										</div>
									</div> */}
								</div>
								{/* <div className="">
									<Title titleClass="mt-30" name="HABARI ZA NUKTA"/>
									<div className="row more-news">{newsList}</div>
									<a className="dplay-block btn-brdr-primary mt-20 mb-md-50" onClick={this.moreNews} href=""><b>PATA HABARI ZAIDI TOKA NUKTA</b></a>
								</div> */}
							</div>
						</div>
					</div>
				</Layout>
			);
		}

		return <h3>Loading ...</h3>
	}
}

export default Home;
