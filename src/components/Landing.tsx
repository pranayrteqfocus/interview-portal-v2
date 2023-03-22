import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import LaptopMan from "../../public/assets/images/laptop-man.png";
import Why from "../../public/assets/images/why-remove-bg.png";
import Company from "../../public/assets/images/multiple-company.png";
import Upload from "../../public/assets/images/upload.png";
import People from "../../public/assets/images/high-chance-bgremove.png";
// import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
// import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
// import CoPresentIcon from '@mui/icons-material/CoPresent';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SpeedIcon from "@mui/icons-material/Speed";
import VisibilityIcon from "@mui/icons-material/Visibility";

import CreateIcon from "@mui/icons-material/Create";
import ExploreIcon from "@mui/icons-material/Explore";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();
  return (
    <>
      {/* Landing Section */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item lg={7} md={6} sm={6} xs={12}>
            <Box padding={"5rem"} paddingTop="8rem">
              <Box>
                <Typography variant="h2">Interview Portal</Typography>
                <Typography fontSize={"20px"} textAlign="justify" py={"10px"}>
                  Welcome to our website! We offer a unique platform for
                  candidates to give interviews and for clients to find the
                  right fit for their company. Our system allows for seamless
                  video interviews to be recorded and stored in our secure
                  database.
                </Typography>
              </Box>
              <Box
                display={"flex"}
                paddingTop="20px"
                flexDirection="column-reverse"
              >
                <Button
                  size="large"
                  sx={{ alignSelf: "flex-start" }}
                  variant="contained"
                  style={{ backgroundColor: "#C7E8CA", color: "black" }}
                  onClick={() => router.push("/registerForm")}
                >
                  Get Started
                </Button>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent="space-between"
                position={"relative"}
                top={100}
              >
                <Box
                  sx={{ backgroundColor: "#C7E8CA", Width: 150 }}
                  display={"flex"}
                  p={2}
                  borderRadius={2}
                  flexDirection="row"
                  alignItems={"center"}
                >
                  <CloudUploadIcon />
                  <Typography variant="subtitle1" pl={2}>
                    Convenience
                  </Typography>
                </Box>
                <Box
                  sx={{ backgroundColor: "#C7E8CA", Width: 150 }}
                  display={"flex"}
                  p={2}
                  borderRadius={2}
                  flexDirection="row"
                  alignItems={"center"}
                >
                  <SpeedIcon />
                  <Typography variant="subtitle1" pl={2}>
                    Efficiency
                  </Typography>
                </Box>
                <Box
                  sx={{ backgroundColor: "#C7E8CA", Width: 150 }}
                  display={"flex"}
                  p={2}
                  borderRadius={2}
                  flexDirection="row"
                  alignItems={"center"}
                >
                  <VisibilityIcon />
                  <Typography variant="subtitle1" pl={2}>
                    Exposure
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <Box padding={"5rem"} paddingTop="8rem">
              <Image src={LaptopMan} width={"300"} alt="Laptop-man" />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Landing Section Ends */}
      {/* Why Interview Portal */}
      <Box padding={5} sx={{ background: "#F7FBFC" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Image src={People} width="700" alt="Laptop-man" />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5} pt={5}>
            <Box>
              <Typography variant="h2">Why Interview Portal</Typography>
              <Typography variant="overline" textAlign="justify">
                At our website, we understand the challenges candidates face in
                finding the right job opportunity, and companies face in finding
                the right talent. That's why we've created a platform that
                streamlines the interview process for both parties, making it
                easier for candidates to showcase their skills and for companies
                to find the perfect fit.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Why Interview Portal Ends */}

      {/* What we Offer Section */}
      <Box padding={5} sx={{ background: "white" }}>
        <Typography mb={3} align={"center"} variant="h2">
          What we offer
        </Typography>
        <Grid container alignItems={"center"} spacing={2}>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: 300 }}>
              <CardContent>
                <Box textAlign={"center"}>
                  <CreateIcon
                    sx={{
                      fontSize: 80,
                      borderRadius: 10,
                      background: "#000",
                      color: "#FFF",
                    }}
                    shapeRendering="geometricPrecision"
                  />
                </Box>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  variant="body1"
                  pt={3}
                  textAlign="center"
                  align="justify"
                  lineHeight={2}
                >
                  Our platform makes it easy to create a profile and upload your
                  video interview. You can quickly and easily showcase your
                  skills and experience to multiple potential employers.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: 300 }}>
              <CardContent>
                <Box textAlign={"center"}>
                  <ExploreIcon
                    sx={{
                      fontSize: 80,
                      borderRadius: 10,
                      background: "#000",
                      color: "#FFF",
                    }}
                    shapeRendering="geometricPrecision"
                  />
                </Box>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  variant="body1"
                  pt={3}
                  textAlign="center"
                  align="justify"
                  lineHeight={2}
                >
                  Our website provides access to a wide range of job
                  opportunities from various industries and companies. You can
                  explore and apply to job openings that match your skills and
                  interests.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: 300 }}>
              <CardContent>
                <Box textAlign={"center"}>
                  <ScheduleIcon
                    sx={{
                      fontSize: 80,
                      borderRadius: 10,
                      background: "#000",
                      color: "#FFF",
                    }}
                    shapeRendering="geometricPrecision"
                  />
                </Box>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  variant="body1"
                  pt={3}
                  textAlign="center"
                  align="justify"
                  lineHeight={1.6}
                >
                  By uploading your video interview to our platform, you can
                  save time and effort on the job application process. You can
                  share your video with multiple companies at once, streamlining
                  the hiring process.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, height: 300 }}>
              <CardContent>
                <Box textAlign={"center"}>
                  <AccountCircleIcon
                    sx={{
                      fontSize: 80,
                      borderRadius: 10,
                      background: "#000",
                      color: "#FFF",
                    }}
                    shapeRendering="geometricPrecision"
                  />
                </Box>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  variant="body1"
                  pt={3}
                  textAlign="center"
                  align="justify"
                  lineHeight={1.6}
                >
                  Our website provides a personalized experience tailored to
                  your skills and preferences. You can view job openings that
                  match your profile and receive recommendations for new
                  opportunities based on your interests.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/* What we Offer Section Ends */}

      {/* Quotes Section */}
      <Box
        display={"flex"}
        flexDirection="column"
        sx={{ background: "#F7FBFC" }}
        p={15}
      >
        <Typography variant="body1" align="justify" fontSize={40}>
          &quot;The future belongs to those who believe in the beauty of their
          dreams.&quot;
        </Typography>
        <Typography variant="subtitle1" fontSize={20} textAlign={"end"}>
          - Eleanor Roosevelt
        </Typography>
      </Box>
      {/* Quotes Section Ends */}
    </>
  );
}
