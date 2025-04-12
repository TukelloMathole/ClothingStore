import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const initialImages = [
  { src: "/picture1.jpg", alt: "Pic 1", id: 1 },
  { src: "/picture2.jpg", alt: "Pic 2", id: 2 },
  { src: "/picture3.jpg", alt: "Pic 3", id: 3 },
  { src: "/picture4.jpg", alt: "Pic 4", id: 4 },
  { src: "/picture5.jpg", alt: "Pic 5", id: 5 },
  { src: "/picture6.jpg", alt: "Pic 6", id: 6 },
  { src: "/picture7.jpg", alt: "Pic 7", id: 7 },
  { src: "/picture8.jpg", alt: "Pic 8", id: 8 },
];

export default function PhotoCollage() {
  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => {
        let newImages = [...prevImages];

        // Pick 3 random indices to swap
        const indices = new Set<number>();
        while (indices.size < 3) {
          indices.add(Math.floor(Math.random() * newImages.length));
        }
        const indexArray = Array.from(indices) as number[];

        // Shuffle the selected indices
        const temp = newImages[indexArray[0]];
        newImages[indexArray[0]] = newImages[indexArray[1]];
        newImages[indexArray[1]] = newImages[indexArray[2]];
        newImages[indexArray[2]] = temp;

        return [...newImages];
      });
    }, 10000); // Swaps every 40 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 w-full max-w-3xl mx-auto">
      {images.map((image) => (
        <motion.div
          key={image.id}
          layout // Enables smooth reordering animation
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={150}
            height={150}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
