import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./sidebar.css";
import { sidebarItems } from "../../fakeData";

function Sidebar({ hideSidebar, setHideSidebar }) {
  return (
    !hideSidebar && (
      <div className="sidebar">
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
            "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
              position: "absolute",
              border: 0,
              bgcolor: "transparent",
              top: "8.6rem",
              overflowY: "hidden",
              marginLeft: "1.5rem",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            <ListItem>
              <ListItemText
                sx={{
                  marginLeft: "10px",
                  "& .css-10hburv-MuiTypography-root": {
                    fontWeight: 700,
                  },
                }}
              >
                Contents&nbsp;&nbsp;
                <span
                  className="sidebar-hide-button"
                  onClick={() => setHideSidebar(true)}
                >
                  hide
                </span>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <span
            style={{
              fontWeight: 700,
              fontSize: "14px",
              color: "#202122",
              margin: "0.7rem 0 0 2rem",
            }}
          >
            (Top)
          </span>
          <List>
            {sidebarItems.map((val, index) => (
              <ListItem
                key={index}
                disablePadding
                className="sidebar-link"
                sx={{ padding: `${!val.icon && "4.8px 0"}` }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {val.icon && <MdKeyboardArrowRight />}
                  </ListItemIcon>
                  <ListItemText primary={val.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    )
  );
}

export default Sidebar;
