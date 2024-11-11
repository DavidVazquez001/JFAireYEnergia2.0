import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const CategoryMenu = ({
    categories,
    selectedCategory,
    selectedSubcategory,
    setSelectedCategory,
    setSelectedSubcategory,
}) => {
    return (
        <aside className="sticky top-[95px] z-20 w-full self-start overflow-y-auto p-6 text-lg md:top-[95px] md:mt-0 md:w-1/3 md:text-xl">
            {Object.keys(categories).map((categoryName) => (
                <Disclosure
                    key={categoryName}
                    defaultOpen={categoryName === selectedCategory}
                >
                    <DisclosureButton
                        onClick={() => {
                            setSelectedCategory(categoryName);
                            setSelectedSubcategory(null); // Restablecemos la subcategoría
                        }}
                        className={`group flex w-full items-center justify-between rounded-lg border p-3 text-xl md:text-2xl ${
                            selectedCategory === categoryName
                                ? 'bg-jf-light-green font-semibold text-white'
                                : ''
                        }`}
                    >
                        {categoryName}
                        <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel
                        transition
                        className="origin-top text-gray-600 transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                    >
                        <div className="flex flex-col items-end space-y-2 pt-2">
                            {Object.keys(categories[categoryName]).map(
                                (subcategoryName) => (
                                    <button
                                        key={subcategoryName}
                                        onClick={() => {
                                            setSelectedSubcategory(
                                                subcategoryName,
                                            );
                                            setSelectedCategory(categoryName); // Aseguramos que se seleccione también la categoría
                                        }}
                                        className={`w-2/3 rounded-lg border bg-white p-2 text-right ${
                                            selectedSubcategory ===
                                            subcategoryName
                                                ? 'border-2 border-jf-light-green font-semibold text-jf-light-green'
                                                : 'border-gray-300'
                                        }`}
                                    >
                                        <h3>{subcategoryName}</h3>
                                    </button>
                                ),
                            )}
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            ))}
        </aside>
    );
};

export default CategoryMenu;
