import React ,{useState, useEffect } from 'react'
import './home.css'
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
function Home() {
    const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(true);
  }, []);
  return (
    <div>
        <section className="hero-wrapper">
      <div className="paddings inner-width flex-center hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>Hongkong and Shanghai Banking Corporation Limited</h1>
          </div>
          <div className="flex-col-start hero-description">
            <span>Expertise you need. Service you deserve!</span>
            <span>Today, tomorrow, together.</span>
          </div>
          <div className="search-bar flex-center">
            <HiLocationMarker className="location-icon" />
            <input type="text" placeholder="Search Location Here..." />
            <button className="button">Search</button>
          </div>
          <div className="stats">
            <div className="flex-col-start stats-item">
              <span className="count">
                {startCount && <CountUp start={0} end={88000} duration={4} />}
                <span>+</span>
              </span><hr />
              <span>Services</span>
            </div>
            <div className="flex-col-start stats-item">
              <span className="count">
                {startCount && <CountUp start={0} end={75000} duration={4} />}
                <span>+</span>
              </span><hr />
              <span>Happy Customers</span>
            </div>
            <div className="flex-col-start stats-item">
              <span className="count">
                {startCount && <CountUp start={0} end={500} duration={4} />}
                <span>+</span>
              </span><hr />
              <span>Award Winnings</span>
            </div>
          </div>
        </div>
        <div className="flex-center hero-right">
          <div className="image-container">
            <img src="https://www.centralbanking.com/sites/default/files/styles/landscape_750_463/public/import/IMG/874/331874/hsbc-hq-canary-wharf-day-2015.jpeg.webp?itok=FRfs7fQZ" alt="Discover suitable properties" />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home