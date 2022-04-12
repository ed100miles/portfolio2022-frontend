import * as React from "react";
import PropTypes from "prop-types";
import {
  styled,
  Tabs,
  Tab,
  Typography,
  Box
} from "@mui/material";

import SkillsCopy from "../public/copy/skills.json";
import theme from "../src/theme";

const Tabpanel = styled(Box)({
  bgcolor: theme.palette.blue.dark,
  borderTopRightRadius: '1vmin',
  borderBottomRightRadius: '1vmin',
  borderRight: `solid ${theme.palette.blue.light} 1px`,
  borderTop: `solid ${theme.palette.blue.light} 1px`,
  borderBottom: `solid ${theme.palette.blue.light} 1px`,
  width: "100%",
  overflow: "scroll",
})

const TabContainer = styled(Box)({
  flexGrow: 1,
  bgcolor: theme.palette.blue.shadow.dark,
  display: "flex",
  height: 224,
})

const StyledTabs = styled(Tabs)({
  borderRight: 1,
  borderColor: "divider",
  backgroundColor: theme.palette.blue.dark,
  borderTopLeftRadius:'1vmin',
  borderBottomLeftRadius:'1vmin',
  border: `dashed ${theme.palette.blue.shadow.light} 1px`,
  borderTop: `solid ${theme.palette.blue.shadow.light} 1px`,
  borderLeft: `solid ${theme.palette.blue.shadow.light} 1px`,
  borderBottom: `solid ${theme.palette.blue.shadow.light} 1px`,
  color: theme.palette.blue.light,
  ".Mui-selected":{
    color: theme.palette.blue.light,
    fontWeight: 'bold'
  },
  ".MuiTabs-indicator":{
    backgroundColor: theme.palette.blue.light
  }
})

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Tabpanel
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography
            variant="p3"
            sx={{color: theme.palette.blue.shadow.light}}>
            {children}
          </Typography>
        </Box>
      )}
    </Tabpanel>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

export const MakeSkillsTabs = ({skill}) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
  return (
    <TabContainer>
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        {Object.keys(SkillsCopy[skill]).map((key, index) => (
          <Tab label={key} {...a11yProps(0)} sx={{ color: "white" }} key={index}/>
        ))}
      </StyledTabs>
      {Object.keys(SkillsCopy[skill]).map((key, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {SkillsCopy[skill][key]}
          </TabPanel>
        );
      })}
    </TabContainer>
  );
};
