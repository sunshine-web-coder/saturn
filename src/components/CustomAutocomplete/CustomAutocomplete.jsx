import { useRef, useState } from "react";
import Button from "../button/Button";
import useOutsideClick from "../useOutsideClick";
import { Avatar } from "antd";

function CustomAutocomplete({ options }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [notFoundMessage, setNotFoundMessage] = useState(null); // State for not found message
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Filter the options based on the input value and search across all fields
    const filteredSuggestions = options.filter((option) =>
      Object.values(option).some((field) =>
        field.toLowerCase().includes(value.toLowerCase())
      )
    );
    setSuggestions(filteredSuggestions);

    // Set not found message if no suggestions
    if (filteredSuggestions.length === 0 && value.trim() !== "") {
      setNotFoundMessage(
        `We can't find ${value}. Try entering their mobile number or email.`
      );
    } else {
      setNotFoundMessage(null);
    }
  };

  const handleOptionClick = (option) => {
    setInputValue(option.name); // Set the input value to the selected name
    setSuggestions([]);
    setNotFoundMessage(null);
  };

  useOutsideClick(dropdownRef, () => {
    setSuggestions([]);
    setNotFoundMessage(null);
  });

  return (
    <div className="custom-autocomplete" ref={dropdownRef}>
      <div className="relative">
        <i className="fa-solid top-5 text-[#7a7a7a] left-5 text-xl absolute fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Name, @username, email, or mobile..."
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-500 text-[#7a7a7a] text-xl shadow-sm w-full p-4 pl-14 pr-8 rounded-full"
        />
      </div>

      {notFoundMessage && (
        <div className="shadow-md border-gray-200 border overflow-hidden rounded-lg mt-1 p-5">
          <p className="text-[#2c2e2f]">{notFoundMessage}</p>
        </div>
      )}
      {suggestions.length > 0 && (
        <div className="shadow-md border-gray-200 border overflow-hidden rounded-lg mt-1">
          <div className="p-5 pb-2 pt-2 font-semibold text-lg">
            People on PayPal
          </div>
          {suggestions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="border flex gap-3 hover:bg-[#f1f1f1] transition-all p-5 pb-2 pt-2 cursor-pointer"
            >
              <Avatar size={50} src="https://i.imgur.com/yZghyMc.jpg" />
              <div className="leading-4">
                <p className="font-semibold text-[#222222] text-lg">
                  {option.name}
                </p>
                <small className="text-[#222222]">@{option.username}</small>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 flex justify-start items-start">
        <div className="w-[150px]">
          <Button
            text="Send"
            className={`text-xl pt-2 pb-2 ${
              inputValue === ""
                ? "opacity-[0.4] hover:bg-[#142C8E] text-[#142C8E] border-2 border-[#142C8E]"
                : ""
            }`}
            disabled={inputValue === ""}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomAutocomplete;
