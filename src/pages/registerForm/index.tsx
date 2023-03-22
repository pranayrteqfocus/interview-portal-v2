import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
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
    <>
      <Box
        display={"flex"}
        height={"100vh"}
        flexDirection="row"
        justifyContent="center"
        alignItems={"center"}
        textAlign="center"
      >
        <Card elevation={5} sx={{ width: "40%", borderRadius: 5 }}>
          <CardContent sx={{ padding: 3 }}>
            <Typography variant="h2">Register</Typography>
            <Typography sx={{ mb: 1.5 }} color="ActiveBorder">
              Already Register?{" "}
              <Link style={{ color: "blue" }} href={"/login"}>
                Login Here!!
              </Link>
            </Typography>
            <Box component={"form"}>
              <Grid my={2} direction={"row"} container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField label="Full Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField label="Username" variant="outlined" fullWidth />
                </Grid>
              </Grid>
              <Grid my={2} direction={"row"} container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField
                    type={"password"}
                    label="Password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField
                    label="Password-Again"
                    variant="outlined"
                    fullWidth
                    type={"password"}
                  />
                </Grid>
              </Grid>
              <Grid my={2} direction={"row"} container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField
                    label="Date of Birth"
                    variant="outlined"
                    placeholder="DD/MM/YYYY"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      sx={{ textAlign: "left" }}
                      label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Male</MenuItem>
                      <MenuItem value={20}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Box textAlign={"left"}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Account Type
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Candidate"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel
                      value="Candidate"
                      control={<Radio />}
                      label="Candidate"
                    />
                    <FormControlLabel
                      value="Employee"
                      control={<Radio />}
                      label="Employee"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box textAlign={"left"}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Please check the Terms & condition"
                />
              </Box>
            </Box>
          </CardContent>
          <CardActions sx={{ padding: 3 }}>
            <Button fullWidth variant="contained" size="large">
              Sign Up!
            </Button>
          </CardActions>
        </Card>
        <Image
          style={{ position: "absolute", right: 10 }}
          src={WomanStanding}
          alt=""
        />
      </Box>
    </>
  );
}

export default Index;
