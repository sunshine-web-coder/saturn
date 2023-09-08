import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { questionOne, questionTwo } from "../../../../data/questions";

const QuestionSelectOne = ({ setSelectedQuestionOne }) => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (value) => {
    setSelected(value);
    setSelectedQuestionOne(value);
  };

  return (
    <div className={``}>
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative mt-1 z-[100]">
          <Listbox.Button className="relative w-full border-neutral-500 h-[50px] border cursor-pointer rounded-lg bg-transparent py-2 pl-3 pr-10 text-left shadow-md sm:text-sm">
            <div>
              <span className="block truncate mt-1 text-sm">
                {selected ? selected.question : "Select a question"}
              </span>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <i className="fa-solid w-5 text-gray-400 fa-chevron-down"></i>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {questionOne.map((person, personIdx) => (
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
                        className={`block text-sm truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.question}
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

const QuestionSelectTwo = ({ setSelectedQuestionTwo }) => {
    const [selected, setSelected] = useState(null);
  
    const handleSelect = (value) => {
      setSelected(value);
      setSelectedQuestionTwo(value);
    };
  
    return (
      <div className={``}>
        <Listbox value={selected} onChange={handleSelect}>
          <div className="relative mt-1 z-50">
            <Listbox.Button className="relative border-neutral-500 h-[50px] w-full border cursor-pointer rounded-lg bg-transparent py-2 pl-3 pr-10 text-left shadow-md sm:text-sm">
              <div>
                <span className="block truncate mt-1 text-sm">
                  {selected ? selected.question : "Select a question"}
                </span>
              </div>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <i className="fa-solid w-5 text-gray-400 fa-chevron-down"></i>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm
              `}>
                {questionTwo.map((person, personIdx) => (
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
                          className={`block text-sm truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.question}
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

export { QuestionSelectOne, QuestionSelectTwo };
