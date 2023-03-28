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
import React, { useState } from "react";
import WomanStanding from "../../../public/assets/images/woman-standing.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUsers, Users } from "../api/usesrs/users";
import DatePicker from "@/components/Custom/DatePicker";
import { useRouter } from "next/router";
function Index() {
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Password is required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    birthDate: Yup.string().required("Required"),
    sex: Yup.string().required("Required"),
    accountType: Yup.string().required("Required"),
    terms: Yup.string().required("Required"),
  });

  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      password: "",
      passwordConfirm: "",
      birthDate: "",
      sex: "",
      accountType: "Candidate",
      terms: "",
      email: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values: Users) => {
      const result = await createUsers(values);
      if (result.status === 200) {
        setMessage(result.data);
        router.push("/thankyou");
      } else {
        setMessage(result.data);
      }
    },
  });
  return (
    <>
      <Box
        display={"flex"}
        height={"100vh"}
        my={3}
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
            <Box>
              <Typography variant="overline" color={"red"}>
                {message}
              </Typography>
            </Box>
            <Box component={"form"} onSubmit={() => formik.handleSubmit()}>
              <Box>
                <TextField
                  name="fullName"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Grid my={2} direction={"row"} container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    label="Username"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid my={2} direction={"row"} container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField
                    name="password"
                    type={"password"}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <TextField
                    name="passwordConfirm"
                    label="Confirm-Password"
                    variant="outlined"
                    fullWidth
                    type={"password"}
                    onChange={formik.handleChange}
                    value={formik.values.passwordConfirm}
                  />
                </Grid>
              </Grid>

              <Grid my={2} direction={"row"} container spacing={2}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <DatePicker
                    onChange={(e) => formik.setFieldValue("birthDate", e)}
                    // value={formik.values.birthDate}
                  />
                  {/* {console.log(formik.values.birthDate)} */}
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      sx={{ textAlign: "left" }}
                      label="Sex"
                      name="sex"
                      onChange={formik.handleChange}
                      value={formik.values.sex}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
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
                    onChange={formik.handleChange}
                    value={formik.values.accountType}
                  >
                    <FormControlLabel
                      value="Candidate"
                      name="accountType"
                      control={<Radio />}
                      label="Candidate"
                    />
                    <FormControlLabel
                      value="Employee"
                      name="accountType"
                      control={<Radio />}
                      label="Employee"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box textAlign={"left"}>
                <FormControlLabel
                  name="terms"
                  control={<Checkbox />}
                  onChange={formik.handleChange}
                  value={formik.values.terms.toString().toUpperCase()}
                  label="Please check the Terms & condition"
                />
              </Box>
            </Box>
          </CardContent>
          <CardActions sx={{ padding: 3 }}>
            <Button
              onClick={() => formik.handleSubmit()}
              type="submit"
              fullWidth
              variant="contained"
              size="large"
            >
              Sign Up!
            </Button>
          </CardActions>
        </Card>
        <Image
          style={{ position: "absolute", right: 10, zIndex: -1 }}
          src={WomanStanding}
          alt=""
        />
      </Box>
    </>
  );
}

export default Index;
