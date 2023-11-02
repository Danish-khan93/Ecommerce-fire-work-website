import { Box, Typography } from "@mui/material";
import { TopNavConstant } from "../Constant/ConstantTopNav";
import { DATA } from "../Constant/ConstantTopNav";
const TopHead = () => {
  const listTopNav = TopNavConstant.map((value: DATA) => {
    return (
      <Box key={value.label} className="flex items-center gap-4">
        <Typography variant="h4" className="text-[#ef7f23] ">
          <value.icon />
        </Typography>
        <Box className="flex flex-col gap-1">
          <Typography variant="h6" className="font-bold text-[14px]">
            {value.label}
          </Typography>
          <Typography className="text-[12px]">{value.content}</Typography>
        </Box>
      </Box>
    );
  });
  return (
    
    <Box className="flex justify-evenly py-10 max-lg:hidden shadow">{listTopNav}</Box>

  );
};

export default TopHead;
