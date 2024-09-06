import React from 'react';

const Video = () => {
  return (
    <div className="-z-10 relative w-full h-0 pb-[56.25%]"> {/* Wrapper with aspect ratio */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/videoplayback.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
