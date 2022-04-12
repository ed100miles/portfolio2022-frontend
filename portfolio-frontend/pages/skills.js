import {
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";
import { useState } from "react";
import Layout from "../components/Layout";
import theme from "../src/theme";
import { ExpandMore } from "@mui/icons-material";
import { HomeContentContainer } from ".";
import { MakeSkillsTabs } from "../components/SkillsTabs";
import SkillsCopy from "../public/copy/skills.json";

const SkillsAccordionBox = styled(Box, { theme })({
  maxHeight: "60vh",
  maxWidth: "80vw",
  backgroundColor: theme.palette.blue.dark,
  borderRadius: "1vmin",
  opacity: ".9",
  overflow: "scroll",
  marginLeft: "5vw",
  marginRight: "5vw",
});

const StyledExpandIcon = styled(ExpandMore, { theme })({
  color: theme.palette.blue.shadow.light,
});

const StyledAccordion = styled(Accordion, { theme })({
  backgroundColor: theme.palette.blue.shadow.dark,
});

export default function Skills() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout showParticles={true}>
      <HomeContentContainer 
        sx={{
          paddingTop:'5vh',
          height:'95vh',
          display: 'block',
          }}>
        <Typography variant="h2" sx={{width: '100%'}} align='center' gutterBottom>
          Technical Skills
        </Typography>
        <SkillsAccordionBox>
          {Object.keys(SkillsCopy).map((skill, index) => {
            return (
              <StyledAccordion
                key={index}
                expanded={expanded === skill}
                onChange={handleChange(skill)}
              >
                <AccordionSummary
                  expandIcon={<StyledExpandIcon />}
                  aria-controls={`${skill}bh-content`}
                  id={`${skill}bh-header`}
                >
                  <Typography variant="h4">{skill}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MakeSkillsTabs skill={skill} />
                </AccordionDetails>
              </StyledAccordion>
            );
          })}
        </SkillsAccordionBox>
      </HomeContentContainer>
    </Layout>
  );
}
