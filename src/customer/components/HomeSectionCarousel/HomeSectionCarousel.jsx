import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
function HomeSectionCarousel({ data ,sectionName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 0 },
    720: { items: 4 },
    1024: { items: 5 },
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);
  return (
    <div className="border pt-4">
    <h2 className=" text-2xl font-extrabold text-gray-800 py-5 pl-10">{sectionName}</h2>
      <div className=" relative pl-20 lg:pl-24">
        <AliceCarousel
          items={items}
          //   disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
          
        />
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
