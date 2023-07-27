import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const Carousel = () => {
  const data = [
    {
      id: 1,
      title: "DID YOU KNOW?",

      description:
        "“Our paradise inn is conveniently located within a walkable distance of 5 to 10 minutes from the temple”",
    },
    {
      id: 2,
      title: "DID YOU KNOW?",
      description:
        "Paradise Inn is situated in close proximity to Shiridi Temple, just 1 kilometer away.",
    },
    {
      id: 3,
      title: "DID YOU KNOW?",
      description:
        "Some of the places worth visiting include Shani Shignapur, Old Shiridi, and the Sai Devotional Temple.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
    }

    return () => clearInterval(intervalId as NodeJS.Timeout);
  }, [isPaused, data.length]);
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          borderRadius: "10px",
          border: "1px solid #9F9D9B",
          background:
            "linear-gradient(134deg, rgba(255, 255, 255, 0.83) 0%, rgba(255, 255, 255, 0.85) 99.99%)",
          width: { xs: "100%", md: "615px" },
          height: { xs: "180px", md: "271px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        {data.map((item, slidesIndex) => {
          const { id, title, description } = item;
          return (
            <Box
              key={id}
              sx={{
                position: "absolute",
                top: { xs: "0", md: "1.5em" },
                left: {
                  xs: `${(slidesIndex - activeIndex) * 300}%`,
                  md: `${(slidesIndex - activeIndex) * 200}%`,
                },
                transition: "left 0.2s ease",
                display: "flex",
                flexDirection: "column",
                py: { xs: "1em", md: "2em" },
                px: { xs: "1em", md: "3.5em" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.2em", md: "1.5em" },
                  fontWeight: "600",
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: ".9em", md: "1.2em", fontWeight: "400" },
                  mt: ".8em",
                }}
              >
                {description}
              </Typography>
            </Box>
          );
        })}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "1em", md: "1em" },
          }}
        >
          {data.map((_, index) => (
            <CircleIcon
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                cursor: "pointer",
                fontSize: { xs: "1em", md: "1.2em" },
                color: activeIndex === index ? "primary.main" : "black",
                mt: { xs: "7.5em", md: "10em" },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
