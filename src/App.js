import React, { Component } from 'react';
import _ from 'lodash';
// import './App.css';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetails from './components/video_details.js'
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAh9Phclg8UaKQqLrHoXzWeuQvxgrOOMOc';



class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos : [] ,
			selectedVideo : null
		}; 

		this.videoSearch('leapdrop'); 
	}

	videoSearch(term) {
		YTSearch({key : API_KEY,term:term},(videos) => {
			this.setState({ 
				videos : videos,
				selectedVideo : videos[0]
			 });
		});
	}

	render() {

		const videoSearch = _.debounce((term) => {this.videoSearch(term) },200);
		return (
			<div>
				<SearchBar onSearchTermChange= {videoSearch} />
				<VideoDetails video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	}
}

export default App;
