import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ThumbsupMan from "../../../public/assets/images/thumbsup.png";
function Index() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ minHeight: "100vh" }}
    >
      <Typography my={3} variant="h5" fontWeight={200}>
        Thank you for Registration. Please Click{" "}
        <Link style={{ color: "blue" }} href={"/login"}>
          Login
        </Link>
        , to Login into Interview Portal!
      </Typography>
      <Image src={ThumbsupMan} width={400} alt="Laptop man Happy" />
    </Box>
  );
}

export default Index;
