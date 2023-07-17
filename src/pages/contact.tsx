import React from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Copyrights from "@/components/copyRights/Copyrights";
import Footer from "@/components/footer/Footer";
import SocialLinks from "@/components/socialLinks/SocialLinks";

const contact = () => {
  const inputStyles = {
    "& .css-1twifar-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      color: "primary.light",
    },
    "& .css-aq4zgj-MuiFormLabel-root-MuiInputLabel-root": {
      color: "primary.light",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white !important",
    },
  };
  return (
    <Box
      sx={{
        position: "relative",
        MinHeight: "100vh",
        width: "100%",
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
      <SocialLinks />
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: "3em", md: "25em" },
          gap: { xs: "1.5em", md: "3em" },
          height: { xs: "80vh", md: "70vh" },
          color: "white",
          pb: { xs: "5.3em", md: 0 },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.7em", md: "3em" },
              mb: ".3em",
              fontWeight: "600",
              letterSpacing: ".2em",
            }}
          >
            CONTACT US
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1em", md: "1.1em" },
              display: { xs: "none", md: "block" },
            }}
          >
            We are here for you 24/7. Our Customer Success Team is called that
            way for a reason.
          </Typography>
        </Box>
        {/* form */}
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "auto", md: " auto auto" },
              gap: { xs: "1em", md: "3em" },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto",
                gap: { xs: "1em", md: "1em" },
              }}
            >
              <TextField
                sx={inputStyles}
                label="Your Name"
                variant="outlined"
              />
              <TextField
                sx={inputStyles}
                label="Your Email"
                variant="outlined"
              />
              <TextField
                sx={inputStyles}
                label="Your Phone"
                variant="outlined"
              />
            </Box>
            <TextField
              sx={inputStyles}
              multiline
              rows={7.3}
              label="Your message"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: { xs: "1em", md: "2.7em" },
            }}
          >
            <Link href="" sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                disableRipple
                sx={{
                  bgcolor: "primary.main",
                  fontSize: { xs: "1.1em", md: "1.5em" },
                  fontWeight: "600",
                  px: { xs: "1.5em", md: "2em" },
                  py: { xs: ".1em", md: ".2em" },
                  borderRadius: "1.3em",
                  ":hover": { bgcolor: "primary.main" },
                }}
              >
                SUBMIT
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
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Footer bgcolor="transparent" topMargin="3em" />
      </Box>
    </Box>
  );
};

export default contact;
