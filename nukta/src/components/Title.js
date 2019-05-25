import React, { Component } from 'react';

class Title extends Component {
	render() {
		const name = this.props.name;
	return (
			<h4 className={this.props.titleClass+" p-title"}><b>{name}</b></h4>
    );
  }
}

export default Title;