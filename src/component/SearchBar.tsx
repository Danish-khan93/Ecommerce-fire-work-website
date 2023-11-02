import {TextField} from "@mui/material"
const SearchBar = ({responsive,hide}:{responsive:string,hide:boolean} ) => {
  return (
    <TextField placeholder="Search"  className={`w-[50%] p-10 ${!hide ? "max-xl:w-[100%]" :responsive} `}/>
  )
}

export default SearchBar