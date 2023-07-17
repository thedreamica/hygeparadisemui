import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Places = () => {
  const placesData = [
    {
      id: 1,
      img: "https://i.postimg.cc/xd9jt4nF/place1.png",
      title: "Shani Shingnapur",
      desc: "Explore the mystical village with its famous temple dedicated to Lord Shani, known for its unique open-air shrine.",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/C1QFMMDW/place2.png",
      title: "Dixit Wada Museum",
      desc: "Step back in time at this fascinating museum showcasing artifacts and insights into the rich history of Shirdi.",
    },

    {
      id: 3,
      img: "https://i.postimg.cc/JnnrWHyN/place3.png",
      title: "House of Laxmibai Shinde",
      desc: "Visit the ancestral home of the legendary freedom fighter, Laxmibai Shinde, and learn about her remarkable life.",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/Dz5vDPzf/place4.png",
      title: "Abdul Baba Cottage",
      desc: "Experience serenity at the tranquil Abdul Baba Cottage, a sacred site where the devoted disciple resided during Sai’s time.",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/Y0Ltvczj/place5.png",
      title: "Shri Tatya Kote Samadhi",
      desc: "Pay homage to Tatya Kote, one of Sai Baba's closest devotees, at his final resting place, a serene & divine samadhi.",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/K4XxL90f/place6.png",
      title: "Shri Heritage Village",
      desc: "Immerse yourself in the charm of the Heritage Village, where you can witness the traditional lifestyle, and cultural heritage.",
    },
  ];
  const arrowStyles = {
    fontSize: { xs: "2.3em", md: "3em" },
    color: "black",
    position: "absolute",
    zIndex: 1,
    cursor: "pointer",
    top: { xs: "-1em", md: "3.5em" },
    bottom: 0,
  };
  const NextArrow = (props: any) => {
    const { style, onClick } = props;
    return (
      <Box style={{ ...style }} onClick={onClick}>
        <ArrowForwardIcon
          sx={{ ...arrowStyles, right: { xs: "3em", md: "-1.5em" } }}
        />
      </Box>
    );
  };
  const PrevArrow = (props: any) => {
    const { style, onClick } = props;
    return (
      <Box style={{ ...style }} onClick={onClick}>
        <ArrowBackIcon
          sx={{ ...arrowStyles, left: { xs: "3em", md: "-1.5em" } }}
        />
      </Box>
    );
  };
  var settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    // autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box
      sx={{
        px: { xs: "1.3em", md: "7em" },
        py: { xs: "2em", md: "0" },
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.8em", md: "2.5em" },
          textAlign: { xs: "center", md: "left" },
          fontWeight: "600",
          mb: { xs: "1.7em", md: ".8em" },
        }}
      >
        PLACES TO VISIT
      </Typography>
      <Slider {...settings}>
        {placesData.map((item) => {
          return (
            <Box key={item.id} sx={{ mt: { xs: "1.3em", md: 0 } }}>
              <Box
                sx={{
                  width: { xs: "100%", md: "100%" },
                  height: { xs: "350px", md: "450px" },
                  position: "relative",
                }}
              >
                <Image src={item.img} alt={item.title} fill={true} />
              </Box>
              <Box
                sx={{
                  mt: "1em",
                  width: { xs: "auto", md: "25em" },
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.2em", md: "1.4em" },
                    fontWeight: "600",
                    mb: ".5em",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: ".9em", md: "1em" },
                    fontWeight: "400",
                    mb: { xs: "0em", md: "3em" },
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default Places;
