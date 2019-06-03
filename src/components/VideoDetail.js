import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div
        className="ui segment"
        style={{ marginTop: "100px", height: "100px" }}>
        <div className="ui active dimmer">
          <div className="ui text loader">Searching</div>
        </div>
        <p />
      </div>
    );
  }

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="VideoPlayer" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
