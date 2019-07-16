import React, { Component } from 'react';
import Title from './Title.js';
import Subscribe from './Subscribe.js';
import PopularList from './PopularList';

class Privacy extends Component {
	componentDidMount(){
		document.title='Nukta | Privacy';
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
							<Title name="SERA YA FARAGHA"/>
							<div>
								<div style={{textAlign:'justify'}}>
				<p>What does Nukta Africa Limited do Regards your privacy?</p>
				<p>Welcome to Nukta, a digital content provider. Your privacy is important to us. Thus why Nukta provide this privacy policy ("Privacy Policy") clarifying our online information practices and the choices you can make own you own. In this Privacy Policy   a "Service," collectively the "Services". "Users" are persons that use the Services.<br></br></p>

				<h4>The Information Obtained and Use</h4>
				<p>Nukta Africa Limited inform you that it receive both information that is directly provided to us, including personal information you provide when you subscribe the site not limited to e-mail address, name, gender and country of residence, also information that is passively or automatically collected from you, such as anonymous information collected from your browser or device e.g Chrome. In this Privacy Policy, we refer to all of this as the "Information".</p>
				<p>Information will be used to respond to your inquiries, and notify you, protect the safety of our users also perform statistical analyses of user behavior in order to measure interest in the various areas of our site (for product development purposes) to ensure we give you the content you deserve and inform the advertisers limited to third party your consent, except under the Legal requirement.<br></br></p>

				<h4>Legal Process Requirement</h4>
				<p>Nukta may disclose the Information, if is required in bonafide that the process may be in response to legal process like law enforcement or government agency's request or similar request. Fortification against misuse or unauthorized use of Nukta Africa Limited website.<br></br></p>

				<h4>Cookies and Other User and Ad-Targeting Technologies</h4>
				<p>We use cookies and other technologies both to provide our Services to you and to advertise to you. We also may work with Partners to help them advertise to you when you visit the site or mobile applications, and help to perform user analytics.</p>
				<p>However most of web browsers are set up to accept cookies. You may be able to set your browser to warn you before accepting certain cookies or to refuse certain cookies. If you disable the use of cookies in your web browser, some features of the Services may be difficult to use or inoperable<br></br></p>

				<h4>Link from other Services</h4>
				<p>Since our site may be linked or integrate other third party service to sites.  Information practices may be different than ours. Users are required to consult these other services' privacy notices as we have no control over information that is submitted to, or collected by, these third parties.<br></br></p>

				<h4>Changes Privacy Policy</h4>
				<p>Nukta may upate Privacy Policy as User you are advised to review our policy several times. Any changes regard the Privacy Policy, Nukta will notify their users.<br></br></p>
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
