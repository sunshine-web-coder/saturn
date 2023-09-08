import {
  ActivitiesSelectDate,
  ActivitiesSelectStatus,
  ActivitiesSelectType,
  DateRangePicker,
} from "./ActivitiesSelect";

export default function Activities() {
  return (
    <div className={`w-full pt-[100px] p-4 pb-0 h-[700px]`}>
      <div className="max-w-[900px] mt-10 mx-auto">
        <div className="activities relative">
          <i className="fa-solid top-5 text-[#7a7a7a] left-5 text-xl absolute fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search by name or email"
            className="border border-gray-500 text-[#7a7a7a] text-xl shadow-sm w-full p-4 pl-14 pr-8 rounded-full"
          />
        </div>
        <div className="mt-8">
          <div className="text-lg text-[#0c0c0] mt-4 mb-3">Filter by</div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div>
              <ActivitiesSelectDate />
            </div>
            <div className="hidden sm:block">
              <ActivitiesSelectType />
            </div>
            <div className="hidden sm:block">
              <ActivitiesSelectStatus />
            </div>
            <div className="block sm:hidden">
              <DateRangePicker />
            </div>
          </div>
          <div className="mt-20">
            <div className="text-center">
              <p className="text-2xl font-normal text-[#0c0c0d]">
                No transactions yet.
              </p>
              <p className="text-lg font-normal text-[#0c0c0d]">
                Want to try again with different dates?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
