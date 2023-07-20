import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

const Dates = () => {
  const [checkIn, setCheckIn] = React.useState<Dayjs | null>(null);
  const [checkOut, setCheckOut] = React.useState<Dayjs | null>(null);
  const [adultAge, setAdultAge] = useState(0);
  const [childrenAge, setChildrenAge] = useState(0);

  const addAdultAge = () => {
    setAdultAge(adultAge + 1);
  };
  const minusAdultAge = () => {
    if (adultAge > 0) {
      setAdultAge(adultAge - 1);
    }
  };

  const addChildrenAge = () => {
    setChildrenAge(childrenAge + 1);
  };
  const minusChildrenAge = () => {
    if (childrenAge > 0) {
      setChildrenAge(childrenAge - 1);
    }
  };

  const ageBoxStyles = {
    display: "flex",
    gap: { xs: "1.3em", md: "1.5em" },
    alignItems: "center",
    justifyContent: "center",
  };
  const valueStyles = {
    fontSize: { xs: "1.4em", md: "1.5em" },
    fontWeight: "600",
    color: "primary.light",
  };
  const iconStyles = {
    fontSize: { xs: "2.2em", md: "2.5em" },
    cursor: "pointer",
  };

  const inputBoxes = {
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    flexDirection: { xs: "column", md: "row" },
    width: "100%",
    mt: { xs: "2em", md: "0em" },
    mb: { xs: "2em", md: "2em" },
    gap: { xs: "3em", md: 0 },
  };
  const checkinStyles = {
    fontSize: { xs: "1.4em", md: "1.7em" },
    fontWeight: "600",
    textTransform: "uppercase",
    mb: { xs: "1em", md: ".5em" },
    textAlign: "center",
  };

  const dateStyles = {
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      color: "primary.light",
      fontSize: { xs: "1.3em", md: "1.7em" },
      width: { xs: "100%", md: "6.5em" },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      width: { xs: "1em", md: "1.5em" },
      height: { xs: "1em", md: "1.5em" },
      color: "white",
    },
    "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
      py: "0",
    },
  };

  return (
    <Box
      sx={{
        color: "white",
        width: "100%",
      }}
    >
      {/* dates */}
      <Box sx={inputBoxes}>
        <Box>
          <Typography sx={checkinStyles}>check in</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={dateStyles}
              value={checkIn}
              onChange={(newValue) => setCheckIn(newValue)}
              format="DD-MMM"
            />
          </LocalizationProvider>
        </Box>
        <Box>
          <Typography sx={checkinStyles}>check out</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={dateStyles}
              value={checkOut}
              onChange={(newValue) => setCheckOut(newValue)}
              format="DD-MMM"
            />
          </LocalizationProvider>
        </Box>
      </Box>
      {/* person counts */}
      <Box sx={inputBoxes}>
        {/* 1 */}
        <Box>
          <Typography sx={checkinStyles}>adult</Typography>
          <Box sx={ageBoxStyles}>
            <RemoveIcon onClick={minusAdultAge} sx={iconStyles} />
            <Typography sx={valueStyles}>{adultAge}</Typography>
            <AddIcon onClick={addAdultAge} sx={iconStyles} />
          </Box>
        </Box>
        {/* 2 */}
        <Box>
          <Typography sx={checkinStyles}>children</Typography>
          <Box sx={ageBoxStyles}>
            <RemoveIcon onClick={minusChildrenAge} sx={iconStyles} />
            <Typography sx={valueStyles}>{childrenAge}</Typography>
            <AddIcon onClick={addChildrenAge} sx={iconStyles} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dates;
