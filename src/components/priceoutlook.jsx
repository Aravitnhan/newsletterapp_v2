import React from 'react';

const PriceOutlook = ({ monthYear, copperMove, steelMove, alMove, impactList, url }) => (
  <div className="card shadow-sm border mb-4">
    <div className="card-body p-4">
      <span className="badge bg-purple px-3 py-2 fw-medium mb-2 d-inline-block" style={{backgroundColor: '#7850c8'}}>PRICE OUTLOOK</span>
      <h3 className="h4 fw-bold text-dark mb-3">Spare Parts Price Outlook — {monthYear}</h3>
      
      <div className="row g-3">
        <div className="col-md-6">
          <h6 className="fw-bold text-muted mb-2">Commodity Snapshot</h6>
          <div className="text-muted small">
            Copper: <strong>{copperMove}</strong><br/>
            Steel: <strong>{steelMove}</strong><br/>
            Aluminium: <strong>{alMove}</strong>
          </div>
        </div>
        <div className="col-md-6">
          <h6 className="fw-bold text-muted mb-2">Expected Impact</h6>
          <div className="text-muted small" dangerouslySetInnerHTML={{ __html: impactList }} />
        </div>
      </div>

      <div className="mt-4">
        <a href={url} className="btn btn-primary fw-bold px-4">
          View affected spare parts <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div>
    </div>
  </div>
);


export default PriceOutlook;
