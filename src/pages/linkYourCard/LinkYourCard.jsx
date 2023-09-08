import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabelInput from "../../component/input/FloatingLabelInput";
import { cardType } from "../../data/cardType";
import { DatePicker } from "antd";
import Button from "../../component/button/Button";

export default function LinkYourCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiringDate, setExpiringDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [selectedCardType, setSelectedCardType] = useState(""); // State for selected card type
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(""); // State for tracking errors

  const navigate = useNavigate();

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const handleValidation = () => {
    let newError = "";

    // Validate card number, expiring date, security code, etc.
    if (
      !selectedCardType ||
      !cardNumber ||
      !expiringDate.year ||
      !expiringDate.month ||
      !securityCode ||
      !billingAddress
    ) {
      newError = "Please fill in all the required fields.";
    } else {
      // Find the selected card object based on selectedCardType
      const selectedCard = cardType.find(
        (card) => card.label === selectedCardType
      );

      // Check if entered card number, expiring date, and security code match the correct values
      if (selectedCard) {
        const formattedExpiry = `${expiringDate.month
          .toString()
          .padStart(2, "0")}-${expiringDate.year}`;
        if (
          cardNumber !== selectedCard.cardNumber ||
          formattedExpiry !== selectedCard.expiringDate ||
          securityCode !== selectedCard.securityCode
        ) {
          newError = "Check your information and try again.";
        }
      }
    }

    // Update the error state
    setError(newError);

    return newError === ""; // Return whether the form is valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();

    if (isValid) {
      // Process the form data or perform other actions
      // For now, just logging a success message
      alert("Form submitted successfully!");
    } else {
      console.log("Form has errors. Please check your information.");
    }
  };

  const handleCardTypeChange = (e) => {
    setSelectedCardType(e.target.value); // Update selected card type
  };

  const handleCardNumberChange = (e) => {
    const enteredCardNumber = e.target.value;
    const digitsOnly = enteredCardNumber.replace(/\D/g, ""); // Remove non-digit characters
    setCardNumber(digitsOnly);

    // Check card type based on the first digit of digitsOnly
    const matchingCardType = cardType.find(
      (card) =>
        card.cardNumber && digitsOnly.startsWith(card.cardNumber.charAt(0))
    );

    if (matchingCardType) {
      setSelectedCardType(matchingCardType.label);
    } else {
      setSelectedCardType("");
    }
  };

  const handleSecurityCodeChange = (e) => {
    const enteredSecurityCode = e.target.value;
    const digitsOnly = enteredSecurityCode.replace(/\D/g, ""); // Remove non-digit characters
    setSecurityCode(digitsOnly);
  };

  // Find the selected card object based on selectedCardType
  const selectedCard = cardType.find((card) => card.label === selectedCardType);

  const handleExpiringDateChange = (selectedDate) => {
    if (selectedDate) {
      const year = selectedDate.year();
      const month = selectedDate.month() + 1; // Months are zero-indexed, so add 1
      setExpiringDate({ year, month });
    } else {
      setExpiringDate({ year: "", month: "" });
    }
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-full bg-[#F4F6F9]">
      <div className="bg-white mx-auto max-w-[750px] h-full p-5">
        <div className="logo max-w-[800px] mx-auto mb-7 flex items-center justify-between">
          <button
            type="button"
            onClick={navigateBack}
            className="w-11 h-11 text-center hover:bg-slate-50 rounded-full"
          >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </button>
          <Link to="/" className="relative right-5">
            <img
              className="w-6"
              src="https://i.ibb.co/mCHhPkS/Capture-removebg-preview.png"
              alt=""
            />
          </Link>
          <div></div>
        </div>
        <p className="text-center text-[#001435] text-3xl font-medium">
          Link a card
        </p>
        <div className="pb-[100px]">
          <form onSubmit={handleSubmit}>
            {error && (
              <p className="text-[#C40B0B] font-medium p-5 rounded mx-auto max-w-max pl-7 pr-7 text-lg mt-4 border text-center">
                <i className="fa-solid text-lg text-[#C40B0B] fa-triangle-exclamation"></i>
                &nbsp; {error}
              </p>
            )}

            <div className="cardImg mx-auto max-w-[150px] h-34 mt-7">
              <img
                className="preview-card-img h-full rounded shadow-md"
                src={
                  selectedCard
                    ? selectedCard.cardTypeImg
                    : "https://i.imgur.com/YGerwKX.png"
                }
                alt=""
              />
            </div>
            <div className="mx-auto max-w-[350px] mt-5">
              <div className="mb-4">
                <FloatingLabelInput
                  label="Debit or credit card number"
                  type="text"
                  placeholder="Enter card number"
                  className="pb-0 border-[1px]"
                  value={cardNumber}
                  onChange={handleCardNumberChange} // Update card type based on entered card number
                />
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="Card type"
                  className={`absolute z-10 text-[13px] top-1 font-semibold text-gray-700 left-4 transition-all`}
                >
                  Card type
                </label>
                <select
                  id="cardType"
                  name="cardType"
                  value={selectedCardType}
                  onChange={handleCardTypeChange}
                  className="border rounded z-20 outline-none bg-transparent border-neutral-500 w-full p-4 pb-2 pt-5 h-[60px]"
                >
                  <option value="">Select your card type</option>
                  {cardType.map((option, index) => (
                    <option key={index} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 relative">
                <label
                  htmlFor="expiring date"
                  className={`absolute z-10 font-medium text-gray-700 left-4 transition-all ${
                    focused ||
                    (expiringDate && expiringDate.year && expiringDate.month)
                      ? "text-[13px] top-1 font-semibold text-gray-700"
                      : "text-[17px] top-[20px] font-medium text-gray-700"
                  }`}
                >
                  Expiring date
                </label>
                <DatePicker
                  onFocus={handleFocus}
                  format="MM-YYYY"
                  onBlur={handleBlur}
                  selected={expiringDate}
                  onChange={handleExpiringDateChange}
                  placeholder={focused ? "mm-yy" : ""}
                  picker="month"
                  className="border z-20 bg-transparent border-neutral-500 w-full p-4 pb-2 pt-5 h-[60px]"
                />
              </div>
              <div className="mb-4 flex items-center">
                <div className="">
                  <FloatingLabelInput
                    label="Security code"
                    type="text"
                    placeholder="Security code"
                    className="pb-0 border-[1px] w-full"
                    value={securityCode}
                    onChange={handleSecurityCodeChange}
                  />
                </div>
                <div className="w-12 h-10"></div>
              </div>

              <div className="mb-4">
                <FloatingLabelInput
                  label="Billing address"
                  type="text"
                  placeholder="Billing address"
                  className="pb-0 border-[1px]"
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                />
              </div>
              <div className="mt-7">
                <Button
                  type="submit"
                  text="Link Card"
                  className="pb-3 pt-3 max-w-[400px]"
                />
              </div>
            </div>
          </form>
           {/* <p className="mt-8 cursor-pointer font-semibold text-[#4c7bd1] text-[18px] text-center">
            Not now
          </p>  */}
        </div>
      </div>
    </div>
  );
}
