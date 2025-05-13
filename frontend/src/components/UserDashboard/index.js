import Header from "../Header";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";

import Money from "../../assets/Money.png";
import "./index.css";
import { useState } from "react";
import LoanList from "../LoanList";

const UserDashboard = () => {
  const [visibleForm, setVisibleForm] = useState(false);

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
          <button
            className="get-loan-button"
            type="button"
            onClick={() => setVisibleForm(!visibleForm)}
          >
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
        <div className="user-loan-list-container">
          <LoanList />
        </div>
      </div>
      {visibleForm && (
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
                <input
                  type="checkbox"
                  name="creditConsent"
                  id="creditConsent"
                />
                Any personal and credit information obtained may be disclosed
                from time to time to other lenders, credit bureaus or other
                credit reporting agencies.
              </label>
            </div>
          </div>
          <button
            onClick={() => setVisibleForm(false)}
            type="submit"
            className="form-button"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default UserDashboard;
