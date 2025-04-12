// src/components/CategoryFilter.tsx
interface Props {
    selected: string;
    onSelect: (category: 'All' | 'Men' | 'Women') => void;
  }
  
  const CategoryFilter = ({ selected, onSelect }: Props) => {
    const categories = ['All', 'Men', 'Women'] as const;
  
    return (
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 py-2 rounded-full border transition ${
              selected === category
                ? 'bg-blue-600 text-white'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryFilter;
  