import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Image from 'next/image';

const ProductModal = ({ selectedProduct, selectedId, handleClose }) => {
    const [mainImage, setMainImage] = useState(selectedProduct?.images?.[0]);

    useEffect(() => {
        if (selectedProduct?.images?.[0]) {
            setMainImage(selectedProduct.images[0]);
        }
    }, [selectedProduct]);

    if (!selectedProduct || !selectedProduct.images) {
        return <p>No product data available</p>;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-80 p-8 md:p-12">
            <div className="relative h-full w-full overflow-auto rounded-lg bg-white shadow-lg">
                <button
                    onClick={handleClose}
                    className="absolute right-4 top-4 rounded-lg bg-jf-blue px-4 py-2 text-lg text-white hover:brightness-150"
                >
                    Cerrar
                </button>

                <TabGroup className="flex h-full flex-col p-4">
                    <h2 className="flex items-center justify-center rounded-r-lg rounded-t-lg bg-gray-200 p-2 text-xl font-bold text-jf-light-green">
                        {selectedProduct.name}
                    </h2>
                    {/* Aquí puedes insertar los tabs */}

                    <TabPanels className="mt-2 flex h-full flex-grow flex-col">
                        <TabPanel className="flex h-full flex-grow flex-col">
                            <div className="flex h-full flex-col gap-4 pb-2">
                                {/* Imagen Principal */}
                                <div className="relative h-full w-full flex-grow">
                                    {mainImage ? (
                                        <Image
                                            src={mainImage}
                                            alt={selectedProduct.name}
                                            layout="fill"
                                            objectFit="contain"
                                            className="rounded-lg"
                                        />
                                    ) : (
                                        <p className="text-center text-gray-500">
                                            No image available
                                        </p>
                                    )}
                                </div>

                                {/* Miniaturas */}
                                {selectedProduct.images.length > 0 && (
                                    <div className="w-full">
                                        <Swiper
                                            modules={[Pagination]}
                                            spaceBetween={5}
                                            slidesPerView={3}
                                            pagination={{ clickable: true }}
                                            breakpoints={{
                                                640: { slidesPerView: 4 },
                                                1024: { slidesPerView: 6 },
                                            }}
                                            className="h-[100px]"
                                        >
                                            {selectedProduct.images.map(
                                                (image, index) => (
                                                    <SwiperSlide
                                                        key={index}
                                                        className="relative flex h-[100px] w-auto items-center justify-center"
                                                    >
                                                        <Image
                                                            src={image}
                                                            alt={`Miniatura ${index}`}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            onClick={() =>
                                                                setMainImage(
                                                                    image,
                                                                )
                                                            }
                                                            className="cursor-pointer rounded-md"
                                                        />
                                                    </SwiperSlide>
                                                ),
                                            )}
                                        </Swiper>
                                    </div>
                                )}
                            </div>
                        </TabPanel>
                        {/* Otros TabPanels */}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
};

export default ProductModal;
