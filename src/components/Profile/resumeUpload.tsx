import { Box, Button, CircularProgress, Typography } from "@mui/material";
import UploadResumePng from "../../../public/assets/images/resume.png";
import UploadResumeGif from "../../../public/assets/images/resume.gif";
import UploadResumeSuccess from "../../../public/assets/images/work-list.gif";
import React, { useState } from "react";
import Image from "next/image";
import { resumeUpload } from "@/pages/api/usesrs/users";
const ResumeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [resumeData, setResumeData] = useState("");
  const handleFileSelect = (file) => {
    console.log("FILE>", file);
    setSelectedFile(file);
    setUploadProgress(0);
    setIsUploading(false);
    setUploadSuccess(false);
    setTimeout(() => {
      handleUpload(file);
    }, 600);
  };

  const handleUpload = async (file) => {
    setIsUploading(true);
    if (file !== null) {
      const formData = new FormData();
      formData.append("resume", file);
      const result = await resumeUpload(formData, setUploadProgress); //axios call function
      // console.log("RESULT", result);
      if (result.status === 200 && result.data.success === true) {
        setUploadSuccess(true);
        setUploadProgress(0);
        setTimeout(() => {
          setResumeData(result.data.data);
          setUploadSuccess(false);
        }, 1000);
      }
      // const simulateUpload = setInterval(() => {
      //   setUploadProgress((prevProgress) => {
      //     if (prevProgress === 100) {
      //       clearInterval(simulateUpload);
      //       setUploadSuccess(true);
      //     }
      //     return prevProgress + 10;
      //   });
      // }, 500);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFileSelect(file);
  };
  const phoneRegex = /(\d{10})/;
  const address = /^[a-zA-Z0-9\s.,-]+$/;
  const match = resumeData.match(phoneRegex);
  const addressMatch = resumeData.match(address);
  console.log(addressMatch && addressMatch);
  const fields = {
    contactNo: match && match[0],
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* UploadResumeSuccess */}
        <Typography pb={2} textAlign={"center"} variant="h4">
          Please upload Resume to proceed.
        </Typography>
        {uploadSuccess ? (
          <>
            <Image src={UploadResumeSuccess} alt="Resume Upload" width={260} />
            <Typography variant="body1">Uploaded Successfully</Typography>
          </>
        ) : isUploading ? (
          <>
            <Image src={UploadResumeGif} alt="Resume Upload" width={260} />
            <CircularProgress variant="determinate" value={uploadProgress} />
            <Typography>{selectedFile?.name || ""}</Typography>
          </>
        ) : selectedFile ? (
          selectedFile.name
        ) : (
          <Image src={UploadResumePng} alt="Resume Upload" width={200} />
        )}
        <Box
          my={2}
          sx={{
            zIndex: 9,
            width: "50%",
            backgroundColor: "#E9F8F9",
            p: 10,
            borderRadius: 10,
            display: uploadSuccess ? "none" : "block",
          }}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="upload-file-input"
            style={{ display: "none" }}
            onChange={(event) => handleFileSelect(event.target.files[0])}
          />
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            htmlFor="upload-file-input"
          >
            <Typography variant="h5">Drag and drop file OR&nbsp;</Typography>
            <Button variant="text" component="span" disabled={isUploading}>
              <Typography variant="h6">
                click to upload
                {/*  */}
              </Typography>
            </Button>
          </label>
        </Box>
      </Box>

      {resumeData !== "" && <Typography>{resumeData}</Typography>}
    </Box>
  );
};

export default ResumeUpload;
