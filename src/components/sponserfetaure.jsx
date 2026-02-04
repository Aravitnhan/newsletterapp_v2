import React from 'react';

const SponsoredFeature = ({ copy, url }) => (
  <div className="card shadow-sm border mb-4">
    <div className="card-body p-4">
      <span className="badge bg-warning text-dark px-3 py-2 fw-medium mb-2 d-inline-block">SPONSORED</span>
      <h3 className="h4 fw-bold text-dark mb-3">Featured Supplier / Product</h3>
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: copy }} />
      <a href={url} className="btn btn-primary fw-bold px-4">
        Request quote <i className="bi bi-arrow-right ms-1"></i>
      </a>
    </div>
  </div>
);


export default SponsoredFeature;
