import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  py: { xs: "5em", md: "15em" },
  px: { xs: ".5em", md: "10em" },
  color: "white",
  textAlign: "center",
  width: { xs: "100%", md: "auto" },
};
const textStyles = {
  my: "1em",
  md: "1.1em",
  fontSize: { xs: ".8em", md: "1.2em" },
  fontWeight: "500",
  width: "100%",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
          justifyContent: "center",
          my: ".9em",
        }}
      >
        <Button
          variant="contained"
          disableRipple
          sx={{
            bgcolor: "primary.main",
            fontSize: { xs: "1em", md: "1.4em" },
            fontWeight: "600",
            px: { xs: "1.8em", md: "2em" },
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
            p: ".3em",
            color: "black",
          }}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              fontSize: { xs: "1.5em", md: "2em" },
              color: "white",
              top: { xs: ".8em", md: "1em" },
              right: { xs: ".8em", md: "1em" },
              position: "absolute",
              cursor: "pointer",
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "2em", md: "3em" },
              fontWeight: "600",
              mb: "1em",
            }}
            id="modal-modal-title"
            variant="h3"
            component="h2"
          >
            THANK YOU
          </Typography>
          <Typography id="modal-modal-description" sx={textStyles}>
            Invoice will be sent to your Email & Phone
          </Typography>
          <Typography id="modal-modal-description" sx={textStyles}>
            We Request you to reach your room 2 hours before check-in time
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
