import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function HomeSectionCarousel({ data ,sectionName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 0 },
    720: { items: 4 },
    1024: { items: 5 },
  };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border pt-4">
    <h2 className=" text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className=" relative pl-20 lg:pl-24">
        <AliceCarousel
          items={items}
          //   disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%)",
              rotate: "90deg",
              borderRadius: "15px",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon sx={{ rotate: "-90deg" }} />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(50%)",
              rotate: "90deg",
              borderRadius: "15px",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon sx={{ rotate: "90deg" }} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
