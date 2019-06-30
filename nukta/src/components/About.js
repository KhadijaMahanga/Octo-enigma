import React, { Component } from 'react';
import Title from './Title.js';
import Subscribe from './Subscribe.js';
import PopularList from './PopularList';

class Privacy extends Component {
	componentDidMount(){
		document.title='Nukta | About us';
		setTimeout(function(){window.scrollTo(0,0)},500);
	}

	render() {
		return (
			<div>
			<div className="brdr-ash-1 opacty-5"></div>
			  <div className="section pv-50 text-left">

				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<Title name="KUHUSU NUKTA"/>
							<div>
								<div style={{textAlign:'justify'}}>

								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="pl-20 pl-md-0">
								<div className="mb-50">
									<PopularList />
								</div>
								<Subscribe />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Privacy;
