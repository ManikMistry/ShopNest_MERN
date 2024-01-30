import React from "react"
import './ProductCard.css'

function ProductCard() {
  return (
    <>
      <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
        <div className="h-[20rem]">
          <img
            className="h-full w-full object-cover object-left-top"
            src="https://images.bewakoof.com/t1080/men-oversize-aop-shirt-18-586207-1693910939-1.jpg"
            alt="img"
          />
        </div>
        <div className="textPart bg-white p-3">
          <div>
            <p className="font-bold opacity-60">OFFICIAL DISNEY MERCHANDISE</p>
            <p>Men's Black All Over Mickey Printed Oversized Shirt</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">₹999</p>
            <p className="line-through opacity-50">₹1798</p>
            <p className="text-green-600 font-semibold">70% off</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
