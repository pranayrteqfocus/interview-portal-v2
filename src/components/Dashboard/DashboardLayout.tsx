import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import React, { useEffect, useLayoutEffect } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

function DashboardLayout(props: any) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = React.useState(false);
  useLayoutEffect(() => {
    if (
      window.location !== undefined &&
      isEmpty(localStorage.getItem("username"))
    ) {
      router.back();
      setIsLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isLoaded && (
        <>
          <Box marginX={10}>{props.children}</Box>
          <Sidebar />
        </>
      )}
    </>
  );
}

export default DashboardLayout;
