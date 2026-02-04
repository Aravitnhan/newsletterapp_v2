import React from "react";
const LeftSidebarAd = ({ adUrl, adImg }) => (
  <div className="col-lg-2 d-none d-lg-block">
    <div className="card border shadow-sm h-100">
      <div className="card-body p-3">
        <small className="text-muted text-uppercase fw-bold small">Sponsored</small>
      </div>
      <div className="card-body p-3 text-center">
        <a href={adUrl} target="_blank" rel="noopener noreferrer" className="stretched-link">
          <img 
            src={adImg} 
            className="img-fluid rounded" 
            style={{width: '160px', height: '600px'}}
            alt="Sponsored Ad"
          />
        </a>
      </div>
    </div>
  </div>
);
export default LeftSidebarAd;