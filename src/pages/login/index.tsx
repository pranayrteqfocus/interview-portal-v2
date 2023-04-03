import {
  Box,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WomanStanding from "../../../public/assets/images/woman-standing.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUser } from "../api/usesrs/users";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loggedIn } from "@/store/reducers";
import { LoadingButton } from "@mui/lab";
import { isEmpty } from "lodash";

function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      window.location !== undefined &&
      !isEmpty(localStorage.getItem("username"))
    ) {
      router.push("/dashboard");
    }
  }, []);
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
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const result = await getUser(values);
      if (result.status === 200) {
        dispatch(loggedIn(result.data));
        localStorage.setItem("username", result?.data?.username);
        router.push("/dashboard");
      } else {
        setMessage(result.data);
        setSubmitting(false);
      }
    },
  });
  return (
    <Box className="landingBody">
      <Box
        display={"flex"}
        height={"100vh"}
        flexDirection="row"
        justifyContent="center"
        alignItems={"center"}
        textAlign="center"
      >
        <Card elevation={5} sx={{ borderRadius: 5, padding: 3, zIndex: 1 }}>
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
            <LoadingButton
              loading={formik.isSubmitting}
              loadingPosition="end"
              onClick={() => formik.handleSubmit()}
              type="submit"
              fullWidth
              disabled={formik.isSubmitting}
              variant="contained"
              size="large"
            >
              Login
            </LoadingButton>
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
