import React from "react";
const ContentCards = ({ cards }) => (
  <div className="bg-white border rounded-2 p-4">
    {cards.map((card, index) => {
      // Check if this card is an ad
      const isAd = card.isAd === true;
      
      return (
        <div key={index}>
          <div className="p-3">
            {isAd ? (
              // AD VERSION - Three images in row (3 columns)
              <div>
                <div className="bg-light text-center py-1 px-3 border-top fs-4">
                  📈 Copper: +6.2% MoM
                  📉 Steel: −1.1% MoM
                </div>
              <div className="position-relative">
                <a href={card.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <div className="row g-2 mb-2">
                    {/* Three Ad Images */}
                    <div className="col-4">
                      <div className="position-relative">
                        <img
                          src={card.adImages[0] || card.image}
                          alt={`${card.title} - Ad 1`}
                          className="rounded w-100"
                          style={{
                            height: '200px',
                            objectFit: 'cover',
                            
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="position-relative">
                        <img
                          src={card.adImages[1]}
                          alt={`${card.title} - Ad 2`}
                          className="rounded w-100"
                          style={{
                            height: '200px',
                            objectFit: 'cover',
                           
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="position-relative">
                        <img
                          src={card.adImages[2]}
                          alt={`${card.title} - Ad 3`}
                          className="rounded w-100"
                          style={{
                            height: '200px',
                            objectFit: 'cover',
                            
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Sponsored Badge */}
                  <div className="position-absolute top-0 start-0 m-2" style={{zIndex: 10}}>
                    <span className="badge bg-warning text-dark px-3 py-1 fw-semibold small">
                      View affected spare parts 
                    </span>
                  </div>
                  
                  {/* Ad Title */}
                  <div className="p-2 text-center mt-2">
                    <small className="text-muted fw-medium">{card.title}</small>
                  </div>
                </a>
              </div>
              </div>
            ) : (
              // REGULAR CONTENT VERSION (unchanged)
              <div className="d-flex align-items-start">
                {/* Image */}
                {card.image && (
                  <div style={{ width: '180px', flexShrink: 0 }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded"
                      style={{
                        width: '180px',
                        height: '110px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="ms-3 flex-grow-1">
                  <h6
                    className="fw-bold mb-1 text-start"
                    style={{ lineHeight: '1.3' }}
                  >
                    {card.title}
                  </h6>

                  <p
                    className="text-muted small mb-2 text-start"
                    style={{ lineHeight: '1.5' }}
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />

                  <a
                    href={card.url}
                    target="_blank"
                    className="btn btn-danger btn-sm px-3 fw-semibold"
                    style={{ borderRadius: '2px' }}
                  >
                    {card.buttonText || 'Read more'}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Divider - Don't show after last item or after ads */}
          {index !== cards.length - 1 && !isAd && (
            <hr className="m-0 border-light" />
          )}
        </div>
      );
    })}
  </div>
);

export default ContentCards;
