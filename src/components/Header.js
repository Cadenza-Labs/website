import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "gatsby"

const pages = ['Research', 'About', 'Contact'];


function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar disableGutters>
              <div className="logo" style={{display: { xs: 'flex', md: 'none' }}}>
                  <Link to="/">
                    <svg width="450.16" height="65.761" fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 450.16 65.761" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <clipPath id="g3113e51cc63_0_8.0">
                      <path d="m0 0h960v540h-960z"/>
                    </clipPath>
                    <g transform="translate(-248.19 -169.82)" clip-path="url(#g3113e51cc63_0_8.0)">
                      <path d="m32.724 148.05h894.55v102.39h-894.55z" fill="#000" fill-opacity="0" fill-rule="evenodd"/>
                      <path d="m320.63 216.73q0-5.6719 5.7031-8.5469 5.7031-2.875 14.75-2.9375v-1.4219q0-2.5625-0.53125-4-0.51563-1.4375-1.9219-2.1562t-4.0938-0.71875q-3.0469 0-5.4844 0.78125t-5.0625 2.0312l-1.9219-4q0.92188-0.79688 3.1406-1.9219t5.2656-1.9688q3.0625-0.84375 6.3125-0.84375 4.7969 0 7.5156 1.25t3.9062 4q1.1875 2.7344 1.1875 7.3594v19.078h3.3594v3.5q-1.25 0.3125-3.5625 0.625-2.2969 0.3125-4.0469 0.3125-2.125 0-2.8438-0.625t-0.71875-2.5625v-1.6875q-1.6719 1.875-4.3594 3.375t-6.0469 1.5q-2.875 0-5.2812-1.2188t-3.8438-3.5469q-1.4219-2.3438-1.4219-5.6562zm14.531 5.25q1.3125 0 3-0.78125t2.9219-1.9062v-10.234q-5.6094 0-8.3906 1.9062-2.7656 1.9062-2.7656 4.8906 0 3 1.3906 4.5625 1.4062 1.5625 3.8438 1.5625zm34.501 5.1719q-3.8594 0-6.9219-1.8438t-4.875-5.7031q-1.7969-3.875-1.7969-9.6719 0-5.25 2.1406-9.5781 2.1562-4.3438 6.3281-6.8906 4.1875-2.5625 10.062-2.5625 2.3594 0 4.4844 0.5v-10.547l-6.1094-0.875v-3.4219l12.844-1.25h0.1875l1.75 1.3125v46.031h3.375v3.5625q-4.5 0.9375-7.4219 0.9375-2 0-2.8438-0.65625t-0.84375-2.5938v-1.75q-1.625 2.1875-4.4375 3.5938-2.7969 1.4062-5.9219 1.4062zm3.25-5.1719q2.0625 0 3.6406-0.84375 1.5938-0.84375 2.5312-2.0312v-22.719q-0.4375-0.625-1.8438-1.0469-1.3906-0.4375-3.0156-0.4375-4 0-6.4062 3.4688-2.3906 3.4531-2.3906 11.062 0 6.3594 2.0469 9.4531 2.0625 3.0938 5.4375 3.0938zm38.494 5.1719q-8.2344 0-12.266-4.8281-4.0156-4.8438-4.0156-13.203 0-5.6094 2.0781-9.7188 2.0938-4.125 5.8906-6.3125 3.8125-2.1875 8.8125-2.1875 6.2344 0 9.5938 3.2812 3.375 3.2656 3.5 9.3281 0 4.1094-0.5 6.1094h-20.266q0.25 5.6719 2.6719 8.8281 2.4375 3.1562 6.9375 3.1562 2.4219 0 5.0156-0.8125t4.0938-1.9375l1.5469 3.4219q-1.6719 1.8125-5.4531 3.3438t-7.6406 1.5312zm4.8594-21.281q0.125-1.7344 0.125-2.6719 0-8.2969-5.5469-8.2969-3.0625 0-4.75 2.4375-1.6719 2.4219-1.8594 8.5312zm17.221-8.1719-3.9844-1.125v-4.2969l10.359-1.3125h0.1875l1.5469 1.25v2.4375l-0.0625 1.4844q2.1875-2.0469 5.6719-3.5469 3.5-1.5 7.0625-1.5 3.8125 0 5.9531 1.4062 2.1562 1.4062 3.0938 4.4062 0.9375 2.9844 0.9375 8.0938v17.219l3.7969 0.5v3.75h-16.094v-3.75l3.375-0.5v-17.219q0-3.2344-0.4375-5.0781t-1.5938-2.6875-3.2812-0.84375q-3.5469 0-7.6094 3.0625v22.703l3.75 0.5625v3.75h-16.281v-3.75l3.6094-0.5625zm45.863-1.4375-1.4375 6.125h-4.4844v-10.609h27.5l1.4375 3.25-16.594 23.016-4.3594 4.4844 13.969-0.67187 3-7.1875 4.2344 0.5-1 11.297h-28.938l-1.5625-3.4375 17.031-22.516 4.4844-4.6875zm27.267 20.469q0-5.6719 5.7032-8.5469 5.7031-2.875 14.75-2.9375v-1.4219q0-2.5625-0.53125-4-0.51562-1.4375-1.9219-2.1562t-4.0938-0.71875q-3.0469 0-5.4844 0.78125t-5.0625 2.0312l-1.9219-4q0.92187-0.79688 3.1406-1.9219 2.2188-1.125 5.2657-1.9688 3.0625-0.84375 6.3125-0.84375 4.7969 0 7.5156 1.25t3.9062 4q1.1875 2.7344 1.1875 7.3594v19.078h3.3594v3.5q-1.25 0.3125-3.5625 0.625-2.2969 0.3125-4.0469 0.3125-2.125 0-2.8438-0.625t-0.71875-2.5625v-1.6875q-1.6719 1.875-4.3594 3.375t-6.0469 1.5q-2.875 0-5.2813-1.2188-2.4062-1.2188-3.8438-3.5469-1.4219-2.3438-1.4219-5.6562zm14.531 5.25q1.3125 0 3-0.78125t2.9219-1.9062v-10.234q-5.6094 0-8.3906 1.9062-2.7656 1.9062-2.7656 4.8906 0 3 1.3906 4.5625 1.4062 1.5625 3.8438 1.5625zm40.865-37.188-4.7969-0.8125v-3.875h19.953v3.875l-5.9844 0.8125v37.234l13.359-0.54687 3.9219-11.672 5.0625 0.6875-1.9375 15.969h-34.5v-3.75l4.9219-0.625zm34.508 31.938q0-5.6719 5.7031-8.5469 5.7031-2.875 14.75-2.9375v-1.4219q0-2.5625-0.53125-4-0.51563-1.4375-1.9219-2.1562t-4.0938-0.71875q-3.0469 0-5.4844 0.78125t-5.0625 2.0312l-1.9219-4q0.92188-0.79688 3.1406-1.9219t5.2656-1.9688q3.0625-0.84375 6.3125-0.84375 4.7969 0 7.5156 1.25t3.9062 4q1.1875 2.7344 1.1875 7.3594v19.078h3.3594v3.5q-1.25 0.3125-3.5625 0.625-2.2969 0.3125-4.0469 0.3125-2.125 0-2.8438-0.625t-0.71875-2.5625v-1.6875q-1.6719 1.875-4.3594 3.375t-6.0469 1.5q-2.875 0-5.2812-1.2188t-3.8438-3.5469q-1.4219-2.3438-1.4219-5.6562zm14.531 5.25q1.3125 0 3-0.78125t2.9219-1.9062v-10.234q-5.6094 0-8.3906 1.9062-2.7656 1.9062-2.7656 4.8906 0 3 1.3906 4.5625 1.4062 1.5625 3.8438 1.5625zm18.657-45.297 11.422-1.375h0.125l1.75 1.1875v18.406q1.6719-1.6875 4.1406-2.8438t5.3281-1.1562q6 0 9.7656 4.2188 3.7812 4.2031 3.7812 12.875 0 5.3594-2.25 9.7344-2.25 4.3594-6.4688 6.8906-4.2031 2.5312-9.75 2.5312-4.9219 0-8.5469-0.84375t-4.625-1.5312v-44.109l-4.6719-0.75zm19.469 19.703q-1.875 0-3.5312 0.84375t-2.6406 1.9062v22.781q0.35937 0.67187 1.7344 1.1094t3.125 0.4375q4 0 6.3906-3.7031 2.4062-3.7188 2.4062-11.016 0-6.2969-2.0625-9.3281t-5.4219-3.0312zm28.823 24.969q0.5 0.73437 2.2656 1.3906 1.7812 0.65625 3.5938 0.65625 2.9375 0 4.4062-1.2031 1.4688-1.2188 1.4688-3.2188 0-2.0625-1.8125-3.3438t-6.125-3.1406l-1.7344-0.75q-4.3125-1.8125-6.4375-4.375-2.1094-2.5625-2.1094-6.6094 0-2.8125 1.6719-5.0156 1.6875-2.2188 4.75-3.4688t7.0469-1.25q2.9375 0 5.0156 0.375 2.0938 0.375 4.4062 1 1.25 0.4375 1.875 0.5v8.1719h-4.9375l-1.4219-4.75q-0.375-0.625-1.6875-1.1094-1.3125-0.5-3-0.5-2.5625 0-4.0938 1.0938-1.5156 1.0781-1.5156 3.0156 0 1.75 1.0469 2.9062 1.0625 1.1562 2.3125 1.7812t4.625 2.0469q3.3594 1.4375 5.5781 2.75t3.6875 3.4062q1.4688 2.0781 1.4688 5.0781 0 4.625-3.625 7.5-3.625 2.8594-10.422 2.8594-3.1719 0-5.7031-0.5625t-5.8438-1.5l-1.3594-0.4375v-8.2344h5.1719z" fill="#267896"/>
                      <g fill="#000" fill-opacity="0" fill-rule="evenodd">
                      <path d="m0 258.44h960v185.04h-960z"/>
                      <path d="m766.84 502.83h193.17v37.165h-193.17z"/>
                      <path d="m248.19 169.82h65.761v65.761h-65.761z"/>
                      </g>
                      <g transform="matrix(.31315 0 0 .31315 248.19 169.82)">
                      <clipPath id="g3113e51cc63_0_8.1">
                        <path d="m0 0h210v210h-210z" clip-rule="evenodd"/>
                      </clipPath>
                      <image width="210" height="210" clip-path="url(#g3113e51cc63_0_8.1)" fill="#000000" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                      </g>
                    </g>
                    </svg>
                  </Link>
              </div>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={"/" + page.toLowerCase()}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={"/" + page.toLowerCase()}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
              </Link>
            ))}
          </Box>


        </Toolbar>
    </AppBar>
  );
}
export default Header;

