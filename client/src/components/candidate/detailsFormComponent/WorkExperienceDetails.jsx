import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function WorkExperienceDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Work Experience</h1>
        <p className="text-[#777]">
          Include your training history. Give a brief insight about training or
          certification that you recieved.
        </p>
      </div>
      <TextInput
        label="Designation:"
        placeholder="eg. Software Engineer"
        name="designation"
      />
      <TextInput
        label="Company Name:"
        placeholder="eg. Brand builder"
        name="companyName"
      />
      <div className="formCol">
        <DateInput label="Start Date:" name="startDate" />
        <DateInput label="End Date:" name="endDate" />
      </div>

      <MessageInput
        label="Description"
        placeholder="Description of work done."
        name="description"
      />
    </div>
  );
}
