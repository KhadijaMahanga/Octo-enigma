import React, { Component, Fragment } from 'react';
import Cardlow from './Cardlow.js';
import Title from './Title';
import axios from 'axios';

class PopularList extends Component {
  state = {
    popularPosts: {},
    isLoaded: false
  }

  componentDidMount() {
    axios.get('https://api.nukta.co.tz/wp-json/wordpress-popular-posts/v1/popular-posts?range=last7days')
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
          <Title name="ZILIZOSOMWA ZAIDI"/>
          { popularPosts.length > 0 && popularPosts.map((post, index) => (
            <Cardlow key={index} cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={post}/>
          ))}
        </Fragment>

      );
    }
    return null;
  }
}

export default PopularList;
