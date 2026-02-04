import React from 'react';

const IntelligenceHero = ({ headline, summary, url }) => (
  <div className="card shadow-sm border">
    <div className="">
      <div className="pb-0">
        {/* <span className="badge bg-primary px-3 py-2 fw-medium mb-2 d-inline-block">INTELLIGENCE</span> */}
        <h2 className="h1 fw-bold text-dark ">{headline}</h2>
        {/* <p className="text-muted mb-0">{summary}</p> */}
      </div>
      {/* <div className="p-4 pt-0">
        <a href={url} className="btn btn-primary fw-bold px-4">
          Read Full Analysis <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div> */}
    </div>
  </div>
);


export default IntelligenceHero;
