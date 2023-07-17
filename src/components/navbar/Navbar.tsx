import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkStyles = {
    textDecoration: "none",
    fontSize: { xs: "1em", md: "1.2em" },
    fontWeight: "400",
    color: "white",
  };

  const iconStyles = {
    display: { xs: "block", md: "none" },
    fontSize: "1.7em",
    ml: ".3em",
    color: "white",
    zIndex: 2,
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: "1.3em", md: "2em" },
      }}
    >
      {/* logo */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100px", md: "150px" },
          height: "87px",
          zIndex: 1,
        }}
      >
        <Link href="">
          <Image
            src="https://i.postimg.cc/MZPytcnk/Group-8358.png"
            alt="Logo"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </Link>
      </Box>
      {/* links */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "auto",
            md: "auto auto auto auto auto auto",
          },
          gap: { xs: "1.5em", md: "2em" },
          position: { xs: "absolute", md: "initial" },
          visibility: { xs: open ? "visible" : "hidden", md: "initial" },
          top: 0,
          left: 0,
          bgcolor: { xs: "black", md: "transparent" },
          overflow: "hidden",
          width: { xs: "100%", md: "auto" },
          py: { xs: "8em", md: "0" },
          pl: { xs: "4em", md: "0" },
          zIndex: 2,
        }}
      >
        <Link href="" sx={linkStyles}>
          Home
        </Link>
        <Link href="#About" sx={linkStyles}>
          About
        </Link>
        <Link href="roomType" sx={linkStyles}>
          Rooms
        </Link>
        <Link href="booking" sx={linkStyles}>
          Booking
        </Link>
        <Link href="" sx={linkStyles}>
          Offers
        </Link>
        <Link href="contact" sx={linkStyles}>
          Contact
        </Link>
      </Box>
      {/* btn */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <Button
          variant="contained"
          disableRipple
          sx={{
            bgcolor: "primary.main",
            fontSize: { xs: ".9em", md: "1.2em" },
            fontWeight: "600",
            px: { xs: "1.1em", md: "2.6em" },
            py: { xs: ".3em", md: ".5em" },
            borderRadius: "1.3em",
            ":hover": { bgcolor: "primary.main" },
            zIndex: { xs: open ? -1 : 1, md: 1 },
          }}
        >
          BOOK NOW
        </Button>
        <ArrowForwardIcon
          sx={{
            bgcolor: "primary.main",
            borderRadius: "2em",
            fontSize: { xs: "1.4em", md: "1.6em" },
            p: { xs: ".2em", md: ".5em" },
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            zIndex: 2,
          }}
        >
          {open ? (
            <CloseIcon onClick={handleMenu} sx={iconStyles} />
          ) : (
            <MenuIcon onClick={handleMenu} sx={iconStyles} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
// places images
// https://i.postimg.cc/qBb7WycL/place1.png
// https://i.postimg.cc/ZKX55mMv/place2.png
// https://i.postimg.cc/SKhQcrqy/place3.png
// https://i.postimg.cc/DySzh0BK/place4.png
// https://i.postimg.cc/Jh5rxk4j/place5.png
// https://i.postimg.cc/d1QqxVLp/place6.png
