import React, { Component, Fragment } from 'react';
import Cardlow from './Cardlow.js';
import axios from 'axios';

class PopularList extends Component {
  state = {
    popularPosts: {},
    isLoaded: false
  }

  componentDidMount() {
    axios.get('https://api.nukta.co.tz/wp-json/wordpress-popular-posts/v1/popular-posts')
      .then(res => this.setState({
        popularPosts: res.data,
        isLoaded: true
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { popularPosts, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <Fragment>
          { popularPosts.length > 0 && .map((post, index) => (
            <Cardlow key={index} cardclassName="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={post}/>
          ))}
        </Fragment>

      );
    }
    return null;
  }
}

export default PopularList;
