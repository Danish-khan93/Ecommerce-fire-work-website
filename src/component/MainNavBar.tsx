import {
  Button,
  AppBar,
  Toolbar,
  Drawer,
  Box,
  Typography,
} from "@mui/material";
import NestedNavOfMainNav from "./NestedNavOfMainNav";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
const MainNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <AppBar position="static">
      <Toolbar className="bg-[#ef7f23] py-5 flex justify-evenly max-md:hidden">
        <NestedNavOfMainNav />
        <Link to={"/reviews"}>
          <Typography className="font-bold hover:text-[#333333]">
            REVIEWS
          </Typography>
        </Link>
        <Link to={"/safety"}>
          <Typography className="font-bold hover:text-[#333333]">
            SAFETY
          </Typography>
        </Link>
        <Link to={"/wholesale"}>
          <Typography className="font-bold hover:text-[#333333]">
            WHOLESALE
          </Typography>
        </Link>
        <Link to={"/contact"}>
          <Typography className="font-bold hover:text-[#333333]">
            CONTACT
          </Typography>
        </Link>
        <Link to={"/cart"}>
          <Typography className="font-bold hover:text-[#333333]">
            CART
          </Typography>
        </Link>
      </Toolbar>
      <Toolbar className="bg-[#ef7f23] py-5 flex justify-start max-md:flex max-2xl:hidden">
        <Typography
          component={"button"}
          onClick={() => {
            setIsDrawerOpen(true);
          }}
        >
          <RxHamburgerMenu />
        </Typography>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
          }}
        >
          <>
            <Box className=" flex justify-evenly bg-[#333333] p-5 ">
              <Button className="bg-[#ef7f23] text-[#333333] font-bold hover:bg-[#ef7f23] hover:text-[#333333]">
                Sign up
              </Button>
              <Button className="bg-[#ef7f23] text-[#333333] font-bold hover:bg-[#ef7f23] hover:text-[#333333]">
                Sign in
              </Button>
            </Box>
            <Box className="w-[250px] pl-4 mt-3 flex flex-col gap-4">
              <NestedNavOfMainNav />
              <Link to={"/reviews"}>
                <Typography className="font-bold hover:text-[#333333]">
                  REVIEWS
                </Typography>
              </Link>
              <Link to={"/safety"}>
                <Typography className="font-bold hover:text-[#333333]">
                  SAFETY
                </Typography>
              </Link>
              <Link to={"/wholesale"}>
                <Typography className="font-bold hover:text-[#333333]">
                  WHOLESALE
                </Typography>
              </Link>
              <Link to={"/contact"}>
                <Typography className="font-bold hover:text-[#333333]">
                  CONTACT
                </Typography>
              </Link>
              <Link to={"/cart"}>
                <Typography className="font-bold hover:text-[#333333]">
                  CART
                </Typography>
              </Link>
            </Box>
          </>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavBar;
