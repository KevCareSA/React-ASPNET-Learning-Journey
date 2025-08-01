export const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, 
    opacity: 1,
    transition: { 
        staggerChildren: 2,
        duration: 1.2,
        ease: "easeInOut",
    },
  },
};

export const ZoomInVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
        scale: 1,
        opacity: 1,
        transition: {
            staggerChildren: 2,
            duration: 1.0,
            ease: "easeInOut",
        },
    },
};
