import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import FloatingLabelInput from "../../../../component/input/FloatingLabelInput";
import Button from "../../../../component/button/Button";
import {
  QuestionSelectOne,
  QuestionSelectTwo,
} from "./QuestionSelect";

export default function SecurityQuestion() {
  const [answerQuestionOne, setAnswerQuestionOne] = useState("");
  const [answerQuestionTwo, setAnswerQuestionTwo] = useState("");

  const [selectedQuestionOne, setSelectedQuestionOne] = useState(null);
  const [selectedQuestionTwo, setSelectedQuestionTwo] = useState(null);

  const [selectedQuestionOneError, setSelectedQuestionOneError] =
    useState(null);
  const [selectedQuestionTwoError, setSelectedQuestionTwoError] =
    useState(null);

  const [answerQuestionOneError, setAnswerQuestionOneError] = useState("");
  const [answerQuestionTwoError, setAnswerQuestionTwoError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!selectedQuestionOne) {
      errors.selectedQuestionOne = "Please select a question first";
    }

    if (!selectedQuestionTwo) {
      errors.selectedQuestionTwo = "Please select a question first";
    }

    if (selectedQuestionOne && !answerQuestionOne) {
      errors.answerQuestionOne = "Answer is required";
    }

    if (selectedQuestionTwo && !answerQuestionTwo) {
      errors.answerQuestionTwo = "Answer is required";
    }

    setAnswerQuestionOneError(errors.answerQuestionOne || "");
    setAnswerQuestionTwoError(errors.answerQuestionTwo || "");
    setSelectedQuestionOneError(errors.selectedQuestionOne || "");
    setSelectedQuestionTwoError(errors.selectedQuestionTwo || "");

    if (Object.keys(errors).length === 0) {
      navigate(""); // Navigate only if there are no errors
      toast.success(
        <div className="p-4 pt-2 pb-2">
          You&apos;ve successfully set up your security questions.
        </div>
      );
    }
  };

  return (
    <div className="bg-white mx-auto max-w-[900px] p-3 sm:p-5">
      <div className="max-w-[500px] mx-auto">
        <div>
          <Link
            to="/dashboard/profile/security"
            className="w-11 h-11 flex items-center justify-center text-center hover:bg-slate-50 rounded-full"
          >
            <i className="fa-solid text-2xl fa-arrow-left-long"></i>
          </Link>
        </div>
        <div className="mt-10 p-2">
          <div className="text-center text-3xl mb-5">Security Questions</div>
          <div className="text-base text-center text-[#2C2E2F] mb-10">
            We&apos;ll use these questions as a way to make sure it&apos;s your
            account, like if you need to reset your password
          </div>

          <form onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="Security question 1">Security question 1</label>
              <div className="mt-4">
                <QuestionSelectOne
                  setSelectedQuestionOne={setSelectedQuestionOne}
                />
                {selectedQuestionOneError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {selectedQuestionOneError}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <FloatingLabelInput
                  label="Answer"
                  type="text"
                  value={answerQuestionOne}
                  onChange={(e) => setAnswerQuestionOne(e.target.value)}
                />
                {answerQuestionOneError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {answerQuestionOneError}
                  </p>
                )}
              </div>
            </div>

            <div className="relative mt-8">
              <label htmlFor="Security question 2">Security question 2</label>
              <div className="mt-4">
                <QuestionSelectTwo
                  setSelectedQuestionTwo={setSelectedQuestionTwo}
                />
                {selectedQuestionTwoError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {selectedQuestionTwoError}
                  </p>
                )}
              </div>
              <div className="mt-4">
                <FloatingLabelInput
                  label="Answer"
                  type="text"
                  value={answerQuestionTwo}
                  onChange={(e) => setAnswerQuestionTwo(e.target.value)}
                />
                {answerQuestionTwoError && (
                  <p className="text-[#C40B0B] font-medium text-sm mt-1">
                    <i className="fa-solid fa-triangle-exclamation"></i>{" "}
                    {answerQuestionTwoError}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-10 max-w-[300px] mx-auto">
              <Button
                type="submit"
                text="Update"
                className="w-full bg-[#0070BA] hover:bg-[#003C90] pb-3 pt-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
