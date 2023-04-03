import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Box, Typography } from "@mui/material";
import React from "react";

function Index() {
  return (
    <>
      <DashboardLayout>
        <Typography>Dashboard</Typography>
      </DashboardLayout>
    </>
  );
}

export default Index;
