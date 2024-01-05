import React, { useState } from "react";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleOpen = () => {
    setOpenMenu(true);
  };

  return (
    <header className="header">
      <div className="menu">
        <RxHamburgerMenu
          fontSize={"1.4rem"}
          cursor={"pointer"}
          onClick={handleOpen}
        />
        <Menu
          open={openMenu}
          onClose={handleClose}
          disableAutoFocusItem={true}
          sx={{
            margin: "1.6rem 0 0 2rem",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem className="menu-link">Main menu</MenuItem>
          <Divider />
          <MenuItem className="menu-link">Main page</MenuItem>
          <MenuItem className="menu-link">Contents</MenuItem>
          <MenuItem className="menu-link">Current Events</MenuItem>
          <MenuItem className="menu-link">Random article</MenuItem>
          <MenuItem className="menu-link">About wikipedia</MenuItem>
          <MenuItem className="menu-link">Contact us</MenuItem>
          <MenuItem className="menu-link">Donate</MenuItem>
          <Divider />
          <MenuItem className="menu-link">Contribute</MenuItem>
          <MenuItem className="menu-link">Help</MenuItem>
          <MenuItem className="menu-link">Learn to edit</MenuItem>
          <MenuItem className="menu-link">Community portal</MenuItem>
          <MenuItem className="menu-link">Recent charges</MenuItem>
          <MenuItem className="menu-link">Upload file</MenuItem>
          <Divider />
          <MenuItem
            sx={{
              fontSize: "14px",
              cursor: "default",
              background: "#fff !important",
            }}
          >
            Languages
          </MenuItem>
          <div className="menu-box-1">
            Language links are at the top of the page across from the title.
          </div>
        </Menu>
      </div>
      <div className="logo">
        <img
          src="https://en.wikipedia.org/static/images/icons/wikipedia.png"
          alt="wikipedia logo"
          width={"50px"}
          height={"50px"}
        />
      </div>
      <span className="logo-name">
        <img
          src="https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg"
          alt="name"
          width={"125px"}
        />
        <img
          src="https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-tagline-en.svg"
          alt="name"
          width={"120px"}
        />
      </span>

      <div className="search">
        <IoMdSearch size={"25px"} color="#868a90" />
        <input type="text" placeholder="Search Wikipedia" />
      </div>
      <button>Search</button>

      <div className="auth">
        <span>
          <a href="/">Create account</a>
        </span>
        <span>
          <a href="/">Log in</a>
        </span>
        <IconButton
          onClick={() => {
            setOpenDialog((val) => !val);
          }}
        >
          <HiDotsHorizontal
            size={"1.4rem"}
            color="#000000"
            cursor={"pointer"}
          />
        </IconButton>
        <Menu
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          sx={{
            maxWidth: "220px",
            position: "absolute",
            left: "80rem",
            "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
              borderRadius: 0,
              top: "50px !important",
            },
            "& .css-6hp17o-MuiList-root-MuiMenu-list": {
              paddingBottom: "0",
            },
          }}
        >
          <div
            style={{
              fontSize: "14px",
              marginLeft: "16px",
              color: "#54595d",
            }}
          >
            Pages for logged out editors&nbsp;
            <span className="menu-link">(learn more)</span>
          </div>
          <MenuItem className="menu-link">Contributions</MenuItem>
          <MenuItem className="menu-link">Talk</MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
