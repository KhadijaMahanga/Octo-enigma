import React, { Component } from 'react';
import Title from './Title.js';
import Cardlow from './Cardlow.js';
import Card from './Card.js';
import Subscribe from './Subscribe.js'

class Terms extends Component {
	componentDidMount(){
		document.title='Nukta | Terms & condition';
		setTimeout(function(){window.scrollTo(0,0)},500);
	}
	
	render() {
		const newsList = this.props.parentState.data.news?this.props.parentState.data.news.map((row,index,)=>{
																				if(index<6)
																					return(
																					   <Card key={index} cardClass="col-sm-4" cardInfo={row}/>
																					)
																				else return(<div key={index}></div>);
																			}):null;
		const popularList = this.props.parentState.data.popular?this.props.parentState.data.popular.map((row,index,)=>{
																				if(index<5)
																					return(
																					   <Cardlow key={index} cardClass="oflow-hidden pos-relative mb-20 dplay-block" cardInfo={row}/>
																					)
																				else return(<div key={index}></div>);
																			}):null;
		return (
			<div>
				<div className="brdr-ash-1 opacty-5"></div>
			  <div className="section pv-50 text-left">
			  
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-8">
							<Title name="MASHARTI NA VIGEZO"/>
							<div>
								<div style={{textAlign:'justify'}}>
									<p>These Terms of Use, along with any additional terms and conditions that are referenced herein or that are presented elsewhere on the Site in relation to a specific service or feature (collectively, "Terms of Use") and the Nukta Privacy Policy. Nukta Africa Limited have revised the Terms of Use for our current and future online and mobile websites, platforms, services, applications, operated without limitation to nukta.co.tz and related products. By using the Site, you agree to comply with all of the terms and conditions herein. If you do not agree to these Terms of Use, you should not access or use the Site.<br></br></p>
									
									<h4>Changes to Terms of Use</h4>
									<p>Nukta may modify the Terms of Use, or any part thereof, or add or remove terms at any time, and such modifications, additions or deletions will be effective immediately upon posting after notification within 30 days. Your use of the Site after such posting shall be deemed to constitute acceptance by you of such modifications, additions or deletions.</p>
									<p>Nukta may change or discontinue any aspects, service or feature of the site any time as prescribed by the law including but not limited to, content, hours of availability, and equipment needed for access or use.<br></br></p>
									
									<h4>Subscription /Registration</h4>
									<p>Subscription /Registration as use, you may have opportunity to register via an online registration and create a user account("Your Account") that may allow you to receive stories updates from Nukta or participate in our stories' comments ections from the site.</p>
									<p>Nukta shall have all rights but not obligation to monitor user commitment to the site to determine whether compliance with these Terms of Use and any operating rules established by it and to satisfy any law, regulation or authorized government request.<br></br></p>
									
									<h4>Copyright Ownership</h4>
									<p>The Site contains copyrighted material, trademarks and other proprietary information, including, but not limited to, text, software, photos, video, graphics, music and sound, and the entire contents of the Site. Nukta owns copyright in the selection, such content, as well as in the content original to it. You may not modify, publish, transmit, participate in the transfer or sale, create derivative works, or in any way exploit, any of the content, in whole or in part. You may download copyrighted material for your personal use only. Except as otherwise expressly permitted under copyright law. Should you copy the materials, acknowledge it by writing in full the source which is Nukta.<br></br></p>
									
									<h4>Third Party Content</h4>
									<p>Nukta as publisher or creator some of content supplied by third parties, users, writers and links. Therefore some of information or opinions, advice, statements, made available by third parties and Nukta has no control over. Hence user advance concede and agree that Nukta shall not be responsible or liable, directly or indirectly. Please seek the advice of professionals, as appropriate, regarding the evaluation of any specific information, opinion, advice or other content. However, Nukta will ensure all the time the content published by the third parties are consistence with local and international laws and journlism code of ethics.<br></br></p>
									
									<h4>Advertisements and Promotions</h4>
									<p>Nukta may run advertisements and promotions from third parties on the Site. In addition, those advertisements and promotions should adhere to laws of the land, afterward Nukta shall not be responsible<br></br></p>
									
									<h4>Termination</h4>
									<p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
									<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.<br></br></p>
									
									<h4>Privacy</h4>
									<p>Nukta respect your privacy and the use and protection of your Personal Information. For further important information please see our Privacy Policy in connection with your use of the Site.<br></br></p>
									
									<h4>Trademarks</h4>
									<p>Nukta own all rights to their logos and trademarks used in connection with the Site. All other logos and trademarks appearing on the Site are the property of their respective owners.<br></br></p>
									
									<h4>Governing Law</h4>
									<p>The aforesaid Terms shall be governed by and construed exclusively in accordance with the laws and decisions of the United Republic of Tanzania without regard to its conflict of law provisions. These Terms set up the entire agreement between Nukta and users.<br></br></p>
									
									<h4>Disclaimer of Warranty; Limitation of Liability</h4>
									<p>THE SITE, THE CONTENT, AND ALL EMAILS SENT BY NUKTA AFRICA LIMITED OR AFFILIATES ("EMAILS") ARE PROVIDED TO YOU "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, QUALITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR CORRECTION. APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. THIS SITE, THE CONTENT, AND THE EMAILS MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. NUKTA AFRICA LIMITED AND AFFILIATES MAKE NO WARRANTIES OR REPRESENTATIONS, EXPRESS OR IMPLIED, AS TO THE ACCURACY, COMPLETENESS OR RELIABILITY OF ANY FACTS, ADVICE, OPINIONS, VIEWS, STATEMENTS, RECOMMENDATIONS OR OTHER INFORMATION DISPLAYED ON OR DISTRIBUTED THROUGH THE SITE, THE CONTENT, AND/OR THE EMAILS. YOU ACKNOWLEDGE THAT ANY RELIANCE UPON ANY SUCH FACTS, ADVICE, OPINIONS, VIEWS, STATEMENTS RECOMMENDATIONS, OR OTHER INFORMATION IS AT YOUR SOLE RISK AND THAT NEITHER NUKTA AFRICA LIMITED NOR AFFILIATES GIVE TAX, LEGAL OR INVESTMENT ADVICE OR ADVOCATE THE PURCHASE OR SALE OF ANY SECURITY OR INVESTMENT. REFERENCE TO ANY PRODUCT, PROCESS, PUBLICATION OR SERVICE OF ANY THIRD PARTY BY TRADE NAME, DOMAIN NAME, TRADEMARK, SERVICE MARK, LOGO, MANUFACTURER OR OTHERWISE DOES NOT CONSTITUTE OR IMPLY ITS ENDORSEMENT OR RECOMMENDATION BY NUKTA AFRICA LIMITED OR AFFILIATES. NUKTA AFRICA LIMITED AND AFFILIATES MAKE NO REPRESENTATION OR WARRANTY WHATSOEVER REGARDING THE SUITABILITY, FUNCTIONALITY, AVAILABILITY OR OPERATION OF THIS SITE, THE CONTENT, OR THE EMAILS. THIS SITE MAY BE TEMPORARILY UNAVAILABLE DUE TO MAINTENANCE OR MALFUNCTION OF COMPUTER EQUIPMENT. NUKTA AFRICA LIMITED DOES NOT WARRANT THAT THE CONTENT, THE SITE, OR THE EMAILS WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS IN THE SITE, THE CONTENT, OR THE EMAILS WILL BE CORRECTED, OR THAT THE SITE, THE SERVERS THAT MAKE THE SITE AND/OR THE CONTENT AVAILABLE, AND THE EMAILS ARE FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.<br></br></p>
			</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="pl-20 pl-md-0">
								<div className="mb-50">
									<Title name="ZILIZOSOMWA ZAIDI"/>
									{popularList}									
								</div>
								<Subscribe post={this.props.post} url={this.props.url} />
							</div>
						</div>
					</div>
					<div className="">
						<Title titleClass="mt-30" name="HABARI ZA NUKTA"/>
						<div className="row more-news">{newsList}</div>
						<a className="dplay-block btn-brdr-primary mt-20 mb-md-50" href=""><b>PATA HABARI ZAIDI TOKA NUKTA</b></a>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Terms;