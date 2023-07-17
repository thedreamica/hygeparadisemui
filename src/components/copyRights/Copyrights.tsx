import React from "react";
import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

type copyRightsProp = {
  display: string;
};
const Copyrights: React.FC<copyRightsProp> = ({ display }) => {
  const iconStyles = {
    fontSize: { xs: "1.4em", md: "1.6em" },
    mx: ".4em",
    color: "white",
  };
  return (
    <Box
      sx={{
        px: { xs: "1.3em", md: "10em" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        color: "white",
        gap: { xs: ".5em", md: 0 },
      }}
    >
      {/* copyright */}
      <Box sx={{ order: { xs: 2, md: 1 } }}>
        <Typography
          sx={{ fontSize: { xs: ".8em", md: ".9em" }, fontWeight: "500" }}
        >
          © Copyright 2023 - Paradise Inn by{" "}
          <span style={{ color: "#FFCC00" }}>hyge</span>
        </Typography>
      </Box>
      {/* icons */}
      <Box
        sx={{ display: { xs: display, md: "block" }, order: { xs: 1, md: 2 } }}
      >
        <Link href="">
          <FacebookIcon sx={iconStyles} />
        </Link>
        <Link href="">
          <TwitterIcon sx={iconStyles} />
        </Link>
        <Link href="">
          <InstagramIcon sx={iconStyles} />
        </Link>
      </Box>
    </Box>
  );
};

export default Copyrights;
