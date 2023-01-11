import * as React from "react";
import { Link as ReactLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { UserContext } from "./UserContext";

const pages = ["Donate Now", "Shop Products", "Get Involved"];
const pagesPaths = ["/donate", "/products/list", "/involved"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { loggedIn, avatar, logoutUser } = React.useContext(UserContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar class="header bg-white py-2" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a className="navbar-brand" href="/">
            <img className="logo" src={require("../img/bh.png")} alt="logo" />
          </a>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={ReactLink}
                  to={pagesPaths[i]}
                  key={page}
                >
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className="ms-auto">
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page, i) => (
                <Button
                  class="navbox"
                  component={ReactLink}
                  to={pagesPaths[i]}
                  sx={{
                    my: 2,
                    color: "navbox",
                    display: "flex",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                <Avatar
                  alt="avatar"
                  src={avatar}
                  sx={{ width: 50, height: 50 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {loggedIn === true ? (
                <MenuItem>
                  <a href="/profile">My Account</a>
                </MenuItem>
              ) : (
                <MenuItem to={"/profile"}></MenuItem>
              )}

              {loggedIn === true ? (
                <MenuItem onClick={logoutUser}>
                  <Typography textAlign="center">Log out</Typography>
                </MenuItem>
              ) : (
                <React.Fragment>
                  <MenuItem
                    to={"/register"}
                    component={ReactLink}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>

                  <MenuItem
                    to={"/login"}
                    component={ReactLink}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </React.Fragment>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
