import { Paper, styled } from "@mui/material";
import theme from "../src/theme";

export const CustomPaper = styled(Paper, { theme })({
    position:'absolute',
    backgroundColor: theme.palette.blue.dark,
    color: theme.palette.blue.shadow.light,
    height: "95vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: '1',
    elevation:'0',
    background: `linear-gradient(90deg, rgba(0,0,0,0) 10%, ${theme.palette.blue.dark} 25%, ${theme.palette.blue.dark} 75%, rgba(1,0,23,0) 90%)`
  });

export const CustomPaperNoGradient = styled(Paper, { theme })({
  position:'absolute',
  backgroundColor: theme.palette.blue.dark,
  color: theme.palette.blue.shadow.light,
  height: "95vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: '1',
  elevation:'0',
})

export default CustomPaper