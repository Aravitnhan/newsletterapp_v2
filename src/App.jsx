import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import jusonad from './assets/image/juson_image.png'
import ad_2 from './assets/image/ad-2.png';
import ad_3 from './assets/image/ad-3.png';
import ad_4 from './assets/image/ad-4.png';
import ad_5 from './assets/image/ad-5.png';
import ad_6 from './assets/image/ad-6.png';
import TrentGONewsletter from './pages/home';
import portcontetn from './assets/image/content/Importance for port.jpg';
import imp from './assets/image/content/image.jpg'
import port from './assets/image/content/port.jpg'
import port_2 from './assets/image/content/port-2.jpg'
import topad from './assets/image/top-ad.jpg'
import topad_2 from './assets/image/top-ad2.png'
import React from 'react';
function App() {
  const [count, setCount] = useState(0)
  const sampleData = {
    adTopUrl: "#",
    adTopImg: topad,
    adRightUrl: "#",
    adRightImg: topad_2,
    adImg: [
      topad,
      topad_2
    ],
    navUrls: {
      marketplace: "#marketplace", intel: "#", outlook: "#", delivered: "#", advertise: "#"
    },
    logoSrc: "https://tse2.mm.bing.net/th/id/OIP.zha51VmL8QuH7uxfKMzsTAHaF4?pid=ImgDet&w=199&h=158&c=7&dpr=2&o=7&rm=3",

    intelligence: {
      headline: "Featured Articles",
      summary: "Supply chain bottlenecks driving unprecedented delays across crane, conveyor equipment.",
      url: "#"
    },
    sponsorAds: [
      {
        url: "http://www.juson-automation.com/",
        image: jusonad,
        title: "PortEquip Solutions",
        description: "UK crane parts"
      },
      {
        url: "https://www.kernal-automation.com",
        image: ad_3,
        title: "MarineTech Ltd",
        description: "Electrical systems"
      },
      {
        url: "https://www.hesaitech.com",
        image: ad_4,
        title: "QuickParts USA",  // No image - uses gradient
        description: "Same-day dispatch",
      },
      // {
      //   url: "http://bjwdparts.com/阿里云万网虚机过期页面",
      //   image: ad_2,
      //   title: "",
      //   description: "Steel castings 24/7"
      // },
      // {
      //   url: "https://www.guizhouwirerope.com/",
      //   image: ad_5,
      //   title: "",
      //   description: "Fastest Shanghai delivery"
      // }
      {
        url: "https://www.guizhouwirerope.com/",
        image: ad_6,
        title: "",
        description: "Fastest Shanghai delivery"
      }
    ],

    contentCards: [
      {
        image: portcontetn,
        title: "The Importance of Port Call Optimization",
        description: `
        Right now, every tool needed to synchronize a vessel’s arrival with a terminal’s real-time capability already exists. AIS, berth planning engines, crane telemetry, yard heatmaps, Machine learning & digital twins, maintenance forecasts, and weather-powered ETA models.
      `,
        url: "https://www.linkedin.com/pulse/importance-port-call-optimization-jon-arnup-l1ixc/?trackingId=bCnJoUFqQoGwOzuENqhclw%3D%3D",
        buttonText: "Read More"
      },
      // {
      //   image: "https://www.trentgo.com/wp-content/uploads/2025/04/Tires.png",
      //   title: "Trentgo",
      //   description: "UK Stocked • Global Shipping • Crane Parts",
      //   url: "#",
      //   buttonText: "Visit Sponsor",
      //   isAd: true,
      //   adImages: [
      //   "https://www.trentgo.com/wp-content/uploads/2025/04/drive-module.jpg",
      //   "https://www.trentgo.com/wp-content/uploads/2025/04/depositphotos_194997996-stock-photo-car-tires-on-white-1-4.png",
      //   "https://www.trentgo.com/wp-content/uploads/2025/04/Tires.png"
      // ],
      // },
      {
        image: imp,
        // badge: "INSIGHT",
        // badgeColor: "#1ea06e",
        title: "Why Data‑Driven Ports Actually Win",
        description: `
        I’ve seen a major terminal grind to a halt because the phones were cut off (bill overlooked and not paid on time). That’s when many of us realised that the operations literally ran on WhatsApp. That wasn’t an exception. It was a glimpse of how fragile things can be.
      `,
        url: "https://www.linkedin.com/pulse/why-datadriven-ports-actually-win-jon-arnup-gkbbc/?trackingId=o3NfEKJlRxaNkwQjoI2KAQ%3D%3D",
        buttonText: "Read More"
      },
      {
        image: port,
        title: "Container Volumes and System Readiness",
        description: `
       When container volumes fall, the pressure shifts. Purchases get delayed. Standing orders get pulled back. Teams hold their breath, then rush for last-minute buys the moment an uptick appears
      `,
        url: "https://www.linkedin.com/pulse/container-volumes-system-readiness-jon-arnup-e8lec/?trackingId=RAUpYAHxQgWW68TnCNeQJg%3D%3D",
        buttonText: "Read More"
      },
      // {
      //   image: "https://www.trentgo.com/wp-content/uploads/2025/04/drive-module.jpg",
      //   title: "Trentgo",
      //   description: "Steel castings • 24/7 dispatch • Worldwide shipping",
      //   url: "#",
      //   buttonText: "Get Quote",
      //   isAd: true , // 👈 Another AD,
      //   adImages: [
      //   "https://www.trentgo.com/wp-content/uploads/2025/04/drive-module.jpg",
      //   "https://www.trentgo.com/wp-content/uploads/2025/04/depositphotos_194997996-stock-photo-car-tires-on-white-1-4.png",
      //   "https://www.trentgo.com/wp-content/uploads/2025/04/Tires.png"
      // ],
      // },
      {
        image: port_2,
        title: "Port Procurement Needs a Reset",
        description: `
       We’re seeing more large operators taking everything in-house. It’s becoming the norm, not the exception. Even mid-tier players are leaning the same way, believing the strongest results come from internal consolidation.
      `,
        url: "https://www.linkedin.com/pulse/port-procurement-needs-reset-jon-arnup-6seyf/?trackingId=7tEFZFWjQuOihsx%2FRQc%2Bxw%3D%3D",
        buttonText: "Read More"
      },

    ],
    marketIndex: [
      {
        image: "https://etimg.etb2bimg.com/photo/126300389.cms",
        title: "Copper",
        description: `
        Copper futures dropped more than 3% to around $6 per pound on Friday, reversing a sharp rally from the previous session amid a broad retreat across the metals complex.
      `,
        url: "https://tradingeconomics.com/commodity/copper",
        buttonText: "Read More"
      },
      {
        image: "https://endura-steel.com/wp-content/uploads/2023/06/steel-facts.jpg",
        title: "Steel",
        description: `
        Steel rebar futures in China fell to CNY 3,100 per tonne after testing five-month highs of CNY 3,160 on January 29th, pressured by the recent decline in industrial metals as markets reconsidered speculative trades.
      `,
        url: "https://tradingeconomics.com/commodity/steel",
        buttonText: "Read More"
      },
      {
        image: "https://www.aluminium-online.co.uk/wp-content/uploads/2024/04/iStock-537488285-scaled-1.jpg",
        title: "Aluminum",
        description: `
       Aluminum futures in the UK fell to $3,100 per tonne, retreating sharply from the over three-year high of $3,270 on January 28th and tracking the aggressive pullback for base metals as traders reconsidered their speculative positions.
      `,
        url: "https://tradingeconomics.com/commodity/aluminum",
        buttonText: "Read More"
      },
    ],
    updates: [
      {
        image: ad_3,
        date: "December 11, 2024",
        title: "Kernal",
        description: "specialising in control systems and automation components for RTGs and STS cranes",
        leadTime: "14 - 28 days",
        regions: 'APAC / Middle East'
      },
      {
        image: jusonad,
        date: "December 11, 2024",
        title: "Juson Automation",
        description: "Automation components and accessories used in industrial settings",
        leadTime: "1 - 3 days",
        regions: 'Asia, Middle East, Europe, Africa'
      },
      {
        image: ad_4,
        date: "December 11, 2024",
        title: "Hesai",
        description: "Advanced LiDAR sensors used in ADAS, autonomous vehicles, and robotics",
        leadTime: "14 - 28 days",
        regions: 'Asia, North America, and Europe'
      },
    ]
  };
  return (
    <>
      <TrentGONewsletter {...sampleData} />
    </>
  )
}

export default App
