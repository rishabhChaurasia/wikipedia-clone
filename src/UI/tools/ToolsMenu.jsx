import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import { sidebarItems, toolMenuData } from "../../fakeData";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./toolsMenu.css";

function ToolsMenu({ setHideToolMenu }) {
  return (
    <div className="toolsMenu">
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
          "& .css-18sg6k4-MuiPaper-root-MuiDrawer-paper": {
            position: "absolute",
            border: 0,
            top: "8.6rem",
            right: "5rem",
            zIndex: "1",
            overflowY: "hidden",
            marginLeft: "1.5rem",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Paper className="scroll-toolMenu" elevation={0}>
          <List>
            <ListItem sx={{ paddingLeft: 0 }}>
              <ListItemText
                sx={{
                  "& .css-10hburv-MuiTypography-root": {
                    fontSize: "14px",
                    fontWeight: 700,
                  },
                }}
              >
                Tools&nbsp;&nbsp;
                <span
                  className="sidebar-hide-button"
                  onClick={() => setHideToolMenu(true)}
                >
                  hide
                </span>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          {toolMenuData.map((val) => {
            return (
              <>
                <List>
                  <ListItem sx={{ paddingLeft: 0, padding: "4px 0" }}>
                    <ListItemText
                      sx={{
                        "& .css-10hburv-MuiTypography-root": {
                          fontSize: "14px",
                          color: val.color,
                          cursor: val.divider ? "default" : "pointer",
                        },
                        ":hover": {
                          textDecoration: val.divider ? "none" : "underline",
                        },
                      }}
                    >
                      {val.name}
                    </ListItemText>
                  </ListItem>
                </List>
                {val.divider && <Divider />}
              </>
            );
          })}
        </Paper>
      </Drawer>
    </div>
  );
}

export default ToolsMenu;
