import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Image from 'next/image';

const ProductModal = ({ selectedProduct, selectedId, handleClose }) => {
    const [mainImage, setMainImage] = useState(
        selectedProduct?.images?.[0] || '/path/to/default-image.jpg', // Ajuste de imagen predeterminada
    );

    if (!selectedProduct) {
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
                    <TabList className="flex space-x-4">
                        <Tab
                            className={({ selected }) =>
                                selected
                                    ? 'rounded-bl-lg rounded-br-lg border-b-2 bg-gray-200 px-2 py-1 text-xl font-semibold text-jf-light-green underline'
                                    : 'text-lg text-gray-500'
                            }
                        >
                            Imágenes
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                selected
                                    ? 'rounded-bl-lg rounded-br-lg border-b-2 bg-gray-200 px-2 py-1 text-xl font-semibold text-jf-light-green underline'
                                    : 'text-lg text-gray-500'
                            }
                        >
                            Introduction
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                selected
                                    ? 'rounded-bl-lg rounded-br-lg border-b-2 bg-gray-200 px-2 py-1 text-xl font-semibold text-jf-light-green underline'
                                    : 'text-lg text-gray-500'
                            }
                        >
                            Data Sheet
                        </Tab>
                    </TabList>

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

                                {/* Contenedor de miniaturas */}
                                {selectedProduct.images?.length > 0 && (
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

                        <TabPanel className="p-4">
                            <p className="mb-4 text-lg text-gray-700">
                                {selectedProduct.introduction}
                            </p>
                            <h3 className="text-lg font-semibold text-jf-light-green md:text-xl">
                                Product Features
                            </h3>
                            <ul className="list-inside list-disc space-y-2 text-gray-600">
                                {selectedProduct.features?.map(
                                    (feature, index) => (
                                        <li
                                            key={index}
                                            className="text-base leading-relaxed"
                                        >
                                            {feature}
                                        </li>
                                    ),
                                )}
                            </ul>
                            <h3 className="mt-4 text-lg font-semibold text-jf-light-green md:text-xl">
                                Applications
                            </h3>
                            <ul className="list-inside list-disc space-y-2 text-gray-600">
                                {selectedProduct.applications?.map(
                                    (application, index) => (
                                        <li
                                            key={index}
                                            className="text-base leading-relaxed"
                                        >
                                            {application}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </TabPanel>

                        <TabPanel>
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-left text-lg font-semibold text-jf-light-green md:text-xl">
                                            Property
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-left text-lg font-semibold text-jf-light-green md:text-xl">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(
                                        selectedProduct.dataSheet || {},
                                    ).map(([key, value], index) => (
                                        <tr
                                            key={index}
                                            className="odd:bg-gray-100"
                                        >
                                            <td className="border border-gray-300 px-4 py-2 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1')}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {value || 'N/A'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
};

export default ProductModal;
