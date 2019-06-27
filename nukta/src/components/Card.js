import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import 'moment/locale/sw';
import Moment from 'react-moment';

function Card ({ cardClass, cardInfo }) {
	const url = cardInfo.slug;
	const title = cardInfo.title.rendered;
	//const author = cardInfo.acf.author_name;
	const date = cardInfo.modified;
	const coverUrl = cardInfo.full_image_src;
	let category = "habari";
	let category_name = "Habari";
	if (cardInfo.categories_list.length > 0) {
		category = cardInfo.categories_list[0]["slug"];
		category = cardInfo.categories_list[0]["name"];
	}

	const TWO_DAYS = 2 * 24 * 60 * 60 * 1000; /* ms */
	const dateToFormat = new Date(date);
	const now = new Date();
	const momentsPublished = now - dateToFormat > TWO_DAYS ? (
		<Moment locale="sw" format="D MMM, YYYY" withTitle>{dateToFormat}</Moment>
	): (
		<Moment locale="sw" fromNow>{dateToFormat}</Moment>
	)
	return (
		<div className={cardClass}>
			<div className="rw75 bg-layer" style={{backgroundImage: 'url('+coverUrl+')'}}></div>
			<h4 className="pt-20"><Link to={`/${category}/${url}`}><b>{title}</b></Link></h4>
			<ul className="list-li-mr-20 pt-10 mb-30">
				<li className="color-lite-black">
					<span className="color-primary">{category_name}</span> {' | '}{momentsPublished}</li>
			</ul>
		</div>
    );
}

Card.propTypes = {
	cardInfo: PropTypes.object.isRequired,
	cardClass: PropTypes.string.isRequired
}

export default Card;
