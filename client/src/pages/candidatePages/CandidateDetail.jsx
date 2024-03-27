import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  PersonalDetails,
  AddressDetails,
  EducationDetails,
  SkillDetails,
  TrainingDetails,
  WorkExperienceDetails,
} from "../../components/candidate/detailsFormComponent/index";

export default function CandidateDetail() {
  const [currrentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNextClick = () => {
    setCurrentStep(currrentStep + 1);
  };

  useEffect(() => {
    if (currrentStep === 6) {
      navigate("/candidate");
    }
  }, [currrentStep, navigate]); // Add this useEffect hook

  const renderComponent = () => {
    switch (currrentStep) {
      case 0:
        return <PersonalDetails onNextClick={handleNextClick} />;
      case 1:
        return <AddressDetails onNextClick={handleNextClick} />;
      case 2:
        return <EducationDetails onNextClick={handleNextClick} />;
      case 3:
        return <SkillDetails onNextClick={handleNextClick} />;
      case 4:
        return <TrainingDetails />;
      case 5:
        return <WorkExperienceDetails />;
      case 6:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen border broder-black flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4 w-[70%]">
        {renderComponent()}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => {
              handleNextClick();
            }}
            className="text-blue-600 border w-[10%] border-blue-600 rounded-md transition-all delay-200 ease-in-out hover:bg-blue-700 hover:text-white"
          >
            Skip
          </button>
          <button
            onClick={() => {
              handleNextClick();
            }}
            className="bg-blue-600 hover:bg-blue-700 hover:ease-in-out transition-all delay-200 text-white py-2 rounded w-[10%]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
