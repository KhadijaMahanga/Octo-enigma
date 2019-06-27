import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from './components/Article.js';
import About from './components/About.js';
import Home from './components/Home';
import Terms from './components/Terms.js';
import Privacy from './components/Privacy.js';
import Contact from './components/Contact.js';
import Category from './components/Category.js';
import Search from './components/Search.js'
import Data from './components/Data';

function App() {
	return (
		<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/data" component={Data} />
					<Route path="/search" component={Search} />
					<Route path="/:section/:article_slug" component={Article} />
					<Route path="/:section" component={Category} />
					{/* <Route exact path="/about" render={()=> <About  parentState={this.state} url={url} post={post}/>}/>
					<Route path="/contact" render={()=> <Contact parentState={this.state} post={post} url={url}/>}/>
					<Route path="/privacy" render={()=> <Privacy parentState={this.state} post={post} url={url}/>} />
					<Route path="/terms" render={()=> <Terms parentState={this.state} post={post} url={url}/>} /> */}
				</Switch>
		</Router>
	);
}

export default App;
