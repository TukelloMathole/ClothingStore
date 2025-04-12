// src/components/SubcategoryFilter.tsx
interface Props {
    category: 'Men' | 'Women';
    selected: string;
    onSelect: (subcategory: string) => void;
  }
  
  const subcategoriesMap = {
    Men: ['All', 'T-Shirts', 'Jackets', 'Jeans', 'Shoes'],
    Women: ['All', 'Dresses', 'Tops', 'Skirts', 'Heels'],
  };
  
  const SubcategoryFilter = ({ category, selected, onSelect }: Props) => {
    const subcategories = subcategoriesMap[category];
  
    return (
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {subcategories.map((sub) => (
          <button
            key={sub}
            onClick={() => onSelect(sub)}
            className={`px-3 py-1.5 rounded-full text-sm border transition ${
              selected === sub
                ? category === 'Men' ? 'bg-blue-500 text-white' : 'bg-pink-500 text-white'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {sub}
          </button>
        ))}
      </div>
    );
  };
  
  export default SubcategoryFilter;
  