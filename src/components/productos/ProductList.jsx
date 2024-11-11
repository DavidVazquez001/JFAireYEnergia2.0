import { motion } from 'framer-motion';
import Image from 'next/image';

const ProductList = ({
    categories,
    selectedCategory,
    selectedSubcategory,
    handleProductClick,
}) => {
    return (
        <div className="mx-auto p-6 md:w-2/3 md:flex-none">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {selectedCategory &&
                    Object.keys(categories[selectedCategory]).flatMap(
                        (subcategoryName) => {
                            // Filtramos por subcategoría seleccionada si existe
                            if (
                                selectedSubcategory &&
                                selectedSubcategory !== subcategoryName
                            )
                                return [];
                            return categories[selectedCategory][
                                subcategoryName
                            ].map((product) => (
                                <motion.div
                                    layoutId={product._id}
                                    key={product._id}
                                    className="hover:shadow-jf-blue border-jf-blue flex flex-col items-center justify-between rounded-lg border-2 text-center hover:shadow-xl"
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => handleProductClick(product)}
                                >
                                    <div className="flex h-full w-full items-center justify-center py-3">
                                        {' '}
                                        {/* Contenedor de centrado específico para la imagen */}
                                        <Image
                                            src={product.images[0]} // Primera imagen del producto
                                            alt={product.name}
                                            width={150}
                                            height={150}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="bg-jf-blue hover:shadow-jf-blue border-jf-blue w-full rounded-bl-lg rounded-br-lg border p-4 text-white">
                                        <motion.h3 className="text-xl md:text-2xl">
                                            {product.name}
                                        </motion.h3>

                                        <motion.p className="text-lg md:text-xl">
                                            {product.subcategory}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ));
                        },
                    )}
            </div>
        </div>
    );
};

export default ProductList;