import React, { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [backgroundFilter, setBackgroundFilter] = useState("");

  // Sample internship categories
  const internshipCategories = [
    {
      title: "Creative writing",
      location: "Kathmandu",
      background: "Engineering",
    },
    { title: "Graphic Design", location: "Pokhara", background: "Design" },
    {
      title: "Data Analysis",
      location: "Biratnagar",
      background: "Data science",
    },
    {
      title: "Software Engineering",
      location: "Lalitpur",
      background: "Engineering",
    },
  ];

  // Filter categories based on search query, location, and background
  const filteredCategories = internshipCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (locationFilter === "" ||
        category.location.toLowerCase() === locationFilter.toLowerCase()) &&
      (backgroundFilter === "" ||
        category.background.toLowerCase() === backgroundFilter.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationFilter = (location) => {
    setLocationFilter(location);
  };

  const handleBackgroundFilter = (background) => {
    setBackgroundFilter(background);
  };

  return (
    <div className="font-sans mt-5">
      <div className="p-10">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Internship in Nepal
        </h1>
        <p className="text-xl mb-8 text-center">
          Find internship of your choice
        </p>
        <div className="flex justify-center">
          <div className="flex border-2 rounded">
            <input
              type="text"
              className="px-4 py-2 w-80 outline-none"
              placeholder="Job titles or keywords"
              value={searchQuery}
              onChange={handleSearch}
            />
            <select
              className="px-4 py-2 outline-none"
              value={locationFilter}
              onChange={(e) => handleLocationFilter(e.target.value)}
            >
              <option value="">Location</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Biratnagar">Biratnagar</option>
              <option value="Lalitpur">Lalitpur</option>
            </select>
            <select
              className="px-4 py-2 outline-none"
              value={backgroundFilter}
              onChange={(e) => handleBackgroundFilter(e.target.value)}
            >
              <option value="">Background</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Data science">Data science</option>
            </select>
            <button className="flex items-center justify-center text-white rounded bg-primary px-4 border-l">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-4">
          Latest Internship on Interverse
        </h2>
        <div className="mb-6 text-center">
          <span className="text-lg">POPULAR CATEGORIES:</span>
          {internshipCategories.map((category) => (
            <button
              key={category.title}
              className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 mx-2 my-2"
              onClick={() => handleBackgroundFilter(category.background)}
            >
              {category.background}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {filteredCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-bold mb-2">{category.title}</h3>
              <p className="text-sm mb-2">Location: {category.location}</p>
              <p className="text-sm mb-2">Background: {category.background}</p>
              <div className="text-xs mb-4 flex flex-col">
                {/* Dummy content for category */}
                <span className="mr-2">🆓 unpaid</span>
                <span>🕒 3 weeks</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 cursor-pointer">
                  view details
                </span>
                <button className="border rounded px-3 py-1 text-xs">
                  Internship
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
