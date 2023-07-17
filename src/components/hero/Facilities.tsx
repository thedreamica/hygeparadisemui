import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

interface FacilitiesProps {
  facilities: { image: string; heading: string; desc: string }[];
}

const Facilities: React.FC<FacilitiesProps> = ({ facilities }) => {
  return (
    <Box
      sx={{
        bgcolor: { xs: "black", md: "initial" },
        py: { xs: "3em", md: "0" },
        px: { xs: "1.3em", md: "0" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: "2em",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: { xs: "1.7em", md: "2.3em" },
            fontWeight: "600",
          }}
        >
          Enchanted Facilities
        </Typography>
        <Divider
          sx={{
            bgcolor: "primary.main",
            width: { xs: "2.4em", md: "3em" },
            height: ".1em",
            mt: ".5em",
          }}
        ></Divider>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto", md: "auto auto auto" },
          gap: { xs: "3em", md: "2em" },
          px: { xs: "0", md: "6em" },
        }}
      >
        {facilities.map((val, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "60px", md: "80px" },
                width: { xs: "90px", md: "120px" },
                mr: "1em",
              }}
            >
              <Image
                src={val.image}
                alt=""
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: { xs: "1.1em", md: "1.3em" },
                  mb: ".3em",
                }}
              >
                {val.heading}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: ".8em", md: ".9em" },
                }}
              >
                {val.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Facilities;
