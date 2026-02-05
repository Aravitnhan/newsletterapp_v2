import React from 'react';
import LeftSidebarAd from '../components/leftsidebar';
import RightSidebarAd from '../components/rightside';
import HeaderSection from '../components/headersection';
import IntelligenceHero from '../components/inteligencehero';
import PriceOutlook from '../components/priceoutlook';
import DeliveredOrders from '../components/deliveredoreder';
import SponsoredFeature from '../components/sponserfetaure';
import TopLeaderboardAd from '../components/topLeaderBoard';
import ContentCards from '../components/contentcards';
import FooterComponent from '../components/footercomponent';
import UpdateCard from '../components/updatecard';
import featurearticle from '../assets/image/content-card/Creative.png';
import ad_4 from '../assets/image/ad-4.png';
import hesai from '../assets/image/content-card/hesai.png'
import happenopenings from '../assets/image/content-card/TG happnings.png';
import marketindex from '../assets/image/content-card/market index.png';
import po from '../assets/image/content-card/price outlook.png'

const TrentGONewsletter = (props) => {

  const TypeCard = (type) => {
    const frame = document.getElementById('iframe');
    const typecard = document.getElementById('typecard');
    const contentcard = document.getElementById('cardcontent');
    const framediv=document.getElementById('framediv');
    contentcard.classList.add('d-none');
    switch (type) {

      case 'po':
        frame.src = 'https://tradingeconomics.com';
        framediv.classList.remove('d-none');
        break
      case 'mfs':
        framediv.classList.remove('d-none');
        frame.src = 'https://www.hesaitech.com/';
        break
      case 'ho':
        framediv.classList.remove('d-none');
        frame.src = 'https://www.trentgo.com/news';
        break
      case 'feature':
        typecard.classList.remove('d-none');
        break
    }
  }
  const backEvent=()=>{
     const typecard = document.getElementById('typecard');
    const contentcard = document.getElementById('cardcontent');
    const framediv=document.getElementById('framediv');
    typecard.classList.add('d-none');
    contentcard.classList.remove('d-none');
    framediv.classList.add('d-none');
  }
  return (
    <div className="">
      <div className="container-fluid">

        {/* Top Leaderboard Ad */}
        <TopLeaderboardAd adUrl={props.adImg} adImg={props.adTopImg} />

        {/* Header */}
        <HeaderSection navUrls={props.navUrls} logoSrc={props.logoSrc} />

        {/* Custom 2-Column Layout (NO LEFT SIDEBAR) */}
        <div className="page-layout">
          {/* ================= LEFT CONTENT ================= */}
          <div className="content-area">

            {/* ROW 1 */}
            <div id='content-card'>
              <div id='cardcontent'>
                <div className="expand-row">

                  <div className="flex-card" >
                    <img
                      src={happenopenings}
                      alt="Featured"
                      className="card-main-img"
                    />

                    <div className="new-card-hover-content" style={{ backgroundImage: `url(${happenopenings})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => { TypeCard("ho") }} >

                      {/* <div className="hover-item">
                      <div className="hover-text">
                     <h6 id='happenings'>TrentGO Updates</h6>
                   
                    <p>Checkout the latest update of TrentGo.</p>
                    <a
                      href="/feteatureArticles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-danger btn-sm"
                    >
                      Read more
                    </a>
                    </div>
                    
                  </div> */}
                    </div>
                  </div>

                  <div className="flex-card">
                    <img
                      src={featurearticle}
                      alt="Featured Articles"
                      className="card-main-img"
                      onClick={() => TypeCard('feature')}
                    />

                    <div className="new-card-hover-content" style={{ backgroundImage: `url(${featurearticle})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => TypeCard('feature')}>
                      <div className="hover-text">

                      </div>
                      {/* 
                  {props.contentCards?.map((card, index) => (
                    <div key={index} className="hover-item">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="hover-thumb"
                      />
                      <div className="hover-text">
                        <h6>{card.title}</h6>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: card.description,
                          }}
                        />
                        <a
                          href={card.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-danger btn-sm"
                        >
                          {card.buttonText || "Read more"}
                        </a>
                      </div>
                    </div>
                  ))} 
                   */}
                    </div>
                  </div>

                </div>

                {/* ROW 2 */}
                <div className="expand-row">

                  <div className="flex-card">
                    <img
                      src={po}
                      alt="Card 2"
                      className="card-main-img"
                    />
                    <div className="new-card-hover-content" style={{ backgroundImage: `url(${po})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => TypeCard('po')} >
                      {/* {props.marketIndex?.map((card, index) => (
                    <div key={index} className="hover-item">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="hover-thumb"
                      />
                      <div className="hover-text">
                        <h6>{card.title}</h6>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: card.description,
                          }}
                        />
                        <a
                          href={card.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-danger btn-sm"
                        >
                          {card.buttonText || "Read more"}
                        </a>
                      </div>
                    </div>
                  ))} */}
                    </div>
                  </div>

                  <div className="flex-card">
                    <img
                      src={hesai}
                      alt="Featured Articles"
                      className="card-main-img"
                    />
                    <div
                      className="new-card-hover-content"
                      style={{ backgroundImage: `url(${hesai})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                      onClick={() => TypeCard('mfs')}
                    >
                      {/* <div className="hover-item">
                    <div className="hover-text">
                      <h6>Monthly Featured Supplier</h6>
                      <p>Hesai is a advanced LiDAR sensors used in ADAS, autonomous vehicles, and robotics</p>
                      <a
                        href="https://www.hesaitech.com"
                        target="_blank"
                        className="btn btn-danger btn-sm"
                      >
                        {"Read More"}
                      </a>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div id='typecard' className='d-none'>
                  
                  <h5><span className='bi bi-arrow-left' onClick={()=>backEvent()}> </span> Feature Article</h5>
                  {props.contentCards?.map((card, index) => (
                    <div key={index} className="hover-item">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="hover-thumb"
                      />
                      <div className="hover-text">
                        <h6>{card.title}</h6>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: card.description,
                          }}
                        />
                        <a
                          href={card.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-danger btn-sm"
                        >
                          {card.buttonText || "Read more"}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className='d-none' id='framediv'>
                    <h5><span className='bi bi-arrow-left' onClick={()=>backEvent()}> </span></h5>
                    <iframe
                      id='iframe'
                      src=''
                      title="External site"
                      width="100%"
                      height="500"
                      className=''
                      style={{ border: "1px solid #ccc" }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="sidebar-area">
            <RightSidebarAd sponsorAds={props.sponsorAds} />
          </aside>

        </div>

      </div>
      <FooterComponent adFooterUrl={props.adFooterUrl} adFooterImg={props.adFooterImg} />
    </div>
  )
}

export default TrentGONewsletter;
