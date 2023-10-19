import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import G from "@mui/icons-material/Google";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import Whatsapp from "@mui/icons-material/WhatsApp";
import Facebook from "@mui/icons-material/FacebookRounded";
import DrawerComp from "./Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "darkgreen" }}>
        <Toolbar>
          <G sx={{ transform: "scale(2)" }} />
          
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "5%" }}>
                o Wild
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Features" />
                <Tab label="About Us" />
                <Tab label="Become a Guide" />
              </Tabs>
              <Facebook sx={{ marginLeft: "auto" }} />
              <Twitter sx={{ margin: "10px" }}/>
              <Instagram sx={{ margin: "10px" }}/>
              <Whatsapp sx={{ margin: "10px" }}/>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
