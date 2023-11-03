import { SearchBar, InnerNav } from ".";
import { Box, Typography, Button } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { useState } from "react";
const SecondHead = () => {

const [hide ,setHide] = useState<boolean>(false)

const clickHandle = ()=>{
setHide(!hide)
}

  return (
    <>
      <Box className="flex items-center justify-between bg-[#333333] p-10 lg:hidden">
        <Button onClick={clickHandle}
          className="text-white text-[35px] font-bold"
          endIcon={<BsSearch />}
        ></Button>

        <Typography variant="h2"> LOGO</Typography>
        <Button
          className="text-white text-[35px] font-bold"
          endIcon={<BsFillBagFill />}
        ></Button>
      </Box>
      <Box className="flex items-center justify-evenly">
        <Box className="max-lg:hidden">
          <Typography variant="h2">LOGO</Typography>
        </Box>
        <SearchBar hide={hide} responsive="max-lg:hidden" />
        <InnerNav responsive="max-lg:hidden" />
      </Box>
    </>
  );
};

export default SecondHead;
