import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { mens_kurta } from "../../../data/mens_kurta";
function HomeSectionCarousel() {
    const[activeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 0 },
    720: { items: 3 },
    1024: { items: 5 },
  };
  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item);
  const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="">
      <div className=" relative pl-20 lg:pl-24">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !==items.length-5 &&
        <Button
          className="z-50"
          onClick={slideNext}
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
        }

        <Button
          className="z-50"
          onClick={slidePrev}
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
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
