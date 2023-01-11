import { Search, SearchSharp } from "@mui/icons-material";
import { useState } from "react";
import TextField from '@mui/material/TextField';

import { Box } from "@mui/system";
import styled from "@emotion/styled";




function SearchBar() {
    
    const StyledSearch = styled(TextField)({
      
        marginLeft: "40vw",
    })
    return(
        <Box>
            <form>
            <StyledSearch label="Search" variant="outlined" color="secondary"></StyledSearch><Search Size="xxx-large"/>
        
        
        </form>
        </Box>
       
      
    )}


    
export  default SearchBar