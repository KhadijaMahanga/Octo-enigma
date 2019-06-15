import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'react-moment';

function Cardshow  ({ cardClass, cardInfo }) {
	const url = cardInfo.slug;
	const title = cardInfo.title.rendered;
	//const author = cardInfo.acf.author_name;
	const date = cardInfo.modified;
	const coverUrl = cardInfo.full_image_src;
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

Cardshow.propTypes = {
	cardInfo: PropTypes.object.isRequired,
	cardClass: PropTypes.string.isRequired
}

export default Cardshow;
