import { AppBar, Toolbar, Typography } from "@mui/material";
import NestedNavOfMainNav from "./NestedNavOfMainNav"
import { Link } from "react-router-dom";
const MainNavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="bg-[#ef7f23] py-5 flex justify-evenly">
        <NestedNavOfMainNav/>
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
    </AppBar>
  );
};

export default MainNavBar;
