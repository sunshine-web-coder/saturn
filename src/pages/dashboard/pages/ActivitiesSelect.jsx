import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { DatePicker } from "antd";
import moment from "moment";
import style from "./Pages.module.scss";
import {
  activitiesDateData,
  activitiesStatusData,
  activitiesTypeData,
} from "./data";

const ActivitiesSelectDate = () => {
  const [selected, setSelected] = useState(activitiesDateData[0]);

  return (
    <div className={`${style.select_date}`}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`${
              selected.value
                ? "relative max-w-max h-12 cursor-pointer rounded-full bg-white text-[#121661] font-normal border py-2 pl-5 pr-10 text-left sm:text-sm"
                : "relative max-w-max h-12 cursor-pointer rounded-full bg-[#D1F1FF] text-[#121661] font-normal border py-2 pl-5 pr-10 text-left sm:text-sm"
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="">Date:</span>
              <span className="block truncate">{selected.name}</span>
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 min-h-max w-[300px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div className="y-2 pl-10 pr-4 mt-5 mb-3 text-[#515354] text-lg">
                Date
              </div>
              {activitiesDateData.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected
                            ? "font-normal text-lg text-[#0c0c0d]"
                            : "font-normal text-lg text-[#0c0c0d]"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

const ActivitiesSelectType = () => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (newValue) => {
    setSelected(newValue === selected ? null : newValue);
  };

  const handleDeselect = (e) => {
    e.stopPropagation();
    setSelected(null);
  };

  return (
    <div className={`${style.select_date}`}>
      <Listbox value={selected} onChange={handleSelection}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`relative flex items-center justify-between max-w-max h-12 cursor-pointer rounded-full ${
              selected ? "bg-[#D1F1FF]" : "bg-white"
            } text-[#121661] font-normal border py-[13px] pl-5 pr-5 text-left sm:text-sm`}
          >
            <div className="flex items-center gap-1">
              <span className="block truncate">Type:</span>
              <span className="block truncate">
                {selected ? selected.name : ""}{" "}
              </span>
            </div>
            {selected && (
              <button
                className="relative z-10 text-white w-10 h-10 left-4 border bg-[#142C8E] inset-y-0 right-0 flex items-center justify-center p-3 rounded-full"
                onClick={handleDeselect}
              >
                <i className="fa-solid text-lg fa-circle-xmark"></i>
              </button>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 min-h-max w-[300px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div className="y-2 pl-10 pr-4 mt-5 mb-3 text-[#515354] text-lg">
                Type
              </div>
              {activitiesTypeData.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected
                            ? "font-normal text-lg text-[#0c0c0d]"
                            : "font-normal text-lg text-[#0c0c0d]"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

const ActivitiesSelectStatus = () => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (newValue) => {
    setSelected(newValue === selected ? null : newValue);
  };

  const handleDeselect = (e) => {
    e.stopPropagation();
    setSelected(null);
  };

  return (
    <div className={`${style.select_date}`}>
      <Listbox value={selected} onChange={handleSelection}>
        <div className="relative mt-1">
          <Listbox.Button
            className={`relative flex items-center justify-between max-w-max h-12 cursor-pointer rounded-full ${
              selected ? "bg-[#D1F1FF]" : "bg-white"
            } text-[#121661] font-normal border py-[13px] pl-5 pr-5 text-left sm:text-sm`}
          >
            <div className="flex items-center gap-1">
              <span className="block truncate">Status:</span>
              <span className="block truncate">
                {selected ? selected.name : ""}{" "}
              </span>
            </div>
            {selected && (
              <button
                className="relative text-white w-10 h-10 left-4 border bg-[#142C8E] inset-y-0 right-0 flex items-center justify-center p-3 rounded-full"
                onClick={handleDeselect}
              >
                <i className="fa-solid text-lg fa-circle-xmark"></i>
              </button>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 min-h-max w-[300px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              <div className="y-2 pl-10 pr-4 mt-5 mb-3 text-[#515354] text-lg">
                Status
              </div>
              {activitiesStatusData.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected
                            ? "font-normal text-lg text-[#0c0c0d]"
                            : "font-normal text-lg text-[#0c0c0d]"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(moment().subtract(1, "months")); // Calculate one month ago
  const [endDate, setEndDate] = useState(moment()); // Current date

  const onStartDateChange = (date, dateString) => {
    setStartDate(date);
    console.log(date, dateString);
  };

  const onEndDateChange = (date, dateString) => {
    setEndDate(date);
    console.log(date, dateString);
  };

  return (
    <div className="date_picker">
      <div className="text-lg text-[#0c0c0d]">Choose a date range</div>
      <div>
        <div className="mt-4 relative">
          <label
            htmlFor="Start"
            className="absolute text-[#515354] z-10 text-sm left-3 top-1 font-normal"
          >
            Start
          </label>
          <DatePicker
            format="DD-MM-YYYY"
            onChange={onStartDateChange}
            defaultValue={startDate} // Set default start date
          />
        </div>
        <div className="mt-4 relative">
          <label
            htmlFor="End"
            className="absolute text-[#515354] z-10 text-sm left-3 top-1 font-normal"
          >
            End
          </label>
          <DatePicker
            format="DD-MM-YYYY"
            onChange={onEndDateChange}
            defaultValue={endDate} // Set default end date
          />
        </div>
      </div>
    </div>
  );
};

export {
  ActivitiesSelectDate,
  ActivitiesSelectType,
  ActivitiesSelectStatus,
  DateRangePicker,
};
