import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Carousel from "@/components/booking/carousel";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Copyrights from "@/components/copyRights/Copyrights";
import SocialLinks from "@/components/socialLinks/SocialLinks";
import Dates from "@/components/booking/Dates";
import BasicModal from "@/components/booking/Modal";

const booking = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
    "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
      bgcolor: "red",
    },
  };

  const theme = useTheme();
  const isSmallerDevice = useMediaQuery(theme.breakpoints.down("md"));

  const rows = isSmallerDevice ? 7.3 : 11.3;

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "100%",
        minHeight: "100vh",
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
      <Box sx={{ px: { xs: "3.5em", md: "20em" } }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: ".3em",
            fontSize: { xs: "2.1em", md: "3em" },
            fontWeight: "600",
            color: "white",
            mt: { xs: "1em", md: "0" },
          }}
        >
          booking
        </Typography>
        {/* first Box */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "0", md: "3em" },
            my: { xs: "1em", md: "3.2em" },
            height: "auto",
          }}
        >
          {/* dates */}
          <Dates />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Carousel />
          </Box>
        </Box>
        {/* textFeilds */}
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "auto", md: "auto auto" },
              gap: { xs: "1em", md: "3em" },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto",
                gap: { xs: "1em", md: "1.2em" },
              }}
            >
              <Typography
                sx={{
                  display: { xs: "block", md: "none" },
                  fontSize: "1.3em",
                  fontWeight: "600",
                  color: "white",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                your details
              </Typography>
              <FormControl sx={inputStyles} fullWidth>
                <InputLabel>Select your room</InputLabel>
                <Select
                  sx={{
                    "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
                      color: "white",
                    },
                    "& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon": {
                      color: "white",
                    },
                  }}
                  value={age}
                  label="Select your room"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={inputStyles}
                variant="outlined"
                label="Your Name"
              />
              <TextField
                sx={inputStyles}
                variant="outlined"
                label="Your Email"
              />
              <TextField
                sx={inputStyles}
                variant="outlined"
                label="Your Phone"
              />
            </Box>
            <TextField
              sx={inputStyles}
              variant="outlined"
              multiline
              rows={rows}
              label="Your message"
            />
          </Box>
          <BasicModal />
        </Box>
      </Box>
      <Box
        sx={{ display: { xs: "block", md: "none" }, mx: "1.3em", my: "3em" }}
      >
        <Carousel />
      </Box>
      <Copyrights display="none" />
    </Box>
  );
};

export default booking;
