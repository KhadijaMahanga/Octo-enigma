import $ from 'jquery'
import React, { Component } from 'react';

class Contact extends Component {
	constructor(props) {
    	super(props);
    	this.handleClick = this.handleClick.bind(this);
  	}

	handleClick(event) {
    	event.preventDefault();
    	if($(".email").val()!=="" && $(".full-name").val()!=="" && $(".message").val()!=="" ){
    		this.props.post(this.props.url()+'api/?action=web-mail&email='+$(".email").val()+'&name='+$(".full-name").val()+'&phone='+$(".phone").val()+'&company='+$(".company").val()+'&message='+$(".message").val(),function(result,obj){
				$(".email").val("");
				$(".phone").val("");
				$(".full-name").val("");
				$(".company").val("");
				$(".message").val("");
				alert("Ujumbe wako tumeupata, asante");
			},this)
    	}else{
    		alert("Jaza taarifa zote zinazohitajika!")
    	}
	}

	componentDidMount(){
		document.title='Nukta | Contact';
		setTimeout(function(){window.scrollTo(0,0)},500);
	}
	
	render() {
		return (
			<div>
				<div className="brdr-ash-1 opacty-5"></div>
				<section className="pv-50">
					<div className="container text-left">
						<div className="row">
							<div className="col-sm-12 col-md-8">
								<h3><b>TUTUMIE UJUMBE</b></h3>
								<p className="mb-30 mr-100 mr-sm-0">Tunapenda kusikia kutoka kwako. Tafadhali, wasiliana nasi kwa kupata maelekezo, taarifa, kutangaza biashara na mengine.</p>
								<form className="form-block form-bold form-mb-20 form-h-35 form-brdr-b-grey pr-50 pr-sm-0">
									<div className="row">
										<div className="col-sm-6">
											<p className="color-ash">Jina kamili*</p>
											<div className="pos-relative">
												<input className="pr-20 full-name" name="full-name" type="text" />
											</div>
										</div>
										<div className="col-sm-6">							
											<p className="color-ash">Barua pepe*</p>
											<div className="pos-relative">
												<input className="pr-20 email" name="email" type="email"/>
												<i className="dplay-none abs-tbr lh-35 font-13 color-green ion-android-done"></i>
											</div>
										</div>
										<div className="col-sm-6">	
											<p className="color-ash">Number ya simu*</p>
											<div className="pos-relative">
												<input className="pr-20 phone" name="phone" type="text"/>
												<i className="dplay-none abs-tbr lh-35 font-13 color-green ion-android-done"></i>
											</div>
										</div>
										<div className="col-sm-6">	
											<p className="color-ash">Kampuni*</p>
											<div className="pos-relative">
												<input className="pr-20 company" name="company" type="text"/>
												<i className="dplay-none abs-tbr lh-35 font-13 color-green ion-android-done"></i>
											</div>
										</div>
										<div className="col-sm-12">
											<div className="pos-relative pr-80">
												<p className="color-ash">Ujumbe*</p>
												<h4><b>Tujuze kuhusu suala lako</b></h4>
												<textarea className="mb-0 message"></textarea>
												<button className="abs-br font-20 plr-15 btn-fill-primary" type="submit" onClick={this.handleClick}><i className="ion-ios-paperplane"></i></button>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className="col-sm-12 col-md-4">
								<h3 className="mb-20 mt-sm-50"><b>TAARIFA</b></h3>
								<ul className="font-11 list-relative list-li-pl-30 list-block list-li-mb-15">
									<li><i className="abs-tl ion-ios-location"></i>7th Floor, Tanzanite Park - Victoria<br/>Dar es salaam. Tanzania</li>
									<li><i className="abs-tl ion-android-mail"></i>info@nukta.co.tz</li>
									<li><i className="abs-tl ion-android-call"></i>(+255) 712 212 638<br/>(+255) 716 731 383</li>
								</ul>
								<ul className="font-11  list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-5">
									<li><a className="pl-0" href=""><i className="ion-social-linkedin"></i></a></li>
									<li><a href=""><i className="ion-social-facebook"></i></a></li>
									<li><a href=""><i className="ion-social-twitter"></i></a></li>
									<li><a href=""><i className="ion-social-google"></i></a></li>
									<li><a href=""><i className="ion-social-pinterest"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Contact;