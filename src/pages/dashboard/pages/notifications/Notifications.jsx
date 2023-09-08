import { useState } from "react";

export default function Notifications() {
  const [isRequestChecked, setIsRequestChecked] = useState(true);
  const [isProblemChecked, setIsProblemChecked] = useState(true);
  const [isReceivedChecked, setIsReceivedChecked] = useState(true);
  const [isChatChecked, setIsChatChecked] = useState(true);

  
  const handleRequestCheckboxChange = () => {
    setIsRequestChecked(!isRequestChecked);
  };
  const handleProblemCheckboxChange = () => {
    setIsProblemChecked(!isProblemChecked);
  };
  const handleReceivedCheckboxChange = () => {
    setIsReceivedChecked(!isReceivedChecked);
  };
  const handleChatCheckboxChange = () => {
    setIsChatChecked(!isChatChecked);
  };

  return (
    <div className="mx-auto max-w-[700px] p-5 pt-10">
      <div>
        <div className="mb-10">
          <div className="max-w-[100px] mx-auto">
            <img
              src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693839936/Saturn/s0ymaemncgk6ebkuwuok.svg"
              alt=""
            />
          </div>
          <div className="max-w-[200px] text-center text-4xl mb-5 font-semibold mx-auto">
            Notifications
          </div>
          <div className="text-center">
            Choose how you want to get updates about your payments, low balance,
            and relevant marketing updates.
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="border mb-2 md:mb-6 flex w-full p-5 rounded-xl hover:shadow-md transition-all bg-white">
            <div className="flex gap-3">
              <div>
                <i className="fa-solid text-3xl text-[#142c8e] fa-envelope"></i>
              </div>
              <div className="text-left max-w-[550px]">
                <p className="text-sm text-[#545D68]">Email</p>
                <p className="text-lg text-[#001435] max-w-[500px]">
                  testemail@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="border mb-6 flex w-full p-5 rounded-xl hover:shadow-md transition-all bg-white">
            <div className="flex gap-3">
              <div>
                <i className="fa-solid text-3xl text-[#142c8e] fa-phone"></i>
              </div>
              <div className="text-left max-w-[550px]">
                <p className="text-sm text-[#545D68]">Phone</p>
                <p className="text-lg text-[#001435] max-w-[500px]">
                  08087556094
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-2xl text-[#001435] mb-3 font-normal">
            Payments
          </div>

          <div className="text-lg mb-5 text-[#001435]">
            We’ll let you know when you
          </div>

          <div className="border text-[#001435] text-lg mb-3 flex w-full justify-between items-center p-5 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer">
            <div className="">
              <div className="mb-3">Pay another PayPal user</div>
              <div className="flex items-center gap-5">
                <div className="text-[#000000]">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>Email</div>
              </div>
            </div>
          </div>

          <div className="border text-[#001435] text-lg mb-3 flex w-full justify-between items-center p-5 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer">
            <div className="">
              <div className="mb-3">Request a payment</div>
              <div className="flex items-center gap-5">
                <div className="notification_checkbox">
                  <input
                    id="requestCheckbox"
                    type="checkbox"
                    checked={isRequestChecked}
                    onChange={handleRequestCheckboxChange}
                  />
                  <label htmlFor="requestCheckbox" className="check-trail">
                    <span className="check-handler"></span>
                  </label>
                </div>
                <div>Email</div>
              </div>
            </div>
          </div>

          <div className="border text-[#001435] text-lg mb-3 flex w-full justify-between items-center p-5 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer">
            <div className="">
              <div className="mb-3">Have a problem with a payment</div>
              <div className="flex items-center gap-5">
                <div className="notification_checkbox">
                  <input
                    id="problemCheckbox"
                    type="checkbox"
                    checked={isProblemChecked} // Use the state value here
                    onChange={handleProblemCheckboxChange}
                  />
                  <label htmlFor="problemCheckbox" className="check-trail">
                    <span className="check-handler"></span>
                  </label>
                </div>
                <div>Email</div>
              </div>
            </div>
          </div>

          <div className="border text-[#001435] text-lg mb-3 flex w-full justify-between items-center p-5 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer">
            <div className="">
              <div className="mb-3">Receive a payment</div>
              <div className="flex items-center gap-5">
                <div className="notification_checkbox">
                  <input
                    id="receiveCheckbox"
                    type="checkbox"
                    checked={isReceivedChecked}
                    onChange={handleReceivedCheckboxChange}
                  />
                  <label htmlFor="receiveCheckbox" className="check-trail">
                    <span className="check-handler"></span>
                  </label>
                </div>
                <div>Email</div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-20">
          <div className="text-2xl text-[#001435] mb-3 font-normal">
          Social
          </div>

          <div className="border text-[#001435] text-lg mb-3 flex w-full justify-between items-center p-5 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer">
            <div className="">
              <div className="mb-3">
                <p className="mb-1">Chat</p>
                <p className="text-sm">We&apos;ll let you know when you get new messages</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="notification_checkbox">
                  <input
                    id="chatCheckbox"
                    type="checkbox"
                    checked={isChatChecked}
                    onChange={handleChatCheckboxChange}
                  />
                  <label htmlFor="chatCheckbox" className="check-trail">
                    <span className="check-handler"></span>
                  </label>
                </div>
                <div>Email</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
