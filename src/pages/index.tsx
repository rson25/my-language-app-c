import { Container, Typography, Grid } from '@mui/material';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to LanguageMaster
        </Typography>
        <Typography variant="h5" gutterBottom>
          Learn a new language with interactive lessons and practice tools
        </Typography>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {/* Add feature cards here */}
        </Grid>
      </Container>
    </>
  );
}

