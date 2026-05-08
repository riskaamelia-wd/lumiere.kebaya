import React, { useState } from "react";
import { motion } from "framer-motion";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const [didError, setDidError] = useState(false);
  const [didLoad, setDidLoad] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const handleLoad = () => {
    setDidLoad(true);
  };

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <motion.div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      style={style}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          {...rest}
          data-original-url={src}
        />
      </div>
    </motion.div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: didLoad ? 1 : 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        {...rest}
        onError={handleError}
        onLoad={handleLoad}
      />
    </motion.div>
  );
}
