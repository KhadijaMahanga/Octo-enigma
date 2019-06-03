import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class Cardshow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			title: '',
			coverUrl: '',
			author: '',
			category: '',
			date: new Date()
		}
	}

	componentDidMount() {
		const { cardInfo } = this.props;
		const cover = cardInfo._links["wp:featuredmedia"][0]["href"];
		let coverUrl;
		fetch(cover)
			.then(res => res.json())
			.then(res => {
				coverUrl = res.source_url;
				console.log(coverUrl);
				const categoryId = cardInfo.categories[0] || 2;
				let category;
				fetch(`/wp-json/wp/v2/categories/${categoryId}`)
					.then(res => res.json())
					.then(res => {
						let category = res.slug;
						const url = cardInfo.slug;
						const title = cardInfo.title.rendered;
						const author = cardInfo.acf.author_name;
						const date = cardInfo.modified;
						this.setState({
							url, title, coverUrl, author, category, date
						})
					});
			});
	}
	render() {
		const { cardClass } = this.props;
		const { url, title, coverUrl, author, category, date } = this.state;


		const TWO_DAYS = 2 * 24 * 60 * 60 * 1000; /* ms */
		const dateToFormat = new Date(date);
		const now = new Date();
		const momentsPublished = now - dateToFormat > TWO_DAYS ? (
			<Moment format="D MMM, YYYY" withTitle>{dateToFormat}</Moment>
		): (
			<Moment fromNow>{dateToFormat}</Moment>
		)

		return (
				<div className={cardClass}>
					<Link className="pos-relative h-100 dplay-block text-left" to={`/${category}/${url}`}>
						<div className="img-bg bg-1 bg-grad-layer-6" style={{ backgroundImage: 'url('+coverUrl+')' }}></div>
						<div className="bg-clr-black abs-blr color-white p-10 bg-sm-color-7 font-10">
							<h4 className="mb-0 font-11"><b>{title}</b></h4>
							<ul className="list-li-mr-20">
								<li>by <span className="color-primary"><b>{author}</b>&nbsp;</span>{momentsPublished}</li>
							</ul>
						</div>
					</Link>
				</div>

	    );
	  }
}

Cardshow.defaultProps = {
	textSize: 12
}

Cardshow.propTypes = {
	cardInfo: PropTypes.object.isRequired,
	cardClass: PropTypes.string.isRequired,
	//textSize: PropTypes.integer
}

export default Cardshow;
