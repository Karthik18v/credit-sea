import Header from "../Header";
import MenuBar from "../MenuBar";
import Verifier1 from "../../assets/Verifier1.png";
import "./index.css";
import LoanList from "../LoanList";
import LoansReleasedChart from "../Graphs/LoanReleaseChart";
import OutstandingLoansChart from "../Graphs/OutStandingLoanChart";
import RepaymentsCollectedChart from "../Graphs/RepaymentsCollectedChart";

const VerifierDashboard = () => {
  return (
    <div className="verifierDashboard">
      <Header />
      <div className="verifierDashboard-container">
        <MenuBar />
        <div className="main-container">
          <h1>Dashboard</h1>
          <div className="verifier-loan-details">
            <div className="verifier-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="verifier-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="verifier-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="verifier-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="verifier-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="verifier-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="verifier-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="verifier-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
          </div>
          <LoanList />
          <LoansReleasedChart />
          <OutstandingLoansChart />
          <RepaymentsCollectedChart />
        </div>
      </div>
    </div>
  );
};

export default VerifierDashboard;
