import { Typography, List, ListItem, Box, styled } from "@mui/material";
import { DoubleArrow } from "@mui/icons-material";
import Layout from "../components/Layout";
import { HomeContentContainer } from ".";
import theme from "../src/theme";
import { motion } from "framer-motion";

const AboutListBox = styled(Box, { theme })({
  maxHeight: "60vh",
  maxWidth: "80vw",
  backgroundColor: theme.palette.blue.shadow.dark,
  borderRadius: "1vmin",
  opacity: ".8",
  overflow: "scroll",
  marginLeft: "5vw",
  marginRight: "5vw",
  padding: "1vmin",
});

const aboutMeCopy = [
  "I am a full-stack developer. \
  Python is my favourite language but I also proficient with \
  JavaScript, HTML and CSS.",
  "I particularly enjoy computer vision, natural language programming\
  and machine learning projects, but so long as I am writing code and\
  learning new things - I'm happy!",
  "I strive to write robust, adaptable and reusable code through use\
  of object-oriented design principles of modularity, abstraction and\
  encapsulation. Knowledge of common software design patterns and\
  application of S.O.L.I.D design principles help me achieve this goal.",
  "I enjoy producing efficient programs through the selection and\
  implementation of suitable data structures and algorithms to reduce\
  computational complexity.",
  "I understand the importance of thoroughly testing code before it is\
  used in a production environment. So I am experienced writing\
  automated unit and integration tests, and with the test driven\
  development methodology.",
];

export default function Index() {
  return (
    <>
      <Layout showParticles={true}>
        <HomeContentContainer>
          <Typography variant="h2" gutterBottom>
            About Me
          </Typography>
          <AboutListBox>
            <List>
              {aboutMeCopy.map((copy, index) => {
                return (
                  <ListItem
                    key={index}
                    component={motion.div}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 * index,
                    }}
                  >
                    <DoubleArrow
                      sx={{
                        fontSize: "5vmin",
                        paddingRight: "1vmin",
                        color: theme.palette.blue.light,
                      }}
                    />
                    <Typography variant="p2">{copy}</Typography>
                  </ListItem>
                );
              })}
            </List>
          </AboutListBox>
        </HomeContentContainer>
      </Layout>
    </>
  );
}
