import React from 'react';

const DeliveredOrders = ({ deliveredCards, url }) => (
  <div className="card shadow-sm border mb-4">
    <div className="card-body p-4">
      <span className="badge bg-success px-3 py-2 fw-medium mb-2 d-inline-block">DELIVERED</span>
      <h3 className="h4 fw-bold text-dark mb-3">Marketplace Proof — Delivered Orders</h3>
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: deliveredCards }} />
      <a href={url} className="btn btn-primary fw-bold px-4">
        View similar parts <i className="bi bi-arrow-right ms-1"></i>
      </a>
    </div>
  </div>
);


export default DeliveredOrders;
