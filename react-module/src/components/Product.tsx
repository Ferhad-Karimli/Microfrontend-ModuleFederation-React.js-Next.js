import React from 'react';

interface ProductProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function Product(props: ProductProps) {
  const { name, price, image, description } = props;

  return (
    <div className="max-w-md bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <img
        src={image}
        alt={name}
        className="w-full h-auto rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
        width={200}
        height={200}
      />
      <p className="text-gray-600 mt-2">
        Price: <span className="font-semibold text-gray-800">${price}</span>
      </p>
      <p className="text-gray-600 mt-1">{description}</p>
      <button
        className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}