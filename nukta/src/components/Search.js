import React, { Component, Fragment } from 'react';
import Title from './Title.js';
import PopularList from './PopularList';
import MoreNews from './MoreNews';
import Subscribe from './Subscribe.js';
import Layout from './Layout';
import axios from 'axios';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchResults: [],
			isLoaded: false,
			searchTerm: '',
		}

    	this.moreNews = this.moreNews.bind(this);
  	}

	componentDidMount() {
		const windowUrl = this.props.location.search;
		const params = new URLSearchParams(windowUrl);
		const searchTerm = params.get('q');
		console.log(searchTerm);

		if (this.state.searchTerm !== searchTerm) {
			axios.get(`/wp-json/wp/v2/posts?search=${searchTerm}`)
			.then(res => {
				this.setState({
					searchResults: res.data,
					isLoaded: true,
					searchTerm
				});
			})
			.catch(err => console.log(err));
		} else {
			this.setState({
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
		const {searchResults, isLoaded, searchTerm } = this.state;

		if (isLoaded) {
			return (
				<Layout>
					<Fragment>
					<div className="brdr-ash-1 opacty-5"></div>
					  <div className="section pv-25 text-left">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-8">
									{ searchResults.length > 0 ? (
										<Fragment>
											<MoreNews
												titleName={`Habari zenye neno ${searchTerm}`}
												cardDiv="row category-news"
												cardClass="col-sm-6"
												newsList={searchResults}
												number={10} />
											<a className="dplay-block btn-brdr-primary mt-20 mb-md-50" onClick={this.moreNews} href=""><b>{`TAFUTA ZAIDI`}</b></a>
										</Fragment>
									): (
										<Title name="Hatukuweza Kupata Unachotafuta"/>
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
		return null;
	}
}

export default Search;
