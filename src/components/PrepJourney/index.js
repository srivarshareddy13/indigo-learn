import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const PrepJourney = () => {
  const onSubmitForm = event => event.preventDefault()

  return (
    <div className="journey-container">
      <div className="journey-section">
        <h1 className="journey-text">
          Kick off your ACCA prep journey with IndigoLearn.
        </h1>
        <p className="journey-para">
          Sign in and get direct access to our FREE Courses
        </p>
        <button className="journey-button">Signin</button>
      </div>
      <div className="section2">
        <form className="form-container" onSubmit={onSubmitForm}>
          <h1>Apply to be an ACCA</h1>
          <input type="text" placeholder="Enter Name..." className="input" />
          <input type="text" placeholder="Enter Email..." className="input" />
          <select placeholder="Gender..." className="input">
            <option>Female</option>
            <option>Male</option>
            <option>Don't Want to disclosed</option>
          </select>
          <select placeholder="Course..." className="input">
            <option>CA</option>
            <option>CF</option>
            <option>ACCA</option>
            <option>CMA</option>
          </select>
          <Popup
            modal
            trigger={
              <button type="submit" className="submit-button">
                Request Call Back
              </button>
            }
          >
            {close => (
              <div>
                <h1>Thank you!</h1>
                <p>Registration is Successfull</p>
                <button type="button" onClick={() => close()}>
                  close
                </button>
              </div>
            )}
          </Popup>
        </form>
      </div>
    </div>
  )
}

export default PrepJourney
