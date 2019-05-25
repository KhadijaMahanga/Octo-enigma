import React, { Component } from 'react';
import Cardshow from './Cardshow.js';

class Homeshow extends Component {
  render() {
	  const slides = this.props.data;
    return (
      <div className="container">
		<div className="h-600x h-sm-auto">
			<div className="h-2-3 h-sm-auto oflow-hidden">
				<Cardshow cardClass="pb-5 pr-5 pr-sm-0 float-left float-sm-none w-2-3 w-sm-100 h-100 h-sm-300x" cardInfo={(slides===undefined)?null:slides[0]}/>
				<div className="float-left float-sm-none w-1-3 w-sm-100 h-100 h-sm-600x">
					<Cardshow cardClass="pl-5 pb-5 pl-sm-0 ptb-sm-5 pos-relative h-50" cardInfo={(slides===undefined)?null:slides[1]}/>
					<Cardshow cardClass="pl-5 ptb-5 pl-sm-0 pos-relative h-50" cardInfo={(slides===undefined)?null:slides[2]}/>
				</div>

			</div>
			
			<div className="h-1-3 oflow-hidden">
				<Cardshow cardClass="pr-5 pr-sm-0 pt-5 float-left float-sm-none pos-relative w-1-3 w-sm-100 h-100 h-sm-300x" cardInfo={(slides===undefined)?null:slides[3]}/>
				<Cardshow cardClass="plr-5 plr-sm-0 pt-5 pt-sm-10 float-left float-sm-none pos-relative w-1-3 w-sm-100 h-100 h-sm-300x" cardInfo={(slides===undefined)?null:slides[4]}/>
				<Cardshow cardClass="pl-5 pl-sm-0 pt-5 pt-sm-10 float-left float-sm-none pos-relative w-1-3 w-sm-100 h-100 h-sm-300x" cardInfo={(slides===undefined)?null:slides[5]}/>				
			</div>
		</div>
	</div>
    );
  }
}

export default Homeshow;