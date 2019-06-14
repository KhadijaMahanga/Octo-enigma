import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import axios from 'axios';

class Cardshow extends Component {
	state = {
		isLoaded: false,
		coverUrl: '',
		category: ''
	}

	componentDidMount() {
		const { featured_media, categories } = this.props.cardInfo;

		const getImageUrl = axios.get(`https://api.nukta.co.tz/wp-json/wp/v2/media/${featured_media}`);
		const getCategoryUrl = axios.get(`https://api.nukta.co.tz/wp-json/wp/v2/categories/${categories[0]}`);

		Promise.all([getImageUrl, getCategoryUrl]).then(res => {
			this.setState({
				coverUrl: res[0].data.media_details.sizes.full.source_url,
				category: res[1].data.slug,
				isLoaded: true
			})
		});

	}

	render() {
	 const { cardClass, cardInfo } = this.props;
		const url = cardInfo.slug;
		const title = cardInfo.title.rendered;
		//const author = cardInfo.acf.author_name;
		const date = cardInfo.modified;
		const { coverUrl, category, isLoaded } = this.state;

		const TWO_DAYS = 2 * 24 * 60 * 60 * 1000; /* ms */
		const dateToFormat = new Date(date);
		const now = new Date();
		const momentsPublished = now - dateToFormat > TWO_DAYS ? (
			<Moment format="D MMM, YYYY" withTitle>{dateToFormat}</Moment>
		): (
			<Moment fromNow>{dateToFormat}</Moment>
		)
		if (isLoaded) {
			return (
				<div className={cardClass}>
					<Link className="pos-relative h-100 dplay-block text-left" to={`/${category}/${url}`}>
						<div className="img-bg bg-1 bg-grad-layer-6" style={{ backgroundImage: 'url('+coverUrl+')' }}></div>
						<div className="bg-clr-black abs-blr color-white p-10 bg-sm-color-7 font-10">
							<h4 className="mb-0 font-11"><b>{title}</b></h4>
							<ul className="list-li-mr-20">
								<li>{momentsPublished}</li>
							</ul>
						</div>
					</Link>
				</div>

			);
		}
		return null;
	}
}

Cardshow.propTypes = {
	cardInfo: PropTypes.object.isRequired,
	cardClass: PropTypes.string.isRequired
}

export default Cardshow;
