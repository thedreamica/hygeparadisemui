import React from "react";
import { Box, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

type FooterProps = {
  bgcolor: string;
  topMargin: string;
};

const Footer: React.FC<FooterProps> = ({ bgcolor, topMargin }) => {
  const title = {
    fontSize: { xs: "1.6em", md: "2em" },
    fontWeight: "600",
    mb: { xs: ".4em", md: ".5em" },
  };
  const iconStyles = {
    fontSize: { xs: "1.4em", md: "1.8em" },
    color: "white",
  };
  const flexBox = {
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "1.8em", md: "0" },
  };
  const paraStyles = {
    fontSize: { xs: "1em", md: "1.4em" },
    fontWeight: "400",
  };
  return (
    <Box
      sx={{
        px: { xs: "1.3em", md: "6em" },
        py: ".5em",
        color: "white",
        bgcolor: bgcolor,
        textAlign: { xs: "center", md: "initial" },
      }}
    >
      {/* first sec */}
      <Box
        sx={{
          ...flexBox,
          mt: { xs: "2em", md: "3em" },
        }}
      >
        {/*  */}
        <Box>
          <Typography sx={title} variant="h4">
            Office
          </Typography>
          <Typography
            sx={{
              ...paraStyles,
              width: { xs: "100%", md: "14em" },
            }}
          >
            Dot Cowork - Tidel Park, 1st Floor D Block, Tharamani, Chennai -
            600113
          </Typography>
        </Box>
        {/*  */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "right" },
          }}
        >
          <Typography sx={title}>Contact</Typography>
          <Typography
            sx={{
              ...paraStyles,
            }}
          >
            hello@hygeparadiseinn.com
          </Typography>
        </Box>
      </Box>
      {/* copyrights */}
      <Box
        sx={{
          ...flexBox,
          mt: { xs: "2em", md: topMargin },
          gap: ".7em",
        }}
      >
        {/*  */}
        <Box
          sx={{
            order: { xs: 1, md: 0 },
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: { xs: ".8em", md: ".9em" },
            }}
          >
            © Copyright 2023 - Paradise Inn by{" "}
            <span style={{ color: "#FFCC00" }}>hyge</span>
          </Typography>
        </Box>
        {/* icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: "1.2em", md: "2em" },
          }}
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
    </Box>
  );
};

export default Footer;
