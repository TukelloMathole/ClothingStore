import React from "react";

interface GenderSelectionProps {
  selectedGender: string;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ selectedGender, setSelectedGender }) => {
  return (
    <div className="text-center mb-8">
      <button
        onClick={() => setSelectedGender("Men")}
        className={`px-6 py-2 mx-2 font-semibold rounded-lg transition-all ${
          selectedGender === "Men" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Men
      </button>
      <button
        onClick={() => setSelectedGender("Women")}
        className={`px-6 py-2 mx-2 font-semibold rounded-lg transition-all ${
          selectedGender === "Women" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Women
      </button>
      <button
        onClick={() => setSelectedGender("All")}
        className={`px-6 py-2 mx-2 font-semibold rounded-lg transition-all ${
          selectedGender === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        All
      </button>
    </div>
  );
};

export default GenderSelection;
