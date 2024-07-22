import {Component} from 'react'
import {IoReorderThree} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import HomePage from '../HomePage'
import LearningInAcca from '../LearningInAcca'
import PrepJourney from '../PrepJourney'
import PlacementAssistance from '../PlacementAssistance'
import WhyChooseUs from '../WhyChooseUs'
import './index.css'

const apiConstants = {
  homePage: 'HOMEPAGE',
  whyChooseUs: 'WHYCHOOSEUS',
  learningInAcca: 'LEARNINGINACCA',
  placementAssistance: 'PLACEMENTASSISTANCE',
  prepJourney: 'PREPJOURNEY',
}

class Header extends Component {
  state = {
    status: apiConstants.homePage,
  }

  renderHomePage = () => <HomePage />

  renderLearningInAcca = () => <LearningInAcca />

  renderPlacementAssistance = () => <PlacementAssistance />

  renderPrepJourney = () => <PrepJourney />

  renderWhyChooseUs = () => <WhyChooseUs />

  renderPages = () => {
    const {status} = this.state

    switch (status) {
      case apiConstants.homePage:
        return this.renderHomePage()
      case apiConstants.whyChooseUs:
        return this.renderWhyChooseUs()
      case apiConstants.learningInAcca:
        return this.renderLearningInAcca()
      case apiConstants.placementAssistance:
        return this.renderPlacementAssistance()
      case apiConstants.prepJourney:
        return this.renderPrepJourney()
      default:
        return null
    }
  }

  onClickHome = () => this.setState({status: apiConstants.homePage})

  onClickWhy = () => this.setState({status: apiConstants.whyChooseUs})

  onClickLearning = () => this.setState({status: apiConstants.learningInAcca})

  onClickPrep = () => this.setState({status: apiConstants.prepJourney})

  onClickPlacement = () =>
    this.setState({status: apiConstants.placementAssistance})

  render() {
    return (
      <div className="app-container">
        <nav className="nav-link">
          <div className="items">
            <IoReorderThree size={30} color="#ffffff" />
            <h1 className="logo-heading" onClick={this.onClickHome}>
              IndigoLearn
            </h1>
          </div>
          <div className="items">
            <h1 className="heading" onClick={this.onClickWhy}>
              Why Choose Us?
            </h1>
            <h1 className="heading" onClick={this.onClickLearning}>
              Learning in ACCA
            </h1>
            <h1 className="heading" onClick={this.onClickPlacement}>
              Placement Assistance
            </h1>
            <h1 className="heading" onClick={this.onClickPrep}>
              Prep Journey
            </h1>
          </div>
          <div className="items">
            <button className="button" type="button">
              <CgProfile size={20} color="#5c3da0" />
              Login/SignUp
            </button>
          </div>
        </nav>
        {this.renderPages()}
      </div>
    )
  }
}
export default Header
