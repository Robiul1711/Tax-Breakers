import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TCommonBannerOne } from "@/Types";
import Title from "./Title";

const CommonBannerOne = ({
  image,
  title,
  description,
  linkText,
  logo,
  className,
  isLoading,
}: TCommonBannerOne) => {
  const MotionTitle = motion(Title);

  return (
    <section
      className={cn(
        `relative w-full section-padding-x h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden ${className}`
      )}
    >
      {/* Background Image */}
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 animate-pulse" />
      ) : (
        <img
          src={image}
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4 text-center">
        <div className="pb-3">{logo}</div>
        <div className="mx-auto w-full text-center">
          {isLoading ? (
            <>
              {/* Title skeleton */}
              <div className="h-8 md:h-10 w-3/4 mx-auto bg-gray-600 rounded-md animate-pulse mb-4"></div>
              {/* Description skeleton */}
              <div className="h-4 md:h-5 w-2/3 mx-auto bg-gray-600 rounded-md animate-pulse mb-6"></div>
              {/* Button skeleton */}
              <div className="h-10 w-40 mx-auto bg-gray-600 rounded-md animate-pulse"></div>
            </>
          ) : (
            <>
              <Title
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeOut",
                }}
                animate={{ opacity: 1 }}
                className="leading-custom"
                level="title56"
                viewport={{ once: true }}
              >
                {title}
              </Title>

              <MotionTitle
                className="mb-5 md:mt-6 md:text-lg !font-normal"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.6 },
                  ease: "easeOut",
                }}
                viewport={{ once: true }}

              >
                {description}
              </MotionTitle>

              {linkText && (
                <motion.button className="px-6 py-2 md:px-12 md:py-3 rounded-md font-semibold transition duration-200 bg-Secondary text-white">
                  {linkText}
                </motion.button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommonBannerOne;
