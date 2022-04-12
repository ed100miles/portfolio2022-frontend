import { Box, styled } from "@mui/material";
import BackgroundParticles from "./BackgroundParticles";
import { CustomPaper, CustomPaperNoGradient } from "./CustomPaper";
import { motion } from "framer-motion";
import theme from "../src/theme";
import NavBar from "./NavBar";

const ContentContainer = styled(Box, { theme })({
  height: "95vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.blue.shadow.dark,
});

const StyledBox = styled(Box, { theme })({
  backgroundColor: theme.palette.blue.dark,
});

export default function Layout(props) {
  return (
    <StyledBox>
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          type: "tween",
        }}
      >
        {props.showParticles && <BackgroundParticles />}
        <ContentContainer>
          {props.showParticles ? (
            <CustomPaper>
              <Box>{props.children}</Box>
            </CustomPaper>
          ) : (
            <CustomPaperNoGradient>
              <Box>{props.children}</Box>
            </CustomPaperNoGradient>
          )}
        </ContentContainer>
      </motion.div>
    </StyledBox>
  );
}
