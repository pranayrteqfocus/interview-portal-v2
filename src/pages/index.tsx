import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeaderComponent from "@/components/Header";
import { Box } from "@mui/material";
import Landing from "@/components/Landing";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Box>
        <Layout>
          <HeaderComponent />
          <Landing />
        </Layout>
      </Box>
    </>
  );
}
