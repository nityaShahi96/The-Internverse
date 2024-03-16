import PersonalDetails from "../../components/candidate/detailsFormComponent/PersonalDetails";
import AddressDetails from "../../components/candidate/detailsFormComponent/AddressDetails";
import { useState } from "react";

export default function CandidateDetail() {
  const [currrentStep, setCurrentStep] = useState(0);

  const handleNextClick = () => {
    setCurrentStep(currrentStep + 1);
  };

  console.log(currrentStep);

  const renderComponent = () => {
    switch (currrentStep) {
      case 0:
        return <PersonalDetails onNextClick={handleNextClick} />;
      case 1:
        return <AddressDetails onNextClick={handleNextClick} />;
    }
  };

  return (
    <div className="w-full min-h-screen border broder-black flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4 w-[70%]">
        {renderComponent()}
        <div className="flex justify-end">
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
