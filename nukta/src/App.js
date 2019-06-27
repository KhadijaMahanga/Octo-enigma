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
					<Route exact path="/:section/:article_slug" component={Article} />
					<Route exact path="/:section" component={Category} />
					{/* <Route exact path="/about" render={()=> <About  parentState={this.state} url={url} post={post}/>}/>
					<Route path="/contact" render={()=> <Contact parentState={this.state} post={post} url={url}/>}/>
					<Route path="/privacy" render={()=> <Privacy parentState={this.state} post={post} url={url}/>} />
					<Route exact path="/search/:question" render={(props)=> <Search title={props.match.params.question} parentState={this.state} url={url} post={post}/>}/>
					<Route path="/terms" render={()=> <Terms parentState={this.state} post={post} url={url}/>} /> */}
				</Switch>
		</Router>
	);
}

export default App;
