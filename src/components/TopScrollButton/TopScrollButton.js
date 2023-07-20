import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Adjust the duration as needed (in milliseconds)
      smooth: "easeInOutQuad", // Use any easing function you prefer
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Zoom in={isVisible}>
      <div style={{ position: "fixed", bottom: 16, right: 16 }}>
        <Fab color="primary" onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollToTopButton;
