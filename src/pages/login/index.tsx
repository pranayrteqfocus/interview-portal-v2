import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import WomanStanding from "../../../public/assets/images/woman-standing.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUser } from "../api/usesrs/users";
import { useRouter } from "next/router";
function Index() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const result = await getUser(values);
      console.log("Result", result);
      if (result.status === 200) {
        localStorage.setItem("userInfo", result.data);
        router.push("/dashboard");
      } else {
        setMessage(result.data);
      }
    },
  });
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

            <Box component={"form"} onSubmit={() => formik.handleSubmit()}>
              <TextField
                label="Username or email"
                variant="outlined"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                fullWidth
              />
              <br />
              <br />
              <TextField
                type={"password"}
                label="Password"
                variant="outlined"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                fullWidth
              />
              <Box>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
              </Box>
            </Box>
            <Typography variant="overline" color={"red"}>
              {message}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => formik.handleSubmit()}
              type="submit"
              fullWidth
              variant="contained"
              size="large"
            >
              Login
            </Button>
          </CardActions>
        </Card>
        <Image
          style={{ position: "absolute", right: 10, zIndex: -1 }}
          src={WomanStanding}
          alt=""
        />
      </Box>
    </Box>
  );
}

export default Index;
