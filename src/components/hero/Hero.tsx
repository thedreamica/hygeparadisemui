import React, { useEffect, useState } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import heroData from "./heroData";
import Navbar from "../navbar/Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircleIcon from "@mui/icons-material/Circle";
import Facilities from "./Facilities";
import SocialLinks from "../socialLinks/SocialLinks";

const Hero = () => {
  // content for the third facilities
  // choose room btn or explore more?
  // book now is just a typo or btn?
  // for mobile version the carousels images doesnt look good whats the solution for this object fit or changing image according to the breakpoints
  const arrowStyles = {
    fontSize: { xs: "1.8em", md: "2.1em" },
    cursor: "pointer",
  };
  const pauseStyles = {
    fontSize: { xs: "1.8em", md: "2.2em" },
    cursor: "pointer",
    color: "primary.main",
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setActiveIndex((value) => (value === 0 ? heroData.length - 1 : value - 1));
  };

  const handleNext = () => {
    setActiveIndex((value) => (value === heroData.length - 1 ? 0 : value + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePause = () => {
    setIsPaused((val) => !val);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => clearInterval(intervalId as NodeJS.Timeout);
  }, [isPaused]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            zIndex: 2,
            position: { xs: "initial", md: "relative" },
          }}
        >
          <Navbar />
        </Box>
        {/* mapping contents */}
        {heroData.map((item, slidesIndex) => {
          const { id, img, title, facilities } = item;
          return (
            <Box
              key={id}
              sx={{
                position: "absolute",
                width: "100%",
                height: { xs: "100vh", md: "100vh" },
                top: "0",
                left: `${(slidesIndex - activeIndex) * 100}%`,
                transition: "left 0.5s ease",
                color: "white",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: { xs: "12em", md: "4.5em" },
                pt: { xs: "0", md: "2em" },
                bgcolor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* carousel-Images */}
              <Box>
                <Image
                  src={img}
                  alt=""
                  fill={true}
                  style={{ zIndex: -1, objectFit: "fill" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  px: { xs: "1em", md: "2em" },
                }}
              >
                <SocialLinks />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: "1em", md: "2em" },
                    mx: "auto",
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: "2.5em", md: "6em" },
                      fontWeight: "600",
                      letterSpacing: ".2em",
                    }}
                  >
                    {title}
                  </Typography>
                  <Box>
                    <Link
                      href="roomType"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          px: { xs: "1em", md: "2em" },
                          py: ".5em",
                          fontSize: { xs: "1em", md: "1.3em" },
                          borderRadius: "1.5em",
                          bgcolor: "white !important",
                        }}
                      >
                        Choose Room
                      </Button>
                      <ArrowForwardIcon
                        sx={{
                          fontSize: { xs: "1.7em", md: "2.3em" },
                          bgcolor: "white",
                          borderRadius: "2em",
                          fontWeight: "600",
                          color: "black",
                          p: ".2em",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
              {/* dots */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: { xs: "1.3em", md: "2em" },
                }}
              >
                {/* pause */}
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: ".5em" }}
                >
                  {isPaused ? (
                    <PlayArrowIcon onClick={handlePause} sx={pauseStyles} />
                  ) : (
                    <PauseIcon onClick={handlePause} sx={pauseStyles} />
                  )}
                  <Typography
                    sx={{
                      fontSize: { xs: "1em", md: "1.2em" },
                    }}
                  >
                    {`${activeIndex + 1} / ${heroData.length}`}
                  </Typography>
                </Box>
                {/* dot */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: "2em", md: "3.5em" },
                  }}
                >
                  {heroData.map((_, index) => (
                    <CircleIcon
                      key={index}
                      onClick={() => handleDotClick(index)}
                      sx={{
                        cursor: "pointer",
                        fontSize: { xs: "1em", md: "1.5em" },
                        color: activeIndex === index ? "primary.main" : "white",
                      }}
                    />
                  ))}
                </Box>
                {/* arrows */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
                  <ArrowBackIcon sx={arrowStyles} onClick={handlePrev} />
                  <ArrowForwardIcon sx={arrowStyles} onClick={handleNext} />
                </Box>
              </Box>
              {/*desktop facilities */}
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <Facilities facilities={facilities} />
              </Box>
            </Box>
          );
        })}
        {/* end */}
      </Box>
      {/*mobile facilities */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: { xs: "75vh", md: "0" },
        }}
      >
        {heroData.map((item, slidesIndex) => {
          const { id, facilities } = item;
          return (
            <Box
              key={id}
              sx={{
                display: { xs: "block", md: "none" },
                position: "absolute",
                top: "0",
                left: `${(slidesIndex - activeIndex) * 100}%`,
                color: "white",
                zIndex: -1,
              }}
            >
              <Facilities facilities={facilities} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Hero;
