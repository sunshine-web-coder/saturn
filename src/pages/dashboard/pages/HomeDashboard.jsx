import { Dropdown } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const items = [
  {
    label: (
      <Link className="text-lg" to="">
        Go to cards
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className="text-lg" to="">
        Get help
      </Link>
    ),
    key: "1",
  },
];

export default function HomeDashboard() {
  return (
    <div
      className={`w-full pt-[80px] p-4 pb-0 bg-[#faf8f5] h-full`}
    >
      <div className="max-w-[1150px] pb-11 h-full flex flex-col md:flex-row mx-auto">
        <div className="p-2 md:p-7 pb-10 md:pb-32 pt-10 w-full md:w-[60%]">
          <div className="mb-3">
            <Link to="">
              <div className="border flex items-center gap-3 p-5 rounded-xl bg-white shadow-sm">
                <img src="https://i.imgur.com/3sbdF7s.png" alt="" />
                <div>
                  <p>Confirm your mobile phone</p>
                  <p>Make it easier to recover your password</p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div className="border flex items-center gap-3 p-5 rounded-xl bg-white shadow-sm">
                <img src="https://i.imgur.com/KctJNeY.png" alt="" />
                <div>
                  <p>Get the PayPal app</p>
                  <p>Start doing more with PayPal.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                600: {
                  slidesPerView: 1,
                },
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={`h-full pb-10`}
            >
              <SwiperSlide className={`text-white p-6 pt-1 bg-[#1040C1] min-h-[400px] border shadow-sm rounded-2xl`}>
                  <div className="max-w-[300px] sm:max-w-[500px] mx-auto flex flex-col justify-between">
                    <div className="mb-5"><img src="https://i.imgur.com/Q6Hbs9H.png" alt="" /></div>
                    <div className="text-3xl mb-2">Pay someone</div>
                    <div className="text-lg">Pay for things that you bought or a service you received.</div>
                    <Link to="/dashboard/transfer">
                      <div className="mt-5 p-4 pb-3 pt-3 text-center bg-white text-[#003087] font-bold rounded-full border">Send Payments</div>
                    </Link>
                  </div>
              </SwiperSlide>
              <SwiperSlide className={`text-white p-6 pt-1 bg-[#121661] min-h-[400px] border shadow-sm rounded-2xl`}>
                  <div className="max-w-[500px] mx-auto flex flex-col justify-between">
                    <div className="mb-5"><img src="https://i.imgur.com/livcT1c.png" alt="" /></div>
                    <div className="text-3xl mb-2">Get paid</div>
                    <div className="text-lg">Get paid for selling something or for the work you did.</div>
                    <Link to="/">
                      <div className="mt-5 p-4 pb-3 pt-3 text-center bg-white text-[#003087] font-bold rounded-full border">Request Money</div>
                    </Link>
                  </div>
              </SwiperSlide>
              <SwiperSlide className={`text-white p-6 pt-1 bg-[#761AD3] min-h-[400px] border shadow-sm rounded-2xl`}>
                  <div className="max-w-[500px] mx-auto flex flex-col justify-between">
                    <div className="mb-5"><img src="https://i.imgur.com/Q6Hbs9H.png" alt="" /></div>
                    <div className="text-3xl mb-2">Add a card to shop the world</div>
                    <div className="text-lg">Buy with confidence with your card info secure.</div>
                    <Link to="/">
                      <div className="mt-5 p-4 pb-3 pt-3 text-center bg-white text-[#003087] font-bold rounded-full border">Add to you Wallet</div>
                    </Link>
                  </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mt-8 text-[#0c0c0d] text-lg p-5 rounded-xl bg-white shadow-sm">
            <p className="mb-4 font-semibold">Recent activity</p>
            <p>See when money comes in, and when it goes out. You’ll find your recent PayPal activity here.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl md:rounded-none w-full md:w-[40%] pt-5 md:pt-10 p-7">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Card</h2>
            <Dropdown
              menu={{ items }}
              placement="bottomRight"
              trigger={["click"]}
              overlayClassName="dBallance"
            >
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                className="hover:bg-slate-200 active:bg-slate-200 transition-all text-lg text-[#2c2e2f] w-9 h-9 rounded-full"
              >
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </Dropdown>
          </div>
          <div className="mt-2 md:mt-5">
            <div className="flex items-start md:items-center gap-3">
              <img src="https://i.imgur.com/ffvs1TS.png" alt="" />
              <p className="text-lg max-w-[500px] md:w-full">
                Shop and send payments more securely. Link your credit card now.
              </p>
              <br />
            </div>
            <div className="mt-2 md:mt-5">
              <Link
                to="/dashboard/link_your_card"
                className="font-semibold text-lg text-[#0070e0] hover:underline"
              >
                Link a card
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
