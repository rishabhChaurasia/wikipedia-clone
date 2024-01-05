import { Button, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { IoLanguageSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { RiMenuFoldLine } from "react-icons/ri";
import { sidebarItems, toolMenuData } from "../../fakeData";
import { MdKeyboardArrowRight } from "react-icons/md";
import ToolsMenu from "../tools/ToolsMenu";
import Content from "./Content";

function MainContent({ hideSidebar, setHideSidebar }) {
  const [openLanguages, setOpenLanguages] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [tab1, setTab1] = useState("article");
  const [tab2, setTab2] = useState("read");
  const [hideToolMenu, setHideToolMenu] = useState(false);
  const [openToolMenu, setOpenToolMenu] = useState(false);

  const handleCloseLangMenu = () => {
    setOpenLanguages(false);
  };

  const handleCloseSidebarMenu = () => {
    setOpenMenu(false);
    setHideSidebar(false);
  };

  const handleCloseToolMenu = () => {
    setOpenToolMenu(false);
    setHideToolMenu(false);
  };

  return (
    <>
      <div className="main-container">
        <div className="main-title">
          {hideSidebar && (
            <>
              <IconButton onClick={() => setOpenMenu((prev) => !prev)}>
                <RiMenuFoldLine />
              </IconButton>

              <Menu
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                disableAutoFocusItem={true}
                sx={{
                  margin: "7rem 0 0 17rem",
                  "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                    {
                      borderRadius: 0,
                    },
                  "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                    padding: "12px 16px",
                  },
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
                <MenuItem className="main-content-menu-title">
                  Contents&nbsp;&nbsp;
                  <span
                    className="sidebar-hide-button"
                    onClick={handleCloseSidebarMenu}
                  >
                    move to sidebar
                  </span>
                </MenuItem>
                <Divider />
                <MenuItem className="main-content-menu-title">(Top)</MenuItem>

                {sidebarItems.map((val, index) => {
                  return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {val.icon && <MdKeyboardArrowRight fontSize={"1.2rem"} />}
                      <MenuItem
                        className="menu-link"
                        sx={{ marginLeft: !val.icon && 2.4 }}
                      >
                        {val.name}
                      </MenuItem>
                    </div>
                  );
                })}
              </Menu>
            </>
          )}
          <h1>Wikipedia</h1>
        </div>
        <Button
          onClick={() => {
            setOpenLanguages(true);
          }}
          startIcon={<IoLanguageSharp />}
          endIcon={<IoIosArrowDown style={{ fontSize: "16px" }} />}
        >
          303 languages
        </Button>
        <Menu
          open={openLanguages}
          onClose={handleCloseLangMenu}
          sx={{
            "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
              top: "8.2rem !important",
              left: "35rem !important",
              width: "85vh",
            },
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
          <MenuItem>
            <IoMdSearch size={"25px"} color="#868a90" />
            <input
              type="search"
              placeholder="Search for languages"
              style={{
                width: "20rem",
                padding: "5px 1rem",
                border: 0,
                outline: 0,
              }}
            />
          </MenuItem>
          <Divider />
          <MenuItem className="worldwide">Worldwide</MenuItem>
          <MenuItem onClick={handleCloseLangMenu}>Wor</MenuItem>
          <MenuItem onClick={handleCloseLangMenu}>My account</MenuItem>
          <MenuItem onClick={handleCloseLangMenu}>Logout</MenuItem>
        </Menu>
      </div>

      <div className="main-content-nav-tags">
        <nav>
          <div className="nav1">
            <span
              onClick={() => setTab1("article")}
              className={tab1 === "article" ? "active" : ""}
            >
              Article
            </span>
            <span
              onClick={() => setTab1("talk")}
              className={tab1 === "talk" ? "active" : ""}
            >
              Talk
            </span>
          </div>
          <div className="nav2">
            <span
              onClick={() => setTab2("read")}
              className={tab2 === "read" ? "active" : ""}
            >
              Read
            </span>
            <span
              onClick={() => setTab2("viewSource")}
              className={tab2 === "viewSource" ? "active" : ""}
            >
              View Source
            </span>
            <span
              onClick={() => setTab2("viewHistory")}
              className={tab2 === "viewHistory" ? "active" : ""}
            >
              View history
            </span>
            {hideToolMenu && (
              <>
                <span className="tools" onClick={() => setOpenToolMenu(true)}>
                  Tools <IoIosArrowDown />
                </span>
                <Menu
                  open={openToolMenu}
                  onClose={() => setOpenToolMenu(false)}
                  disableAutoFocusItem={true}
                  sx={{
                    margin: "10rem 0 0 60rem",
                    "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                      {
                        borderRadius: 0,
                      },
                    "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                      padding: "12px 16px",
                    },
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
                  <MenuItem
                    className="main-content-menu-title"
                    sx={{
                      paddingLeft: 0,
                      ":hover": {
                        bgcolor: "transparent",
                      },
                    }}
                  >
                    Tools&nbsp;&nbsp;
                    <span
                      className="sidebar-hide-button"
                      onClick={handleCloseToolMenu}
                    >
                      move to sidebar
                    </span>
                  </MenuItem>
                  <Divider />

                  {toolMenuData.map((val, index) => {
                    return (
                      <div key={index}>
                        <MenuItem
                          sx={{
                            fontSize: "14px",
                            color: val.color,
                            paddingLeft: 0,
                            lineHeight: "1.4",
                            ":hover": {
                              bgcolor: "transparent",
                              textDecoration: val.divider
                                ? "none"
                                : "underline",
                            },
                          }}
                        >
                          {val.name}
                        </MenuItem>
                        {val.divider && <Divider />}
                      </div>
                    );
                  })}
                </Menu>
              </>
            )}
          </div>
        </nav>

        {/* toolsMenu */}
        {!hideToolMenu && <ToolsMenu setHideToolMenu={setHideToolMenu} />}
      </div>
    </>
  );
}

export default MainContent;
