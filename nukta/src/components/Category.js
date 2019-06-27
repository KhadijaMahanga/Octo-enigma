import React, { Component, Fragment } from 'react';
import Title from './Title.js';
import PopularList from './PopularList';
import Card from './Card.js';
import MoreNews from './MoreNews';
import Subscribe from './Subscribe.js';
import Layout from './Layout';
import axios from 'axios';

const categoryMap = {
	'habari': '2',
	'teknologia': '4',
	'biashara': '3',
	'safari': '5',
	'ripoti-maalum': '7',
	'maoni-na-uchambuzi': '6'
}

class Category extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categoryPosts: [],
			isLoaded: false
		}

    	this.moreNews = this.moreNews.bind(this);
  	}

	componentDidMount() {
		const categoryId = categoryMap[this.props.match.params.section];
		if (categoryId) {
			axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}`)
			.then(res => {
				this.setState({
					categoryPosts: res.data,
					isLoaded: true
				});
			})
			.catch(err => console.log(err));
		} else {
			this.setState({
				categoryPosts: [],
				isLoaded: true
			});
		}
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
		const {categoryPosts, isLoaded} = this.state;

		if (isLoaded) {
			return (
				<Layout>
					<Fragment>
					<div className="brdr-ash-1 opacty-5"></div>
					  <div className="section pv-25 text-left">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-8">
									{ categoryPosts.length > 0 ? (
										<Fragment>
											<MoreNews
												titleName={categoryPosts[0].categories_list[0].name}
												cardDiv="row category-news"
												cardClass="col-sm-6"
												newsList={categoryPosts}
												number={10} />
											<a className="dplay-block btn-brdr-primary mt-20 mb-md-50" onClick={this.moreNews} href=""><b>{`PATA ${categoryPosts[0].categories_list[0].name.toUpperCase()} ZAIDI`}</b></a>
										</Fragment>
									): (
										<Title name="This Page does not exist"/>
									)}
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
		return null;
	}
}

export default Category;
