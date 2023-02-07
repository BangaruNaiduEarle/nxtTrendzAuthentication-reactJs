import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <div className="content-container">
        <div className="content-container-desc">
          <h1 className="clothes-heading">Clothes That Get You Noticed </h1>
          <p className="clothes-desc">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a maker of the era
            and we are in revolution. Your fashion makes you been seen and heard
            that way you are. So, celebrate the seasons new and exciting
            fashions in your own way.
          </p>

          <button type="button" className="shop-btn">
            Shop Now
          </button>
        </div>

        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="trendz-home"
          />
        </div>
      </div>
    </div>
  </>
)

export default Home
