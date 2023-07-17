import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CircleIcon from "@mui/icons-material/Circle";

const StandardCarousel = () => {
  const sliderRef = useRef<Slider>(null);

  const imageData = [
    {
      id: 1,
      img: "https://i.postimg.cc/zD00K8gL/standard-1.jpg",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/zD00K8gL/standard-1.jpg",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/zD00K8gL/standard-1.jpg",
    },
    {
      id: 4,
      img: "https://i.postimg.cc/zD00K8gL/standard-1.jpg",
    },
    {
      id: 5,
      img: "https://i.postimg.cc/zD00K8gL/standard-1.jpg",
    },
    {
      id: 6,
      img: "https://i.postimg.cc/zD00K8gL/standard-1.jpg",
    },
  ];

  const arrowStyles = {
    fontSize: { xs: "2em", md: "2.7em" },
    color: "black",
    position: "absolute",
    zIndex: 1,
    cursor: "pointer",
    top: "3.5em",
    bottom: 0,
  };

  const NextArrow = (props: any) => {
    const { style, onClick } = props;
    return (
      <Box style={{ ...style }} onClick={onClick}>
        <ArrowForwardIosOutlinedIcon sx={{ ...arrowStyles, right: "0em" }} />
      </Box>
    );
  };

  const PrevArrow = (props: any) => {
    const { style, onClick } = props;
    return (
      <Box style={{ ...style }} onClick={onClick}>
        <ArrowBackIosNewOutlinedIcon sx={{ ...arrowStyles, left: "0em" }} />
      </Box>
    );
  };

  const appendDots = (dots: any) => (
    <Box>
      {dots.map((dot: any, index: number) => (
        <Typography
          key={index}
          sx={{
            display: "inline-block",
            margin: "0 .6em",
            padding: "0",
            color: "#fff",
          }}
          onClick={() => {
            if (sliderRef.current) {
              sliderRef.current.slickGoTo(index);
            }
          }}
        >
          <CircleIcon
            sx={{
              fontSize: ".6em",
              color: dot.props.className.includes("slick-active")
                ? "primary.main"
                : "white",
              cursor: "pointer",
            }}
          />
        </Typography>
      ))}
    </Box>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots,
  };

  return (
    <Box>
      <Slider ref={sliderRef} {...settings}>
        {imageData.map((item) => (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "230px", md: "330px" },
            }}
            key={item.id}
          >
            <Image src={item.img} alt="" fill={true} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default StandardCarousel;
