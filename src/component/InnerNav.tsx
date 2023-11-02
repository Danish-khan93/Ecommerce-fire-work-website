import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { InnerNavContent } from "../Constant/ConstantInnderNav";
import { FiPhoneCall } from "react-icons/fi";
import  {BsPerson} from "react-icons/bs"
const InnerNav = ({ responsive }: { responsive: string }) => {
  const ListNav = InnerNavContent.map((value) => {
    return (
      <NavLink
        className={({ isActive }) =>
          `text-[16px] ${isActive ? "text-[#ef7f23]" : "text-black"}`
        }
        key={value.label}
        to={value.path}
      >
        {value.label}
      </NavLink>
    );
  });

  return (
    <Box className={`flex flex-col gap-5  ${responsive} `}>
      <Box className={`flex justify-between w-[400px]`}>
        {ListNav}
      </Box>
      <Box className="flex gap-5">
        <Box className="flex items-center gap-4">
          <Typography
            component={FiPhoneCall}
            className="w-[50px] h-[50px]"
          ></Typography>
          <Box className="flex flex-col gap-1">
            <Typography
              variant="h6"
              className="font-bold text-[16px] text-[#ef7f23]"
            >
              Tel/Whatsapp
            </Typography>
            <Typography className="text-[14px] font-bold">03120813302</Typography>
          </Box>
        </Box>

        <Box className="flex items-center gap-4">
          <Typography
            component={BsPerson}
            className="w-[50px] h-[50px]"
          ></Typography>
          <Box className="flex flex-col gap-1">
            <Typography
              variant="h6"
              className="font-bold text-[16px] text-[#ef7f23]"
            >
              Join Us
            </Typography>
            <Typography  className="text-[16px] font-bold">Sign in</Typography>
            <Typography  className="text-[16px] font-bold">Register</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InnerNav;
