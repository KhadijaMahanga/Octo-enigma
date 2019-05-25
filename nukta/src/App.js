import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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

class App extends Component {
	state = {
		data:{menu:null}
		}
		
	setData=info=>{
			this.setState({
				data:info
			})
		}	
	
	componentDidMount(){
		const _url = url()+'api/?action=home-data';
		post(_url,function(result,obj){
				obj.setData(result);
			},this);
	}
	
	render() {
		const {data} = this.state;
		return (
			<Router>
			<div className="App">
				<header>
					<Header/>
					<Menu menuItems={data?data.menu:null}  url={url}/>
				</header>
				
					<Route exact path="/" render={()=> <Home parent={this} parentState={this.state} url={url} post={post} />} />
					<Route exact path="/about" render={()=> <About  parentState={this.state} url={url} post={post}/>}/>
					<Route exact path="/article/:title" render={(props)=> <Article title={props.match.params.title} parentState={this.state} url={url} post={post}/>} />
					<Route path="/contact" render={()=> <Contact parentState={this.state} post={post} url={url}/>}/>
					<Route exact path="/category/:title" render={(props)=> <Category title={props.match.params.title} parentState={this.state} url={url} post={post}/>}/>
					<Route path="/privacy" render={()=> <Privacy parentState={this.state} post={post} url={url}/>} />
					<Route exact path="/search/:question" render={(props)=> <Search title={props.match.params.question} parentState={this.state} url={url} post={post}/>}/>
					<Route path="/terms" render={()=> <Terms parentState={this.state} post={post} url={url}/>} />
					
				<Footer/>
			</div>
			</Router>
		);
	}
}

function url(){return "https://prototype.nukta.co.tz/"}		//http://localhost/nukta19/  https://prototype.nukta.co.tz/
function post(url,success,obj){
		var networkDataReceived = false;
		const networkUpdate =	url =>{
				caches.open('nuktaAPI').then(function(cache) {
					fetch(url)
						.then(result=>{
							  cache.put(url, result.clone());
							  try{
							  	return result.json();
							  }catch(e){
								  return result.text();
							  }})
						.then(result=>{
							networkDataReceived=true;
							success(result,obj);
						});
				});
			}
		caches.match(url).then(function(response) {
			if (!response) throw Error("No data in cache");
			return response.json();
		}).then(function(data) {
			if (!networkDataReceived) {
				success(data,obj);			// Work on data we obtained from cache if no newer is received yet
			}
			networkUpdate(url);
		}).catch(function() {
			return networkUpdate(url);		// We didnt get cached data, we go to network
		});
	}
export default App;
