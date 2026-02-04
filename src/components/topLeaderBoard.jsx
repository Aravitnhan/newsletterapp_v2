import React from "react";
import videos from '../assets/videos/generated_video.mp4'
const TopLeaderboardAd = ({ adUrl, adVideo }) => (
  <div className="topLeaderboard-container rounded-3 bg-light border-0">
    <div className="">
      {/* <div className="card-header bg-light border-bottom ">
        <small className="text-muted text-uppercase fw-bold tracking-wide">
          Sponsored Leaderboard
        </small>
      </div> */}
      <div className="card-body text-center">
        <a
          href={adUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none d-block w-100"
        >
          <video
            src={videos}
            className="img-fluid rounded-2 w-100 border-0"
            style={{
              width: '100%',          // 👈 Full width
              height: '100px',        // 👈 Fixed height
              objectFit: 'cover'      // 👈 Full coverage (no gaps)
            }}
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
          />
        </a>
      </div>
      {/* <div className="card-footer bg-light text-center py-1 px-3 border-top">
        <small className="text-muted">Advertisement</small>
      </div> */}
    </div>
  </div>
);

export default TopLeaderboardAd;
