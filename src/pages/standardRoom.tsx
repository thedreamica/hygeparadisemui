import React from "react";
import Image from "next/image";
import { Box, Button, Link, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import StandardCarousel from "@/components/standardRooms/StandardCarousel";
import Navbar from "@/components/navbar/Navbar";
import Copyrights from "@/components/copyRights/Copyrights";

const standardRoom = () => {
  const guestStyles = {
    display: "flex",
    alignItems: "center",
    gap: { xs: "1.2em", md: "1.3em" },
  };
  const iconStyles = { fontSize: { xs: "3em", md: "2.4em" } };
  const guestTypo = {
    fontSize: { xs: "1.2em", md: "1.3em" },
    fontWeight: "500",
  };

  const facilitiesIcon = {
    fontSize: { xs: "1em", md: "1.5em" },
    color: "primary.main",
  };
  const facilitiesTypo = {
    fontSize: { xs: "1em", md: "1em" },
    fontWeight: "400",
  };
  const facilitiesBox = { display: "flex", alignItems: "center", gap: ".8em" };
  const titleStyles = {
    fontSize: { xs: "1em", md: "1.3em" },
    fontWeight: "600",
    mb: ".5em",
  };
  return (
    <Box
      sx={{
        width: "100%",
        MinHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        bgcolor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Image
        src="https://i.postimg.cc/L8KWhFxy/Contact-Bg.png"
        alt=""
        fill={true}
        priority
        style={{ zIndex: -1 }}
      />
      <Navbar />
      <Box
        sx={{
          px: { xs: "1.3em", md: "10em" },
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: ".3em",
            fontSize: { xs: "1.8em", md: "3em" },
            fontWeight: "600",
            color: "white",
            my: { xs: "1em", md: ".5em" },
          }}
        >
          STANDARD Non-AC Room
        </Typography>
        {/* first sec */}
        <StandardCarousel />
        {/* second sec */}
        <Box
          sx={{
            border: "1px solid white",
            borderRadius: ".3em",
            display: "flex",
            justifyContent: { xs: "flex-start", md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            color: "white",
            p: { xs: "2em", md: "1.5em" },
            height: { xs: "auto", md: "6vh" },
            mt: { xs: "3.7em", md: "3.5em" },
            mb: { xs: "2.5em", md: "3em" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "1em", md: "10em" },
            }}
          >
            <Box sx={guestStyles}>
              <AccountCircleOutlinedIcon sx={iconStyles} />
              <Typography sx={guestTypo}>2 Guests</Typography>
            </Box>
            <Box sx={guestStyles}>
              <AccountCircleOutlinedIcon sx={iconStyles} />
              <Typography sx={guestTypo}>2 Guests</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: "1.5em", md: "1.5em" },
              mb: { xs: "0em", md: "1.5em" },
            }}
          >
            <Link href="booking" sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                disableRipple
                sx={{
                  bgcolor: "primary.main",
                  fontSize: { xs: ".9em", md: "1.4em" },
                  fontWeight: "600",
                  px: { xs: "1.1em", md: "2em" },
                  py: { xs: ".3em", md: ".2em" },
                  borderRadius: "1.3em",
                  ":hover": { bgcolor: "primary.main" },
                  textTransform: "uppercase",
                }}
              >
                book now
              </Button>
              <ArrowForwardIcon
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: "2em",
                  fontSize: { xs: "1.4em", md: "1.8em" },
                  p: { xs: ".2em", md: ".3em" },
                  color: "black",
                }}
              />
            </Link>
          </Box>
        </Box>
        {/* third sec */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
            mb: "4em",
            gap: { xs: "1em", md: "3em" },
          }}
        >
          {/*  */}
          <Box>
            <Typography variant="h5" sx={titleStyles}>
              ROOM OVERVIEW
            </Typography>
            <Typography
              sx={{ fontSize: { xs: ".9em", md: "1em" }, lineHeight: "1.8em" }}
            >
              Amet nulla officia duis reprehenderit do labore aute pariatur anim
              consequat ullamco elit in duis incididunt eu officia do voluptate
              anim nulla officia id cillum esse in velit anim dolor enim
              exercitation veniam do deserunt dolor in id dolor culpa
              reprehenderit aute cillum amet sunt mollit incididunt quis qui ut
              enim adipisicing nostrud aliquip esse nostrud duis enim nisi id in
              est ea incididunt pariatur non aute ullamco dolor est duis. ut
              sint magna sint laboris dolore nulla et ut reprehenderit dolore
              consequat magna aliqua dolor in cupidatat ut consequat amet
              eiusmod qui adipisicing deserunt ullamco est mollit mollit tempor
              cillum enim est consectetur pariatur nulla fugiat deserunt dolore
              nisi laboris. pariatur et nisi fugiat dolore cupidatat id
              consectetur aliqua in adipisicing enim in ullamco do id sit nulla
              sint ea ea pariatur adipisicing dolor tempor dolor eiusmod non.
            </Typography>
          </Box>
          {/*  */}
          <Box
            sx={{
              width: { xs: "100%", md: "140%" },
              pr: "5em",
              mt: { xs: "1.5em", md: "0" },
            }}
          >
            <Typography variant="h5" sx={titleStyles}>
              ROOM FACILITIES
            </Typography>
            <Box sx={{ gap: ".7em", display: "grid" }}>
              <Box sx={facilitiesBox}>
                <CheckIcon sx={facilitiesIcon} />
                <Typography sx={facilitiesTypo}>Charging Points</Typography>
              </Box>
              <Box sx={facilitiesBox}>
                <CheckIcon sx={facilitiesIcon} />
                <Typography sx={facilitiesTypo}>Seating Area</Typography>
              </Box>
              <Box sx={facilitiesBox}>
                <CheckIcon sx={facilitiesIcon} />
                <Typography sx={facilitiesTypo}>Mirror</Typography>
              </Box>
              <Box sx={facilitiesBox}>
                <CheckIcon sx={facilitiesIcon} />
                <Typography sx={facilitiesTypo}>Hangers</Typography>
              </Box>
              <Box sx={facilitiesBox}>
                <CheckIcon sx={facilitiesIcon} />
                <Typography sx={facilitiesTypo}>Intercom</Typography>
              </Box>
              <Box sx={facilitiesBox}>
                <CheckIcon sx={facilitiesIcon} />
                <Typography sx={facilitiesTypo}>
                  48" HD TV with more than 60 channels
                </Typography>
              </Box>
              <Box sx={facilitiesBox}>
                <CheckIcon sx={facilitiesIcon} />
                <Typography sx={facilitiesTypo}>
                  Hight quality bed sheets
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Copyrights display="none" />
    </Box>
  );
};

export default standardRoom;
