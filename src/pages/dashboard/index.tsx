import Sidebar from "@/components/Dashboard/Sidebar";
import { Box, Typography } from "@mui/material";
import React from "react";

function Index() {
  return (
    <>
      <Box marginX={10}>
        <Typography>Dashboard</Typography>
      </Box>
      <Sidebar />
    </>
  );
}

export default Index;
