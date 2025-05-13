import Header from "../Header";
import MenuBar from "../MenuBar";
import "./index.css";
import RepaymentsCollectedChart from "../Graphs/RepaymentsCollectedChart";
import OutstandingLoansChart from "../Graphs/OutStandingLoanChart";
import LoansReleasedChart from "../Graphs/LoanReleaseChart";
import Verifier1 from "../../assets/Verifier1.png";
import LoanList from "../LoanList";
import "./index.css";

const AdminDashboard = () => {
  return (
    <div>
      <Header />
      <div className="admin-dashboard-container">
        <MenuBar />
        <div className="main-container">
          <h1>Dashboard</h1>
          <div className="admin-loan-details">
            <div className="admin-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="admin-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="admin-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="admin-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="admin-loan-details-item">
              <div className="image-container">
                <img src={Verifier1} alt="item" className="verifier1" />
              </div>
              <div className="text-content">
                <p className="count">300</p>
                <p className="text-content-user">ACTIVE USERS</p>
              </div>
            </div>
            <div className="admin-loan-details-item">
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

export default AdminDashboard;
