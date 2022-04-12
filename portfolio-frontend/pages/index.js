import { Typography, Box, styled } from "@mui/material";
import Layout from "../components/Layout";
import theme from "../src/theme";
import { motion } from "framer-motion";
import { LandingPageCards } from "../components/Cards";

export const HomeContentContainer = styled(Box, { theme })({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  paddingRight: '2vw',
  paddingLeft: '2vw'
});

export default function Index() {
  return (
    <Layout showParticles={true}>
      <HomeContentContainer
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          type: "tween",
          delay: 0.2,
        }}
      >
        <Typography variant="h1" gutterBottom>
          Hello!
        </Typography>
        <Typography variant="h3" gutterBottom>
          I am Ed Miles, a full-stack developer.
        </Typography>
        <Typography variant="h3" gutterBottom>
          Thanks for visiting my site.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Here are some highlights:
        </Typography>
        <LandingPageCards />
      </HomeContentContainer>
    </Layout>
  );
}
