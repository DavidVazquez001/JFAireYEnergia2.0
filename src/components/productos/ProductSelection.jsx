// src/components/ProductSelection.jsx
'use client';
import { useState, useEffect } from 'react';
import CategoryMenu from './CategoryMenu';
import ProductList from './ProductList';
import ProductModal from './ProductModal';

const ProductSelection = () => {
    const [categories, setCategories] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    useEffect(() => {
        fetch('/api/productos')
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        if (Object.keys(categories).length > 0) {
            const firstCategory = Object.keys(categories)[0];
            setSelectedCategory(firstCategory);
        }
    }, [categories]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setSelectedId(product._id);
    };

    const handleClose = () => {
        setSelectedProduct(null);
        setSelectedId(null);
    };

    return (
        <div className="flex flex-wrap">
            <CategoryMenu
                categories={categories}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                setSelectedCategory={setSelectedCategory}
                setSelectedSubcategory={setSelectedSubcategory}
            />
            <ProductList
                categories={categories}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                handleProductClick={handleProductClick}
            />
            <ProductModal
                selectedProduct={selectedProduct}
                selectedId={selectedId}
                handleClose={handleClose}
            />
        </div>
    );
};

export default ProductSelection;
