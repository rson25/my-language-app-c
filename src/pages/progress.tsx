import { Container, Typography, LinearProgress } from '@mui/material';
import Navbar from '../components/Navbar';

export default function Progress() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h3" gutterBottom>
          Your Progress
        </Typography>
        <Typography variant="h6">Overall Progress</Typography>
        <LinearProgress variant="determinate" value={75} sx={{ mt: 2, mb: 2 }} />
        <Typography variant="h6">Vocabulary Mastered</Typography>
        <LinearProgress variant="determinate" value={60} sx={{ mt: 2, mb: 2 }} />
        <Typography variant="h6">Lessons Completed</Typography>
        <LinearProgress variant="determinate" value={80} sx={{ mt: 2, mb: 2 }} />
      </Container>
    </>
  );
}