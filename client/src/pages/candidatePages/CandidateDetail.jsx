export default function CandidateDetail() {
  return (
    <div className="w-full min-h-screen border broder-black flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4 w-[70%]">
        <div>
          <h1 className="text-xl font-semibold">About yourself</h1>
          <p className="text-[#777]">Please fill your primary form.</p>
        </div>

        <div className="flex justify-start gap-2 text-orange-600">
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              placeholder="Abhishek"
              name="firstName"
              className="px-3 py-2 border rounded w-full outline-none"
            />
          </div>

          <div>
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Sunar"
              name="lastName"
              className="px-3 py-2 border rounded w-full outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className=" flex flex-col">
              <label className="label" htmlFor="firstName">
                Gender
              </label>

              <select className="px-4 py-2 outline-none border rounded">
                <option value="">Enter you gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="gay">Gay</option>
              </select>
            </div>
          </div>

          <div>
            <label className="label" htmlFor="lastName">
              Date Of Birth
            </label>
            <input
              type="date"
              className="px-3 py-2 mt-[px] border rounded w-full outline-none text-[#999]"
            />
          </div>
        </div>

        <div>
          <label className="label" htmlFor="email">
            Designation
          </label>
          <input
            type="email"
            placeholder="Frontend Developer, etc"
            name="email"
            className="px-3 py-2 border rounded w-full outline-none"
          />
        </div>

        <div>
          <label className="label" htmlFor="email">
            About me
          </label>
          <textarea
            placeholder="Frontend Developer, etc"
            name="email"
            className="px-3 py-2 border rounded w-full outline-none h-32"
          />
        </div>

        <div className="flex justify-end">
          <button className="bg-orange-600 text-white py-2 rounded w-[10%]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
