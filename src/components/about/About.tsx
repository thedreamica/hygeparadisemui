import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const About = () => {
  const paraStyles = {
    fontSize: { xs: ".9em", md: "1.3em" },
    fontWeight: "400",
    my: { xs: ".3em", md: "2em" },
    lineHeight: "2.2em",
  };
  return (
    <Box
      id="About"
      sx={{
        py: { xs: "1.3em", md: "2em" },
        px: { xs: "1.3em", md: "7em" },
        textAlign: { xs: "center", md: "initial" },
        my: { xs: "0", md: "5em" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "1.8em", md: "2.5em" },
          fontWeight: "600",
        }}
      >
        ABOUT US
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          mt: ".5em",
          gap: { xs: "0", md: "7em" },
        }}
      >
        <Box>
          <Box>
            <Typography sx={paraStyles}>
              At THE PARADISE INN HOTEL, we take pride in offering a harmonious
              blend of contemporary design, comfort, and warm hospitality.
              Indulge in a luxurious stay that exceeds your expectations. We are
              located in the charming town of Shirdi, known for its sacred
              significance as a Sai pilgrimage site. Our hotel is a hidden gem,
              offering a tranquil haven for devotees and travelers alike.
            </Typography>
            <Typography sx={paraStyles}>
              Embrace the essence of our unique hotel and create lasting
              memories during your visit to Shirdi. We invite you to have a
              delightful and pleasant stay at THE PARADISE INN HOTEL!
            </Typography>
          </Box>
          <Link
            href=""
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              mt: "1em",
              color: "black",
            }}
          >
            <Button
              variant="contained"
              disableRipple
              sx={{
                fontSize: { xs: "1.1em", md: "1.3em" },
                px: { xs: "1.1em", md: "2em" },
                py: { xs: ".3em", md: ".5em" },
                borderRadius: "1.3em",
                bgcolor: "primary.main",
                ":hover": { bgcolor: "primary.main" },
              }}
            >
              Explore more
            </Button>
            <ArrowForwardIcon
              sx={{
                bgcolor: "primary.main",
                borderRadius: "2em",
                fontSize: { xs: "1.6em", md: "1.8em" },
                p: { xs: ".2em", md: ".4em" },
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", md: "120%" },
            height: { xs: "380px", md: "536px" },
            mt: "2em",
          }}
        >
          <Image
            src="https://i.postimg.cc/J4tn1MVM/Rectangle-233-1.png"
            alt=""
            style={{ objectFit: "fill" }}
            fill={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
