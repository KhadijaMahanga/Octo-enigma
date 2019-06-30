import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import PopularList from './PopularList';
import Subscribe from './Subscribe.js';
import Layout from './Layout.js';
import axios from 'axios';
import 'moment/locale/sw';
import Moment from 'react-moment';
import RelatedContent from './RelatedContent';

class Article extends Component {

	state = {
		article: {},
		relatedarticles: [],
		isLoaded: false
	}

	componentDidMount() {
		axios.get(`/wp-json/wp/v2/posts?slug=${this.props.match.params.article_slug}`)
			.then(res => {
				this.fetchRelatedArticles(res.data[0]);
			})
			.catch(err => console.log(err));
	}

	fetchRelatedArticles(post) {
		console.log(post)
		axios.get(`https://api.nukta.co.tz/wp-json/related-posts-by-taxonomy/v1/posts/${post.id}?posts_per_page=6&fields=ids`)
			.then(res => this.setState({
				article: post,
				isLoaded: true,
				relatedarticles: res.data.posts
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
		const { article, isLoaded, relatedarticles } = this.state;

		if(isLoaded) {
			let category_name = "Habari";
			let category_slug = "habari";
			if (article.categories_list.length > 0) {
				category_name = article.categories_list[0].name;
				category_slug = article.categories_list[0].slug;
			}
			const articleDate = new Date(article.date);
			const videoUrl = article.acf.videourl;
			return (
				<Layout>
					<Fragment>
					<div className="brdr-ash-1 opacty-5" />
					<div className="section pv-50 text-left">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-8">
									{videoUrl && videoUrl.length > 0 ? (
										<iframe
											title={article.title.rendered}
											src={videoUrl}
											allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
											className="rw60 bg-layer"
											style={{ width: '100%', height: '100%', border: '0'}} />
									): (
										<div className="rw60 bg-layer" style={{backgroundImage: 'url('+article.full_image_src+')'}}></div>
									)}
									<h3 className="mt-30">
										<b>{article.title.rendered}</b>
									</h3>
									<ul className="list-li-mr-20 mtb-15">
										<li>by{' '}<span className="color-primary">{article.acf.author_name}</span>&nbsp;
										<Moment locale="sw" format="D MMM, YYYY" withTitle>{articleDate}</Moment></li>
									</ul>
									<div className="article-summary">
									{ article.excerpt.rendered && <div dangerouslySetInnerHTML={{__html:article.excerpt.rendered.replace('<br />\n', '</p><p>')}} /> }
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
									{ relatedarticles.length > 0 && (
										<RelatedContent	postIds={relatedarticles} />
									)}
								</div>
								<div className="col-md-6 col-lg-4">
									<div className="pl-20 pl-md-0">
										<div className="mb-50">
											<PopularList />
										</div>
										<Subscribe />
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
