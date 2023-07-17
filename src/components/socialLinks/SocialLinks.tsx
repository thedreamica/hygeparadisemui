import React from "react";
import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialLinks = () => {
  const socialIcons = {
    fontSize: { xs: "1em", md: "1.6em" },
    mx: ".4em",
    color: "white",
  };
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        position: "absolute",
        left: 0,
        px: "2em",
        zIndex: 1,
        gap: ".6em",
        top: "14em",
      }}
    >
      <Link href="">
        <InstagramIcon sx={socialIcons} />
      </Link>
      <Link href="">
        <TwitterIcon sx={socialIcons} />
      </Link>
      <Link href="">
        <FacebookIcon sx={socialIcons} />
      </Link>
      <Link
        href=""
        underline="none"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "8.5em",
          color: "white",
        }}
      >
        <Typography
          sx={{
            transform: "rotate(90deg)",
            mt: "2.3em",
          }}
        >
          Book Now
        </Typography>
      </Link>
    </Box>
  );
};

export default SocialLinks;
