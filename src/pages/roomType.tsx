import React from "react";
import Image from "next/image";
import { Box, Link, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Navbar from "@/components/navbar/Navbar";
import Copyrights from "@/components/copyRights/Copyrights";
import SocialLinks from "@/components/socialLinks/SocialLinks";

const roomType = () => {
  // description contents are reapted(dummy ones).
  const imageStyles = {
    position: "relative",
    width: { xs: "100%", md: "650px" },
    height: { xs: "250px", md: "350px" },
    color: "white",
  };
  const shawdowBox = {
    position: "absolute",
    bottom: { xs: "-10.5em", md: "-10.5em" },
    bgcolor: "rgba(0, 0, 0, 0.5)",
    px: { xs: "1em", md: "2em" },
    pt: ".8em",
    pb: { xs: "3em", md: "4em" },
    borderRadius: "0 0 1em 1em",
    textAlign: { xs: "center", md: "left" },
  };
  const detailsBox = {
    display: "flex",
    alignItems: "center",
    mb: "1.5em",
    gap: ".3em",
  };
  const IconStyles = { fontSize: { xs: "1.3em", md: "1.5em" } };
  const guestCount = { fontSize: { xs: "1em", md: "1.1em" } };
  const roomStyles = {
    fontSize: { xs: "1.2em", md: "1.3em" },
    fontWeight: "600",
    mb: ".5em",
  };
  const description = { fontSize: { xs: ".9em", md: "1em" } };
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        textAlign: "center",
        overflow: "hidden",
        pb: { xs: "13em", md: 0 },
        bgcolor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box sx={{ textAlign: { xs: "left", md: "initial" } }}>
        <Navbar />
      </Box>
      <SocialLinks />
      <Box>
        <Image
          src="https://i.postimg.cc/G2fZxLYk/discover.jpg"
          alt=""
          fill={true}
          style={{ zIndex: -1, objectFit: "fill" }}
          priority
          quality={100}
        />
      </Box>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.4em", md: "3em" },
          fontWeight: "600",
          color: "white",
          letterSpacing: ".2em",
          mt: { xs: "1em", md: ".3em" },
        }}
      >
        SELECT ROOM TYPE
      </Typography>
      {/* grid */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          gap: { xs: "15em", md: "0em" },
          my: { xs: "2em", md: "3em" },
          px: { xs: "1.3em", md: "10em" },
          position: "relative",
          overflow: { xs: "auto", md: "initial" },
          zIndex: 1
        }}
      >
        {/* first Box*/}
        <Link href="standardRoom">
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/ZqhY7ksm/standard.jpg"
              alt=""
              fill={true}
              style={{ objectFit: "fill", zIndex: -1 }}
            />
            <Typography
              sx={{
                bgcolor: "primary.main",
                position: "absolute",
                top: { xs: "1em", md: "1.2em" },
                right: { xs: "1em", md: "1.2em" },
                borderRadius: ".5em",
                py: ".3em",
                px: { xs: ".8em", md: "1em" },
                fontSize: { xs: ".6em", md: ".8em" },
                color: "black",
                fontWeight: "500",
              }}
            >
              ONLY 4 ROOMS LEFT
            </Typography>
            <Box sx={shawdowBox}>
              <Box sx={detailsBox}>
                <AccountCircleOutlinedIcon sx={IconStyles} />
                <Typography sx={guestCount}>2 Guests</Typography>
              </Box>
              <Box sx={{ textAlign: "left" }}>
                <Typography sx={roomStyles}>Standard Non-AC Rooms</Typography>
                <Typography sx={description}>
                  Most hotesls are mmajor in natureMost hotesls are mmajor Most
                  hotesls are mmajor in nature
                </Typography>
              </Box>
            </Box>
          </Box>
        </Link>
        {/* second box */}
        <Link href="">
          <Box sx={imageStyles}>
            <Image
              src="https://i.postimg.cc/tJLGsPLb/deluxe.jpg"
              alt=""
              fill={true}
              style={{ objectFit: "fill", zIndex: -1 }}
            />
            <Box sx={shawdowBox}>
              <Box sx={detailsBox}>
                <AccountCircleOutlinedIcon sx={IconStyles} />
                <Typography sx={guestCount}>5 Guests</Typography>
              </Box>
              <Box sx={{ textAlign: "left" }}>
                <Typography sx={roomStyles}>Deluxe AC Rooms</Typography>
                <Typography sx={description}>
                  Most hotesls are mmajor in natureMost hotesls are mmajor Most
                  hotesls are mmajor in nature
                </Typography>
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
      <Box sx={{ mt: "16em", display: { xs: "none", md: "block" } }}>
        <Copyrights display="none" />
      </Box>
    </Box>
  );
};

export default roomType;
