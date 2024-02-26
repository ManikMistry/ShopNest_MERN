import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";

function OrderCard() {
  return (
    <div className=" p-5 shadow-lg hover:shadow-xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className=" flex cursor-pointer">
            <img
              className=" w-[5rem] h-[5rem] object-cover object-top"
              src="https://images.bewakoof.com/t320/men-s-black-all-over-printed-pyjama-581614-1704190288-1.jpg"
              alt=""
            />
            <div className=" ml-5 space-y-2">
              <p className="">Men's Black All Over Printed Pyjamas</p>
              <p className=" opacity-50 text-xs font-semibold">Size: M</p>
              <p className=" opacity-50 text-xs font-semibold">Color: black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹499</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className=" text-green-600 mr-2 text-sm"
                />
                <span>Delivered On March 03</span>
              </p>
              <p className=" text-xs">Your item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
