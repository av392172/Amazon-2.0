import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { motion } from "framer-motion";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5);


    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex flex-col m-5 bg-white p-10 z-30">
            <p className="absolute top-2 right-2 text-sm italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
            </div>
            {hasPrime && <p>Has prime del</p>}
            <p className="text-sm my-2 line-clamp-3">{description}</p>
            <div className="mb-5">
                <Currency quantity={price * 60} currency="INR" />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-sm text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button className="mt-auto button">Add to Basket</button>
        </motion.div>
    );
}

export default Product
