import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function OrderDetails() {
  return (
    <div className=" lg:px-20 px-5">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className=" py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1,1,1,1].map((item)=>
          <Grid
            item
            container
            className=" shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item sx={6}>
              <div className=" flex items-center space-x-4">
                <img
                  className=" w-[5rem] h-[5rem] object-cover object-top"
                  src="https://images.bewakoof.com/t320/men-s-black-all-over-printed-pyjama-581614-1704190288-1.jpg"
                  alt=""
                />
                <div className=" space-y-2 ml-5">
                  <p className=" font-semibold">
                    Men's Black All Over Printed Pyjamas
                  </p>
                  <p className=" space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: black</span>
                    <span>Size: M</span>
                  </p>
                  <p>Seller: Bewakoof</p>
                  <p>₹499</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  className=" px-2 text-5xl"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default OrderDetails;
