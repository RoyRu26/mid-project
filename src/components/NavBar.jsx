import React from 'react';

function NavBar() {

    return (
        <div>
            <AppBar position='fixed' sx={{ marginBottom: '30px', zIndex: '1' }}>
                <StyledToolBar>
                    <Typography className='Title' fontFamily='Prosto One, cursive' variant='h6' onClick={() => props.setSend(false)} sx={{ display: { xs: 'none', sm: 'block' } }}>THE CURRENT</Typography>
                    <Tooltip title='FEED' arrow><IconButton><ArrowBackIosNewIcon/></IconButton></Tooltip>
                    <SearchIcon sx={{ display: { xs: 'block', sm: 'none' } }}></SearchIcon>
                    <Search><InputBase placeholder='Search...'/></Search>
                    <SearchButton onClick={setInput}>SUBMIT</SearchButton>
                    <>
                        <IconButton onClick={() => toggleRightBar(true)}>
                            <Tooltip title='FAVORITES' arrow><StarIcon /></Tooltip>
                        </IconButton>
                    </>
                </StyledToolBar>
            </AppBar>
        </div>
    );
}

export default NavBar;