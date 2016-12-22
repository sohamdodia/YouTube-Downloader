import React from 'react';

const VideoDetails = ({video}) => {
	if(!video) {
		return (
			<div>Loading...</div>
		);
	}
	const videoId = video.id.videoId;
	const url = 'https://www.youtube.com/embed/' + videoId;
	const downUrl = 'https://www.ssyoutube.com/embed/' + videoId;
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div><a href={downUrl} target='_blank'><button type = "button" className = "btn btn-danger">Download</button></a></div>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetails;