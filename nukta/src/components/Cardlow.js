import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import axios from 'axios';

class Cardlow extends Component {
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
				<Link to={`/${category}/${url}`} className={cardClass+' pos-relative mb-5'}>
					<div className="wh-100x abs-tlr bg-map bg-grad-layer-6" style={{backgroundImage: 'url('+coverUrl+')'}}></div>
					<div className="ml-120 min-h-100x">
						<h5><b>{title}</b></h5>
						<h6 className="color-lite-black pt-10">{momentsPublished}</h6>
					</div>
				</Link>
			);
		}
		return null;
	}
}

Cardlow.propTypes = {
	cardInfo: PropTypes.object.isRequired,
	cardClass: PropTypes.string.isRequired
}

export default Cardlow;
