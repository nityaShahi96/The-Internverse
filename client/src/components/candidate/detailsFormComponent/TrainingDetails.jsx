import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function TrainingDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Training/Certification</h1>
        <p className="text-[#777]">
          Include your training history. Give a brief insight about training or
          certification that you recieved.
        </p>
      </div>

      <TextInput
        label="Training/Certification:"
        placeholder="eg.microsoft office training"
        name="training"
      />

      <DateInput label="Completion Date:" />
      <MessageInput
        label="Description"
        placeholder="Mention briefly what sorts of note worthy task you performed during this training or certification."
      />

      <div>
        <label>Add certificate</label>
        <input type="file" className="w-full border p-2 rounded-sm" />
      </div>
    </div>
  );
}
