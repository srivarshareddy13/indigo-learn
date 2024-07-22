import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const HomePage = () => {
  const onSubmitForm = event => event.preventDefault()

  return (
    <div className="container">
      <div className="section1">
        <div className="item1">
          <h1>Become ACCA in 18 Months</h1>
          <p className="para">
            IndigoLearn is India's Leading online education institute for
            training students.
          </p>
        </div>
        <div className="items">
          <div className="card">
            <p className="text">Registered Users 3,28,305</p>
          </div>
          <div className="card">
            <p className="text">Courses Enrolled 1,01,109</p>
          </div>
          <div className="card">
            <p className="text">Minutes Watched 2,57,72,575</p>
          </div>
          <div className="card">
            <p className="text">Faculty Experts</p>
          </div>
        </div>
        <div className="items">
          <button className="button1">Explore Us</button>
          <button className="button2">Buy Courses</button>
        </div>
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

export default HomePage
