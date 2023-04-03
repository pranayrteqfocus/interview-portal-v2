import React from "react";
import Head from "next/head";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export default function HeaderComponent() {
  return (
    <>
      <Head>
        <title>Interview Portal</title>
        <meta
          name="description"
          content="Welcome to our website! We offer a unique platform for candidates to give interviews and for clients to find the right fit for their company. Our system allows for seamless video interviews to be recorded and stored in our secure database."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="landingBody"
          color="transparent"
          elevation={0}
          position="static"
        >
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Button
                LinkComponent={"a"}
                href="/login"
                variant="outlined"
                color="inherit"
                size="large"
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
