import React from "react";

interface ClothingTypeSelectionProps {
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  selectedGender: string;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;
}

const ClothingTypeSelection: React.FC<ClothingTypeSelectionProps> = ({
  selectedType,
  setSelectedType,
  selectedGender,
  setSelectedGender,
}) => {
  return (
    <div className="text-center mb-8">
    {/* Gender Filters */}
    <div className="mb-4 flex flex-wrap justify-center gap-2">
      <button
        onClick={() => setSelectedGender("Men")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedGender === "Men" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Men
      </button>
      <button
        onClick={() => setSelectedGender("Women")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedGender === "Women" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Women
      </button>
      <button
        onClick={() => setSelectedGender("Unisex")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedGender === "Unisex" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Unisex
      </button>
      <button
        onClick={() => setSelectedGender("All")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedGender === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        All Genders
      </button>
    </div>
  
    {/* Clothing Type Filters */}
    <div className="mb-4 flex flex-wrap justify-center gap-2">
      <button
        onClick={() => setSelectedType("All")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedType === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        All Clothing Types
      </button>
      <button
        onClick={() => setSelectedType("Shirt")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedType === "Shirt" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Shirt
      </button>
      <button
        onClick={() => setSelectedType("Pants")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedType === "Pants" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Pants
      </button>
      <button
        onClick={() => setSelectedType("Cap")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedType === "Cap" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Cap
      </button>
      <button
        onClick={() => setSelectedType("Shoes")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedType === "Shoes" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Shoes
      </button>
      <button
        onClick={() => setSelectedType("Jacket")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedType === "Jacket" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Jacket
      </button>
      <button
        onClick={() => setSelectedType("Sweater")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedType === "Sweater" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Sweater
      </button>
      <button
        onClick={() => setSelectedType("Dress")}
        className={`px-6 py-2 font-semibold rounded-lg transition-all ${
          selectedType === "Dress" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        Dress
      </button>
    </div>
  </div>
  
  );
};

export default ClothingTypeSelection;