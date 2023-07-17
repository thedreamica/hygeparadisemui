import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

const Dates = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [adultAge, setAdultAge] = useState(0);
  const [childrenAge, setChildrenAge] = useState(0);

  const addAdultAge = () => {
    setAdultAge(adultAge + 1);
  };
  const minusAdultAge = () => {
    setAdultAge(adultAge - 1);
  };
  const addChildrenAge = () => {
    setChildrenAge(childrenAge + 1);
  };
  const minusChildrenAge = () => {
    setChildrenAge(childrenAge - 1);
  };

  const ageBoxStyles = {
    display: "flex",
    gap: "1.5em",
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
  const labelStyles = {
    fontSize: { xs: "1.5em", md: "1.8em" },
    fontWeight: "600",
    textTransform: "uppercase",
    textAlign: "center",
    mb: ".3em",
  };

  const inputBoxes = {
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    flexDirection: { xs: "column", md: "row" },

    my: { xs: "2em", md: "0" },
  };
  const checkinStyles = {
    fontSize: { xs: "1.5em", md: "2em" },
    fontWeight: "600",
    textTransform: "uppercase",
    mb: "1em",
    textAlign: "center",
  };

  const dateStyles = {
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      color: "primary.light",
      fontSize: { xs: "1em", md: "2em" },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      width: "1.5em",
      height: "1.5em",
      // backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      //   `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">${ArrowDropDownCircleIcon}</svg>`
      // )}")`,
      // backgroundSize: "cover",
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
      <Box sx={{ ...inputBoxes, gap: { xs: "3em", md: "10em" } }}>
        <Box>
          <Typography sx={checkinStyles}>check in</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={dateStyles}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              format="DD-MMM"
            />
          </LocalizationProvider>
          {/* < sx={dateIconStyles} /> */}
          {/* <DateCalendar /> */}
        </Box>
        <Box>
          <Typography sx={checkinStyles}>check in</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={dateStyles}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              format="DD-MMM"
            />
          </LocalizationProvider>
        </Box>
      </Box>
      {/* person counts */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: {
            xs: "center",
            md: "space-between",
          },
          alignItems: "center",
        }}
      >
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
