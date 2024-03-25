import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function EducationDetails() {
  const uni = [
    {
      label: "Select University",
      value: "",
    },
    {
      label: "Tribhuvan University",
      value: "Tribhuvan University",
    },
    {
      label: "Kathmandu University",
      value: "Kathmandu University",
    },
    {
      label: "Purbanchal University",
      value: "Purbanchal University",
    },
    {
      label: "Pokhara University",
      value: "Pokhara University",
    },
    {
      label: "Nepal Open University",
      value: "Nepal Open University",
    },
    {
      label: "Lumbini Bouddha University",
      value: "Lumbini Bouddha University",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Education</h1>
        <p className="text-[#777]">Please fill your education form.</p>
      </div>

      <SelectInput
        label="University"
        name="university"
        options={uni.map((uni) => ({
          label: uni.label,
          value: uni.value,
        }))}
      />

      <div className="formCol">
        <TextInput label="Degree" placeholder="" name="school" />
        <TextInput label="City" placeholder="Kathmandu" name="city" />
      </div>

      <div className="formCol">
        <DateInput label="Start Date" name="startDate" />
        <DateInput label="End Date" name="endDate" />
      </div>

      <SelectInput
        label="Status"
        name="status"
        options={[
          { label: "Your status", value: "" },
          { label: "Graduated", value: "graduated" },
          { label: "Non-Graduated", value: "nonGraduated" },
        ]}
      />
    </div>
  );
}
