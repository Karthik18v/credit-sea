import Header from "../Header";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Money from "../../assets/Money.png";
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

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <Header />
      <div className="user-dashboard-container">
        <div className="user-dashboard-balance-conatiner">
          <div className="money-info-container">
            <div className="money-container">
              <img src={Money} alt="money" />
            </div>
            <div>
              <p className="defict">DEFICT</p>
              <TbCurrencyNaira size={12.5} />
              <h4 className="amount">0.0</h4>
            </div>
          </div>
          <button className="get-loan-button" type="button">
            Get A Loan
          </button>
        </div>
        <div className="tab-container">
          <div className="tab active">Borrow Cash</div>
          <div className="tab">Transact</div>
          <div className="tab">Deposit Cash</div>
        </div>
        <div className="search-bar-container">
          <IoSearch size={25} style={{ marginLeft: "20" }} />
          <input
            className="search-input"
            type="text"
            placeholder="Search Loan"
          />
        </div>
      </div>
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
      <form className="form-container">
        <h3>APPLY FOR A LOAN</h3>
        <div className="form-input">
          <div>
            <>
              <p>Full name as it appears on bank account</p>
              <input
                className="user-input"
                type="text"
                placeholder="Full name as it appears on bank account"
              />
            </>
            <>
              <p>Loan tenure (in months)</p>
              <input
                className="user-input"
                type="text"
                placeholder="Loan tenure (in months)"
              />
            </>
            <>
              <p>Loan tenure (in months)</p>
              <textarea type="text" placeholder="Loan tenure (in months)" />
            </>
            <br />
            <label
              style={{
                width: "300px",
                display: "block",
                wordWrap: "break-word",
              }}
            >
              <input
                type="radio"
                name="terms"
                value="accept"
                id="acceptTerms"
              />
              I have read the important information and accept that by
              completing the application I will be bound by theterms.
            </label>
          </div>
          <div>
            <>
              <p>How much do you need?</p>
              <input
                className="user-input"
                type="text"
                placeholder="How much do you need?"
              />
            </>
            <>
              <p>Employment status</p>
              <input
                className="user-input"
                type="text"
                placeholder="Employment status"
              />
            </>
            <>
              <p>Employment address</p>
              <input
                className="user-input"
                type="text"
                placeholder="Employment address"
              />
            </>
            <>
              <p>Employment address</p>
              <input
                className="user-input"
                type="text"
                placeholder="Employment address"
              />
            </>
            <br />
            <label
              className="credit-disclosure"
              style={{
                width: "300px",
                display: "block",
                wordWrap: "break-word",
              }}
            >
              <input type="checkbox" name="creditConsent" id="creditConsent" />
              Any personal and credit information obtained may be disclosed from
              time to time to other lenders, credit bureaus or other credit
              reporting agencies.
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserDashboard;
