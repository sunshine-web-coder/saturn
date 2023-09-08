import { Link } from "react-router-dom";
import { notification } from "../../../data/notification";

export default function TabNotificationContent() {
  return (
    <div>
      {notification.length === 0 ? (
        <div className="mt-4 p-5 pt-0 pb-0">
          <div className="border bg-white rounded-md p-2 pt-5 pb-5">
            <div className="pl-5 pr-5">
              <p>Messages</p>
              <p className="text-sm mt-1">You have no new messages.</p>
            </div>
            {/* <div className="mt-3 mb-3">
              <hr />
            </div> */}
          </div>
        </div>
      ) : (
        <>
          {notification.map((group, index) => (
            <div key={index} className="notification-group">
              <div className="py-2 px-4 bg-white text-lg font-semibold text-gray-600">
                {group.date}
              </div>
              {group.children.map((notify, itemIndex) => (
                <div key={itemIndex} className="bg-[#F5F7FA] py-4 px-4">
                  <div className="flex gap-3">
                    <div className="w-[46px] h-[40px] bg-white rounded-full border overflow-hidden">
                      <img className="w-full" src={notify.avatar} alt="logo" />
                    </div>
                    <div className="w-full pr-2">
                      <div className="font-semibold mb-1 text-[#2c2e2f] text-base">
                        Changes to your account
                      </div>
                      <div className="text-sm">
                        From September 11, 2023, updated Payment Receiving
                        Preferences may impact the currencies that you can
                        receive payments in. Please review your preference to
                        continue with normal operation of your account.
                      </div>
                      <div className="mt-3">
                        <Link
                          to={notify.slug}
                          className="border border-[#0070BA] text-[#0070BA] block w-full text-center text-sm p-2 rounded-full pt-1 pb-1"
                        >
                          {notify.slugText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
