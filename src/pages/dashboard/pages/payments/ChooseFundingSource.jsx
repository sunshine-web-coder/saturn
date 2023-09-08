import { Link } from "react-router-dom";
import Button from "../../../../component/button/Button";

export default function ChooseFundingSource() {
  return (
    <div className="bg-white mx-auto max-w-[900px] p-3 sm:p-5">
      <div className="max-w-[500px] mx-auto">
        <div>
          <Link
            to="/dashboard/profile/payments"
            className="w-11 h-11 flex items-center justify-center text-center hover:bg-slate-50 rounded-full"
          >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </Link>
        </div>
        <div className="mt-10 p-2">
          <div className="text-center text-3xl mb-5">
            Choose your preferred way to pay online
          </div>
          <div className="text-base text-center text-[#2C2E2F] mb-10">
            We’ll use this when you shop online or send money for goods and
            services. You can always choose a different way to pay at checkout.
          </div>
          <div>
            <Link className="text-[#0070ba] text-sm" to="">
              More about payment preferences
            </Link>
          </div>
          <div className="mt-5 mb-5">
            <hr className="border-dashed border-[#afafaf]" />
          </div>

          <div className="flex mb-6">
            <div>
              <input
                checked
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-6 h-6 cursor-pointer text-blue-600 bg-gray-100 border-gray-300"
              />
            </div>
            <label
              htmlFor="default-radio-1"
              className="ml-2 flex gap-3 cursor-pointer text-sm font-medium text-gray-900"
            >
              <div className="w-11">
                <img
                  className="w-7"
                  src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693839255/Saturn/ed0hpdldgbtk7nmbaowk.png"
                  alt=""
                />
              </div>
              <div className="w-full">
                <p className="text-base leading-none mb-2 font-bold">
                  PayPal balance
                </p>
                <p>
                  If you don&apos;t have enough funds in your balance,
                  we&apos;ll ask you to pick one of your other payments methods.
                </p>
              </div>
            </label>
          </div>
          <div className="flex">
            <div>
              <input
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300"
              />
            </div>
            <label
              htmlFor="default-radio-2"
              className="ml-2 flex gap-3 cursor-pointer text-sm font-medium text-gray-900"
            >
              <div className="w-14">
                <img
                  className="w-10"
                  src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693839255/Saturn/ksxrd7panzz6dhintepo.png"
                  alt=""
                />
              </div>
              <div className="w-full">
                <p className="text-base leading-none mb-2 font-bold">
                  MasterCard
                </p>
                <p>Debit ******</p>
              </div>
            </label>
          </div>

          <div className="mt-5 mb-5">
            <hr className="border-dashed border-[#afafaf]" />
          </div>
          <div className="max-w-[300px] mx-auto mt-8">
            <Button text="Confirm" className="p-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
