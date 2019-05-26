import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.js';
import Article from './components/Article.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Terms from './components/Terms.js';
import Privacy from './components/Privacy.js';
import Contact from './components/Contact.js';
import Category from './components/Category.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import Search from './components/Search.js'

function App() {
	return (
		<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					{/* <Route exact path="/about" render={()=> <About  parentState={this.state} url={url} post={post}/>}/>
					<Route exact path="/article/:title" render={(props)=> <Article title={props.match.params.title} parentState={this.state} url={url} post={post}/>} />
					<Route path="/contact" render={()=> <Contact parentState={this.state} post={post} url={url}/>}/>
					<Route exact path="/category/:title" render={(props)=> <Category title={props.match.params.title} parentState={this.state} url={url} post={post}/>}/>
					<Route path="/privacy" render={()=> <Privacy parentState={this.state} post={post} url={url}/>} />
					<Route exact path="/search/:question" render={(props)=> <Search title={props.match.params.question} parentState={this.state} url={url} post={post}/>}/>
					<Route path="/terms" render={()=> <Terms parentState={this.state} post={post} url={url}/>} /> */}
				</Switch>
		</Router>
	);
}

export default App;
