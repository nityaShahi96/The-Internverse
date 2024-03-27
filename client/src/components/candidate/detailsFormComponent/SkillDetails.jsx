import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function SkillDetails() {
  const skills = [
    {
      label: "Select University",
      value: "",
    },
    {
      label: "Communication",
      value: "communication",
    },
    {
      label: "Leadership",
      value: "leadership",
    },
    {
      label: "Web Development",
      value: "webDevelopment",
    },
    {
      label: "Front End Development",
      value: "frontEndDevelopment",
    },
    {
      label: "UI/UX Design",
      value: "uiUx",
    },
    {
      label: "Graphics Design",
      value: "graphicsDesign",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Skills</h1>
        <p className="text-[#777]">
          Only list relevant skills. Eg: Communication, Computer, Leadership or
          Problem solving.
        </p>
      </div>

      <SelectInput
        label="Skills"
        name="university"
        options={skills.map((uni) => ({
          label: uni.label,
          value: uni.value,
        }))}
      />
    </div>
  );
}
