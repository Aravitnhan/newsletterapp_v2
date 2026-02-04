import React from "react";
const UpdateCard = ({ image,
  title,
  description,
  leadTime,
  regions,
  onRequestQuote, }) => {
  return (
    <div className="bg-white rounded-4 shadow-sm overflow-hidden h-100">
      
      {/* Image */}
      <div className="ratio ratio-16x9">
        <img
          src={image}
          alt={title}
          className="img-fluid object-fit-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 d-flex flex-column h-100">
        
        <h5 className="fw-semibold mb-2">{title}</h5>

        <p className="text-muted small mb-3">
          {description}
        </p>

        <div className="small text-secondary mb-3">
          <div>
            <strong>Typical lead time:</strong> {leadTime}
          </div>
          <div>
            <strong>Regions served:</strong> {regions}
          </div>
        </div>
        <button
          className="btn btn-primary"
        >
          Request Quote →
        </button>

      </div>
    </div>
  )
}
export default UpdateCard