import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  styled,
} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { motion } from "framer-motion";
import theme from "../src/theme";

const pages = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Skills", route: "/skills" },
  { label: "Projects", route: "/projects" },
];

const settings = [
  { label: "Profile", route: "" },
  { label: "Account", route: "/about" },
  { label: "Dashboard", route: "/skills" },
  { label: "Logout", route: "/projects" },
];

const StyledAppBar = styled(AppBar, { theme })({
  backgroundColor: theme.palette.blue.shadow.dark,
  color: theme.palette.blue.shadow.light,
  height: "5vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: "1px solid",
  borderColor: theme.palette.blue.light,
  opacity: 0.9,
});

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    <StyledAppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            My Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{color: theme.palette.blue.shadow.light}}
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
                opacity: 0.9,
                "& .MuiMenu-paper": {
                  widthMin: "20vw",
                  paddingLeft: "1vw",
                  paddingRight: "2vw",
                  backgroundColor: theme.palette.blue.shadow.dark,
                  border: `1px solid ${theme.palette.blue.transparent.medium}`,
                },
              }}
            >
              {pages.map((page, index) => (
                <Link href={page.route} key={index} passHref>
                  <MenuItem
                    key={page.route}
                    onClick={handleCloseNavMenu}
                    disableGutters
                  >
                    <Typography
                      textAlign="left"
                      sx={{
                        color: theme.palette.blue.shadow.light,
                        paddingRight: "1.5vw",
                      }}
                      component={motion.div}
                      whileHover={{
                        x: "1.5vw",
                        scale: 1.1,
                        fontWeight: "bold",
                      }}
                    >
                      {page.label}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            My Portfolio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link href={page.route} key={index} passHref>
                <Button
                  key={page.route}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                  }}
                >
                  <Typography
                    component={motion.div}
                    sx={{ color: theme.palette.blue.shadow.light,
                        fontSize: '14px',
                        paddingLeft: '5px',
                        paddingRight: '5px'
                    }}
                    whileHover={{
                      scale: 1.15,
                      color: theme.palette.blue.light,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {page.label}
                  </Typography>
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Get in contact">
              <IconButton 
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: theme.palette.blue.shadow.light}}
                component={motion.div}
                whileHover={{
                    scale: 1.1
                }}
              >
                <ConnectWithoutContactIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{
                opacity: 0.9,
                "& .MuiMenu-paper": {
                  widthMin: "20vw",
                  paddingLeft: "2vw",
                  paddingRight: "1vw",
                  backgroundColor: theme.palette.blue.shadow.dark,
                  border: `1px solid ${theme.palette.blue.transparent.medium}`,
                },
              }}
            >
              {settings.map((setting, index) => (
                <Link href={setting.route} key={index} passHref>
                  <MenuItem
                    key={setting.route}
                    onClick={handleCloseNavMenu}
                    disableGutters
                  >
                    <Typography
                      sx={{
                        color: theme.palette.blue.shadow.light,
                        // paddingRight: "1.5vw",
                      }}
                      component={motion.div}
                      whileHover={{
                        x: "-1vw",
                        scale: 1.1,
                        fontWeight: "bold",
                      }}
                    >
                      {setting.label}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
