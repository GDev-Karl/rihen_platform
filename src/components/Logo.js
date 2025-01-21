import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  // Tableau des images
  const images = [
    "/images/Logos/Rihen_black.png",
    "/images/Logos/Rihen_blue_white.png",
    "/images/Logos/Rihen_blue.png",
    "/images/Logos/Rihen_white_black.png",
    "/images/Logos/Rihen_white_blue.png",
    "/images/Logos/Rihen_white.png",
  ];

  // État pour suivre l'image actuelle
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Changer l'image toutes les 1 seconde
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval); // Nettoyer l'intervalle
  }, [images.length]);

  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-transparent flex items-center justify-center rounded-full border border-solid border-transparent overflow-hidden"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        whileHover={{ scale: 1.5 }}
      ></MotionLink>
    </div>
  );
};

export default Logo;
