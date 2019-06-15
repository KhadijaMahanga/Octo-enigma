import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'react-moment';

function Cardlow ({ cardClass, cardInfo }) {
	const url = cardInfo.slug;
	const title = cardInfo.title.rendered;
	//const author = cardInfo.acf.author_name;
	const date = cardInfo.modified;
	const coverUrl = cardInfo.medium_image_src;
	let category = "habari";
	if (cardInfo.categories_list.length > 0) {
		category = cardInfo.categories_list[0]["slug"];
	}

	const TWO_DAYS = 2 * 24 * 60 * 60 * 1000; /* ms */
	const dateToFormat = new Date(date);
	const now = new Date();
	const momentsPublished = now - dateToFormat > TWO_DAYS ? (
		<Moment format="D MMM, YYYY" withTitle>{dateToFormat}</Moment>
	): (
		<Moment fromNow>{dateToFormat}</Moment>
	)
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

Cardlow.propTypes = {
	cardInfo: PropTypes.object.isRequired,
	cardClass: PropTypes.string.isRequired
}

export default Cardlow;
