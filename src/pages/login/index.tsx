import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WomanStanding from "../../../public/assets/images/woman-standing.png";
function Index() {
  return (
    <Box>
      <Box
        display={"flex"}
        height={"100vh"}
        flexDirection="row"
        justifyContent="center"
        alignItems={"center"}
        textAlign="center"
      >
        <Card elevation={5} sx={{ borderRadius: 5, padding: 3 }}>
          <CardContent sx={{ padding: 3 }}>
            <Typography mb={1} variant="h3">
              Login
            </Typography>
            <Typography fontSize={13} sx={{ mb: 2 }} color="ActiveBorder">
              Don&apos;t have a account?{" "}
              <Link
                style={{ color: "blue", fontSize: 13 }}
                href={"/registerForm"}
              >
                Sign Up Here!!
              </Link>
            </Typography>
            <Box component={"form"}>
              <TextField
                label="Username or email"
                variant="outlined"
                fullWidth
              />
              <br />
              <br />
              <TextField
                type={"password"}
                label="Password"
                variant="outlined"
                fullWidth
              />
              <Box>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Button fullWidth variant="contained" size="large">
              Login
            </Button>
          </CardActions>
        </Card>
        <Image
          style={{ position: "absolute", right: 10 }}
          src={WomanStanding}
          alt=""
        />
      </Box>
    </Box>
  );
}

export default Index;
