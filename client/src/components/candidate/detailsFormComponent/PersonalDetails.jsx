import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function PersonalDetails({ onNextClick }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">About yourself</h1>
        <p className="text-[#777]">Please fill your primary form.</p>
      </div>

      <div className="flex justify-start gap-2 text-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>
        <span>Upload Profile Picture</span>
      </div>

      <div className="formCol">
        <TextInput label="First Name" placeholder="Abhishek" name="firstName" />
        <TextInput label="Last Name" placeholder="Sunar" name="lastName" />
      </div>

      <div className="formCol">
        <SelectInput
          label="Gender"
          name="gender"
          options={[
            { label: "Enter your gender", value: "" },
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
            { label: "Gay", value: "gay" },
          ]}
        />

        <DateInput label="Date of Birth" name="dob" />
      </div>

      <TextInput
        label="Designation"
        placeholder="developer"
        name="designation"
      />

      <MessageInput
        label="About Yourself"
        placeholder="Write about yourself"
        name="about"
      />
    </div>
  );
}
