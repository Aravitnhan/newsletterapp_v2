import React from "react";
const CenterList=({
  adTopUrl,
  adTopImg,
  adLeftUrl,
  adLeftImg,
  adRightUrl,
  adRightImg,
  adFooterUrl,
  adFooterImg,
  intelHeadline,
  intelSummary,
  intelUrl,
  monthYear,
  copperMove,
  steelMove,
  alMove,
  impactList,
  outlookUrl,
  deliveredCards,
  deliveredUrl,
  sponsoredCopy,
  sponsoredUrl,
  navUrls
})=>{

    return(
         <div style={{ flex: 1, maxWidth: '672px' }}>
              
              {/* INTELLIGENCE HERO */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e3e6ee',
                borderRadius: '14px',
                marginBottom: '14px'
              }}>
                <div style={{ padding: '18px 18px 0 18px' }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#2c78dc',
                    color: '#fff',
                    borderRadius: '10px',
                    padding: '6px 10px',
                    fontSize: '12px'
                  }}>
                    INTELLIGENCE
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#1e232d', paddingTop: '12px' }}>
                    {intelHeadline}
                  </div>
                  <div style={{ fontSize: '15px', color: '#516079', lineHeight: 1.45, paddingTop: '8px' }}>
                    {intelSummary}
                  </div>
                </div>
                <div style={{ padding: '14px 18px 18px 18px' }}>
                  <a  style={{
                    display: 'inline-block',
                    backgroundColor: '#2c78dc',
                    color: '#fff',
                    textDecoration: 'none',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontWeight: 700
                  }}>
                    Read Full Analysis →
                  </a>
                </div>
              </div>

              {/* PRICE OUTLOOK */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e3e6ee',
                borderRadius: '14px',
                marginBottom: '14px'
              }}>
                <div style={{ padding: '18px' }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#7850c8',
                    color: '#fff',
                    borderRadius: '10px',
                    padding: '6px 10px',
                    fontSize: '12px'
                  }}>
                    PRICE OUTLOOK
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#1e232d', paddingTop: '12px' }}>
                    Spare Parts Price Outlook — {monthYear}
                  </div>
                  
                  <div style={{ marginTop: '10px', display: 'flex', gap: '20px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', color: '#516079', lineHeight: 1.5 }}>
                        <strong>Commodity Snapshot</strong><br />
                        Copper: {copperMove}<br />
                        Steel: {steelMove}<br />
                        Aluminium: {alMove}
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', color: '#516079', lineHeight: 1.5 }}>
                        <strong>Expected Impact</strong><br />
                        <div dangerouslySetInnerHTML={{ __html: impactList }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ paddingTop: '14px' }}>
                    <a  style={{
                      display: 'inline-block',
                      backgroundColor: '#2c78dc',
                      color: '#fff',
                      textDecoration: 'none',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      fontWeight: 700
                    }}>
                      View affected spare parts →
                    </a>
                  </div>
                </div>
              </div>

              {/* DELIVERED ORDERS */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e3e6ee',
                borderRadius: '14px',
                marginBottom: '14px'
              }}>
                <div style={{ padding: '18px' }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#1ea06e',
                    color: '#fff',
                    borderRadius: '10px',
                    padding: '6px 10px',
                    fontSize: '12px'
                  }}>
                    DELIVERED
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#1e232d', paddingTop: '12px' }}>
                    Marketplace Proof — Delivered Orders
                  </div>
                  <div style={{ fontSize: '15px', color: '#516079', lineHeight: 1.5, paddingTop: '10px' }}
                       dangerouslySetInnerHTML={{ __html: deliveredCards }} />
                  <div style={{ paddingTop: '14px' }}>
                    <a  style={{
                      display: 'inline-block',
                      backgroundColor: '#2c78dc',
                      color: '#fff',
                      textDecoration: 'none',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      fontWeight: 700
                    }}>
                      View similar parts →
                    </a>
                  </div>
                </div>
              </div>

              {/* SPONSORED FEATURE */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e3e6ee',
                borderRadius: '14px',
                marginBottom: '14px'
              }}>
                <div style={{ padding: '18px' }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#f59b3c',
                    color: '#fff',
                    borderRadius: '10px',
                    padding: '6px 10px',
                    fontSize: '12px'
                  }}>
                    SPONSORED
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#1e232d', paddingTop: '12px' }}>
                    Featured Supplier / Product
                  </div>
                  <div style={{ fontSize: '15px', color: '#516079', lineHeight: 1.5, paddingTop: '10px' }}
                       dangerouslySetInnerHTML={{ __html: sponsoredCopy }} />
                  <div style={{ paddingTop: '14px' }}>
                    <a  style={{
                      display: 'inline-block',
                      backgroundColor: '#2c78dc',
                      color: '#fff',
                      textDecoration: 'none',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      fontWeight: 700
                    }}>
                      Request quote →
                    </a>
                  </div>
                </div>
              </div>
            </div>
    )
}
export default CenterList;