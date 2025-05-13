import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import loanofficer from "../../assets/loanofficer.png";

import "./index.css";

const statusBackgroundColours = {
  PENDING: "#FEC400",
  VERIFIED: "#29CC97",
  REJECTED: "#CC2929",
  APPROVED: "#1829C7",
};

const loanDetails = [
  {
    loanOfficerName: "John Okoh",
    updateTime: "1 day ago",
    amount: 50000.0,
    amountStatus: "Not Debt Yet",
    dateOfApplied: "June 09,2021",
    TimeOfApplied: "6:30PM",
    loanStatus: "PENDING",
  },
  {
    loanOfficerName: "John Okoh",
    updateTime: "1 day ago",
    amount: 100000.0,
    amountStatus: "Not Debt Yet",
    dateOfApplied: "June 07,2021",
    TimeOfApplied: "6:30PM",
    loanStatus: "VERIFIED",
  },
  {
    loanOfficerName: "John Okoh",
    updateTime: "1 day ago",
    amount: 100000.0,
    amountStatus: "Not Debt Yet",
    dateOfApplied: "June 07,2021",
    TimeOfApplied: "6:30PM",
    loanStatus: "REJECTED",
  },
  {
    loanOfficerName: "John Okoh",
    updateTime: "1 day ago",
    amount: 100000.0,
    amountStatus: "Loan Fully Reaid",
    dateOfApplied: "May 27,2021",
    TimeOfApplied: "6:30PM",
    loanStatus: "APPROVED",
  },
];

const LoanList = () => {
  return (
    <div className="loan-list-container">
      <div className="loan-list-heading">
        <h4>Applied Loans</h4>
        <div>
          <div>
            <button className="loan-list-button">
              <FaSortAmountUp />
              sort
            </button>
            <button className="loan-list-button">
              <FaFilter />
              filter
            </button>
          </div>
        </div>
      </div>
      <div className="loan-details-heading">
        <p className="loan-officer">Loan Officer</p>
        <p className="loan-amount">Amount</p>
        <p className="loan-date">Date Applied</p>
        <p className="loan-status">Status</p>
      </div>
      <hr style={{ width: "100%" }} />
      {loanDetails.map((eachItem) => (
        <>
          <div className="loan-details-heading">
            <div className="loan-officer-details">
              <img
                className="loan-officer-image"
                src={loanofficer}
                alt="loanofficer-profile"
              />
              <div className="loan-officer-update-details">
                <span className="loan-officer-name">
                  {eachItem.loanOfficerName}
                </span>
                <span className="loan-update-time ">
                  updated {eachItem.updateTime}
                </span>
              </div>
            </div>
            <div className="loan-amount-details">
              <p className="loan-price">{eachItem.amount}</p>
              <p className="loan-price-status">{eachItem.amountStatus}</p>
            </div>
            <div className="loan-amount-details">
              <p className="loan-applied-date">{eachItem.dateOfApplied}</p>
              <p className="loan-time">{eachItem.TimeOfApplied}</p>
            </div>

            <div
              className="loan-status-details"
              style={{
                backgroundColor: statusBackgroundColours[eachItem.loanStatus],
              }}
            >
              {eachItem.loanStatus}
            </div>
            <BsThreeDotsVertical />
          </div>
          <hr style={{ width: "100%" }} />
        </>
      ))}
    </div>
  );
};

export default LoanList;
