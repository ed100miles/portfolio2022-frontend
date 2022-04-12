import { Typography } from "@mui/material";
import Layout from "../../components/Layout";

export default function Index() {
  return (
    <>
      <Layout showParticles={true}>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
      </Layout>
    </>
  );
}
