import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoreNews from './MoreNews';
import axios from 'axios';

class RelatedContent extends Component {
  state = {
    relatedPosts: [],
    isLoaded: false
  }

  componentDidMount() {
      const { postIds } = this.props;
      Promise.all(postIds.map((id, index) => {
       return axios.get(`https://api.nukta.co.tz/wp-json/wp/v2/posts/${id}`) }))
			.then(res => {
                const posts = res.map(post => post.data);
                this.setState({
                    relatedPosts: posts,
                    isLoaded: true
                })
            });
    }

  render() {
    const { relatedPosts, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <MoreNews
            titleClass="mt-50"
            titleName="UNAWEZA PIA SOMA"
            cardDiv="row"
            cardClass="col-sm-4"
            newsList={relatedPosts} />

      );
    }
    return null;
  }
}

  RelatedContent.propTypes = {
    postIds: PropTypes.array.isRequired

  }

export default RelatedContent;
