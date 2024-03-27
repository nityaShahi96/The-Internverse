import {
  TextInput,
  SelectInput,
  MessageInput,
  DateInput,
} from "../../formComponent/index";

export default function AddressDetails({ onNextClick }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-semibold">Address</h1>
        <p className="text-[#777]">Please fill your address form.</p>
      </div>

      <div className="formCol">
        <TextInput label="Province" placeholder="Province 3" name="province" />
        <TextInput label="City" placeholder="Kathmandu" name="city" />
      </div>

      <TextInput label="Zip Code" placeholder="44600" name="zipCode" />
      <TextInput
        label="Permanent Address"
        placeholder="Pokhara"
        name="permanentAddress"
      />
    </div>
  );
}
