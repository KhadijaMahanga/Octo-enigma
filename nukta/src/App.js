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
import Layout from './components/Layout';

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/data" component={Data} />
					<Route path="/search" component={Search} />
					<Route exact path="/about" component={About} />
					<Route exact path="/privacy" component={Privacy} />
					<Route exact path="/terms" component={Terms} />
					<Route exact path="/contact" component={Contact} />
					<Route path="/:section/:article_slug" component={Article} />
					<Route path="/:section" component={Category} />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
