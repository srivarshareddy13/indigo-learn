import './index.css'

const LearningInAcca = () => (
  <div className="learning-container">
    <h1>What will you Learn in ACCA?</h1>
    <hr className="line" />
    <div className="card-items">
      <div className="learning-card">
        <h1 className="top-heading">Knowledge Level</h1>
        <div className="middle-card">
          <ul className="list-type">
            <li>Business Technology (BT)</li>
            <li>Management Accounting (MA)</li>
            <li>Financial Accounting (FA)</li>
          </ul>
        </div>
        <h1 className="bottom-heading">3 Papers</h1>
      </div>
      <div className="learning-card">
        <h1 className="top-heading">Skill Level</h1>
        <div className="middle-card">
          <ul className="list-type">
            <li>Applied Skills Level 1</li>
            <li>Applied Skills Level 2</li>
            <li>Performance Management (PM)</li>
            <li>Financial Reporting (FR)</li>
            <li>Audit&Assurance (AA)</li>
            <li>Financial Management (FM)</li>
          </ul>
        </div>
        <h1 className="bottom-heading">6 Papers</h1>
      </div>
      <div className="learning-card">
        <h1 className="top-heading">Professional Level</h1>
        <div className="middle-card">
          <h1 className="headers">Completely</h1>
          <ul className="list-type">
            <li>SOL</li>
            <li>SEF</li>
          </ul>
          <h1 className="headers">Two out of the following</h1>
          <ul className="list-type">
            <li>Advanced Financial Management</li>
            <li>Advanced Financial Accounting</li>
            <li>Advanced Business Technology</li>
            <li>Advanced Technology</li>
          </ul>
        </div>
        <h1 className="bottom-heading">4 Papers</h1>
      </div>
    </div>
  </div>
)

export default LearningInAcca
