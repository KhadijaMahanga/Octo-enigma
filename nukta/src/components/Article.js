import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Title from './Title.js';
import PopularList from './PopularList';
import Card from './Card.js';
import Subscribe from './Subscribe.js';
import Layout from './Layout.js';
import axios from 'axios';
import 'moment/locale/sw';
import Moment from 'react-moment';

class Article extends Component {

	state = {
		article: {},
		isLoaded: false
	}

	componentDidMount() {
		axios.get(`/wp-json/wp/v2/posts?slug=${this.props.match.params.article_slug}`)
			.then(res => this.setState({
				article: res.data[0],
				isLoaded: true
			}))
			.catch(err => console.log(err));
	}

	// componentDidUpdate(prevProps){
	// 	if(prevProps.title!==this.props.title){
	// 		this.getNews();
	// 	}
	// }
	//
	//
	// getNews(){
	// 	this.props.post(this.props.url()+'api/?action=article&title='+this.props.title,function(result,obj){
	// 			obj.setData(result);
	// 			document.title='Nukta | '+result.title;
	// 			setTimeout(function(){window.scrollTo(0,0)},500);
	// 		},this)
	// }

	render() {
		const { article, isLoaded } = this.state;
		// const alsoRead= this.state.data.alsoread?this.state.data.alsoread.map((row,index,)=>{
		// 																		if(index<6)
		// 																			return(
		// 																				<Card key={index} cardClass="col-sm-4" cardInfo={row}/>
		// 																			)
		// 																		else return(<div key={index}></div>);
		// 																	}):null;
		if(isLoaded) {
			let category_name = "Habari";
			let category_slug = "habari";
			if (article.categories_list.length > 0) {
				category_name = article.categories_list[0].name;
				category_slug = article.categories_list[0].slug;
			}
			const articleDate = new Date(article.date);
			return (
				<Layout>
					<Fragment>
					<div className="brdr-ash-1 opacty-5" />
					<div className="section pv-50 text-left">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-8">
									<div className="rw60 bg-layer" style={{backgroundImage: 'url('+article.full_image_src+')'}}></div>
									<h3 className="mt-30">
										<b>{article.title.rendered}</b>
									</h3>
									<ul className="list-li-mr-20 mtb-15">
										<li>by{' '}<span className="color-primary">{article.acf.author_name}</span>&nbsp;
										<Moment locale="sw" format="D MMM, YYYY" withTitle>{articleDate}</Moment></li>
									</ul>
									<div className="article-summary">
									{ article.excerpt.rendered && <div dangerouslySetInnerHTML={{__html:article.excerpt.rendered}} /> }
								</div>
									<hr/>
									<div className="article-contents" dangerouslySetInnerHTML={{__html: article.content.rendered }} />
									<div className="float-left-right text-center mt-40 mt-sm-20">
											<ul className="mb-30 list-li-mt-10 list-li-mr-5 list-a-plr-15 list-a-ptb-7 list-a-bg-grey list-a-br-2 list-a-hvr-primary ">
												<li><Link to={`/${category_slug}`}>{category_name}</Link></li>
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
										{/* <div className="row">{alsoRead}</div> */}
								</div>
								<div className="col-md-6 col-lg-4">
									<div className="pl-20 pl-md-0">
										<div className="mb-50">
											<PopularList />
										</div>
										<Subscribe post={this.props.post} url={this.props.url} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
			</Layout>
		);

		}
		return <p>Loading..</p>
	}
}

export default Article;
