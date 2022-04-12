import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import theme from "../src/theme";
import Link from "next/link";
import { motion } from "framer-motion";

const CardsContainer = styled(Box, { theme })({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "strech",
  justifyContent: "center",
  paddingTop: "3vh",
});

const StyledCard = styled(Card, { theme })({
  backgroundColor: theme.palette.blue.shadow.dark,
  border: `solid 1px ${theme.palette.blue.light}`,
  width: "30vw",
  minWidth: "250px",
  maxHeight: "20vh",
  margin: "1vw",
});

const StyledAnimatedLinkCard = ({ children, route }) => {
  return (
    <Link href={route} passHref>
      <StyledCard
        component={motion.div}
        whileHover={{
          scale: 1.05,
          cursor: "pointer",
        }}
        onClick
      >
        {children}
      </StyledCard>
    </Link>
  );
};

export const LandingPageCards = () => {
  return (
    <CardsContainer>
      <StyledAnimatedLinkCard route={"/skills"}>
        <CardContent>
          <Typography variant="h4" component="div">
            My Skills
          </Typography>
          <Typography variant="p1" component="div">
            Detailed overview of my technical skills
          </Typography>
        </CardContent>
        <CardMedia component="img" image="/images/skills.jpeg" alt="skills" />
      </StyledAnimatedLinkCard>
      <StyledAnimatedLinkCard route={"/projects/scrabble"}>
        <CardContent>
          <Typography variant="h4" component="div">
            Scrabble Cheat
          </Typography>
          <Typography variant="p1" component="div">
            Finds you the best words you can to play
          </Typography>
        </CardContent>
        <CardMedia component="img" image="/images/scrabble.jpeg" alt="scrabble" />
      </StyledAnimatedLinkCard>
      <StyledAnimatedLinkCard route={"/projects/underwriter"}>
        <CardContent>
          <Typography variant="h4" component="div">
            A.I. Underwriter
          </Typography>
          <Typography variant="p1" component="div">
            Calculates how likely a driver is to make a claim
          </Typography>
        </CardContent>
        <CardMedia component="img" image="/images/ai.webp" alt="skills" />
      </StyledAnimatedLinkCard>
    </CardsContainer>
  );
};
