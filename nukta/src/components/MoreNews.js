import React, {  Fragment } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Title from './Title';
import axios from 'axios';

function MoreNews({ titleClass,titleName, cardDiv, cardClass, newsList, number}) {
  let news = newsList;
  if(newsList.length > number) {
    news = newsList.slice(0, number)
  }
  return (
    <Fragment>
      <Title titleClass={titleClass} name={titleName}/>
      <div className={cardDiv} >
        { news.map((post, index) => (
          <Card key={index} cardClass={cardClass} cardInfo={post}/>
        ))}
      </div>
    </Fragment>

  );
}

MoreNews.defaultProps = {
  titleClass: '',
  number: 6
}

MoreNews.propTypes = {
	titleClass: PropTypes.string,
	titleName: PropTypes.string.isRequired,
  cardDiv: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
  newsList: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired

}

export default MoreNews;
